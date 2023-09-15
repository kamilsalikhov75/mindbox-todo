import { Card, CardBody, Text } from "@chakra-ui/react";
import { useTodos } from "../../../app/providers/TodoProvider/lib/TodoContext";
import { getItemsLeftString } from "../../../shared/lib/getItemsLeftString/getItemsLeftString";
import { TodoTabs } from "./TodoTabs";
import { Button } from "../../../shared/ui/Button/Button";
import { TaskStatus } from "../../../entities";

export const Footer = () => {
  const { tasks, clearCompleted } = useTodos();
  const text = getItemsLeftString(
    tasks.filter((task) => task.status === TaskStatus.Active)
  );
  return (
    <Card>
      <CardBody
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>{text}</Text>
        <TodoTabs />
        <Button onClick={clearCompleted}>Clear completed</Button>
      </CardBody>
    </Card>
  );
};
