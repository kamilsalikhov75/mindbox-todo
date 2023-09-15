import { Divider, Stack } from "@chakra-ui/react";
import { useTodos } from "../../../app/providers/TodoProvider/lib/TodoContext";
import { TodoItem } from "./TodoItem";
import React from "react";

export const TodoList = () => {
  const { tasks } = useTodos();
  return (
    <Stack maxH="500px" overflow="auto">
      <Divider />
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <TodoItem task={task} />
          <Divider />
        </React.Fragment>
      ))}
    </Stack>
  );
};
