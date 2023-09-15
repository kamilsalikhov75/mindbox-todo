import { ITask, TaskFilter } from "../../../entities";

export const filterTasks = (tasks: ITask[], filter: TaskFilter) => {
  return tasks.filter((task) => {
    const status = task.status as unknown as TaskFilter;
    return status === filter;
  });
};
