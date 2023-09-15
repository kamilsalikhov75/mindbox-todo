import { createContext, useContext } from "react";
import { ITask, TaskFilter, TaskStatus } from "../../../../entities";

interface TodoContextType {
  tasks: ITask[];
  createTask: (title: string) => void;
  changeStatus: (id: string, status: TaskStatus) => void;
  filter: TaskFilter;
  setFilter: (filter: TaskFilter) => void;
  clearCompleted: () => void;
}

export const TodoContext = createContext<TodoContextType>({
  tasks: [],
  createTask: () => null,
  changeStatus: () => null,
  filter: TaskFilter.All,
  setFilter: () => null,
  clearCompleted: () => null,
});

export const useTodos = () => useContext(TodoContext);
