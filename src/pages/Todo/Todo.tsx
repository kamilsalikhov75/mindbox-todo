import { Card, Center } from "@chakra-ui/react";
import { Footer } from "../../features/todo/ui/Footer";
import { TodoForm } from "../../features/todo/ui/TodoForm";
import { TodoList } from "../../features/todo/ui/TodoList";

export const Todo = () => {
  return (
    <Center height="100vh" bg='gray.400'>
      <Card maxWidth="600px" w="100%">
        <TodoForm />
        <TodoList />
        <Footer />
      </Card>
    </Center>
  );
};
