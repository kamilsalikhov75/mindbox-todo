export interface ITask {
  id: string;
  title: string;
  status: TaskStatus;
}

export enum TaskStatus {
  Active = "Active",
  Completed = "Completed",
}

export enum TaskFilter {
  All = "All",
  Active = "Active",
  Completed = "Completed",
}
