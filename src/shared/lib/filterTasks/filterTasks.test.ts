import { expect, test } from "vitest";
import { filterTasks } from "./filterTasks";
import { ITask, TaskStatus } from "../../../entities";

const tasks: ITask[] = [
  {
    id: "1",
    title: "test1",
    status: TaskStatus.Active,
  },
  {
    id: "2",
    title: "test2",
    status: TaskStatus.Completed,
  },
  {
    id: "3",
    title: "test3",
    status: TaskStatus.Active,
  },
  {
    id: "4",
    title: "test4",
    status: TaskStatus.Active,
  },
  {
    id: "5",
    title: "test5",
    status: TaskStatus.Completed,
  },
  {
    id: "6",
    title: "test6",
    status: TaskStatus.Active,
  },
];

const activeTasks: ITask[] = [
  {
    id: "1",
    title: "test1",
    status: TaskStatus.Active,
  },
  {
    id: "3",
    title: "test3",
    status: TaskStatus.Active,
  },
  {
    id: "4",
    title: "test4",
    status: TaskStatus.Active,
  },
  {
    id: "6",
    title: "test6",
    status: TaskStatus.Active,
  },
];
const completedTasks: ITask[] = [
  {
    id: "2",
    title: "test2",
    status: TaskStatus.Completed,
  },
  {
    id: "5",
    title: "test5",
    status: TaskStatus.Completed,
  },
];

test("filter active tasks", () => {
  expect(filterTasks(tasks, TaskStatus.Active)).toEqual(activeTasks);
});

test("filter completed tasks", () => {
  expect(filterTasks(tasks, TaskStatus.Completed)).toEqual(completedTasks);
});

test("filter empty array", () => {
  expect(filterTasks([], TaskStatus.Active)).toEqual([]);
  expect(filterTasks([], TaskStatus.Completed)).toEqual([]);
});

