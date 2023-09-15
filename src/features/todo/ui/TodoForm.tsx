import { FormControl } from "@chakra-ui/react";
import { Input } from "../../../shared/ui/Input/Input";
import { ChangeEvent, FormEvent, useState } from "react";
import { useTodos } from "../../../app/providers/TodoProvider/lib/TodoContext";

export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const { createTask } = useTodos();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTask(title);
    setTitle("");
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
