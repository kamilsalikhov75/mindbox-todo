import { FormControl, useToast } from "@chakra-ui/react";
import { Input } from "../../../shared/ui/Input/Input";
import { ChangeEvent, FormEvent, useState } from "react";
import { useTodos } from "../../../app/providers/TodoProvider/lib/TodoContext";

export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const { createTask } = useTodos();
  const toast = useToast();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.length > 0) {
      createTask(title);
      setTitle("");
    } else {
      toast({
        title: "Type a task name",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <Input
          value={title}
          onChange={onChange}
          placeholder="What needs to be done?"
        />
      </FormControl>
    </form>
  );
};
