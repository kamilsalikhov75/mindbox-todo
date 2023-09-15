import { ChangeEvent, FC } from "react";
import { Checkbox } from "../../../shared/ui/Checkbox/Checkbox";
import { useTodos } from "../../../app/providers/TodoProvider/lib/TodoContext";
import { ITask, TaskStatus } from "../../../entities";

interface TodoItemProps {
  task: ITask;
}

export const TodoItem: FC<TodoItemProps> = (props) => {
  const { task } = props;
  const { changeStatus } = useTodos();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      changeStatus(task.id, TaskStatus.Completed);
    } else {
      changeStatus(task.id, TaskStatus.Active);
    }
  };

  return (
    <Checkbox
      onChange={onChange}
      isChecked={task.status === TaskStatus.Completed}
      p="8px"
    >
      {task.title}
    </Checkbox>
  );
};
