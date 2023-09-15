import { FC, ReactNode, useCallback, useMemo, useState } from "react";
import { TodoContext } from "../lib/TodoContext";
import { filterTasks } from "../../../../shared/lib/filterTasks/filterTasks";
import { v4 as uuidv4 } from "uuid";
import { ITask, TaskFilter, TaskStatus } from "../../../../entities";

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: FC<TodoProviderProps> = (props) => {
  const { children } = props;
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [filter, setFilter] = useState<TaskFilter>(TaskFilter.All);
  const filtredTasks =
    filter === TaskFilter.All ? tasks : filterTasks(tasks, filter);

  const createTask = useCallback((title: string) => {
    const task = {
      id: uuidv4(),
      title,
      status: TaskStatus.Active,
    };
    setTasks((prev) => [...prev, task]);
  }, []);

  const changeStatus = useCallback((id: string, status: TaskStatus) => {
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          return { ...task, status };
        }
        return task;
      });
    });
  }, []);

  const clearCompleted = useCallback(() => {
    if (tasks.some((task) => task.status === TaskStatus.Completed)) {
      setTasks((prev) => {
        return prev.filter((task) => task.status !== TaskStatus.Completed);
      });
    }
  }, [tasks]);

  const value = useMemo(
    () => ({
      tasks: filtredTasks,
      createTask,
      changeStatus,
      filter,
      setFilter,
      clearCompleted,
    }),
    [filtredTasks, createTask, changeStatus, filter, setFilter, clearCompleted]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
