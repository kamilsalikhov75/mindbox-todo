import { Tab, TabList, Tabs } from "@chakra-ui/react";
import { TaskFilter } from "../../../entities/task/types/types";
import { useTodos } from "../../../app/providers/TodoProvider/lib/TodoContext";

export const TodoTabs = () => {
  const { setFilter } = useTodos();
  const taskFilters = Object.values(TaskFilter);

  return (
    <Tabs onChange={(index) => setFilter(taskFilters[index])}>
      <TabList>
        {taskFilters.map((filter) => (
          <Tab key={filter}>{filter}</Tab>
        ))}
      </TabList>
    </Tabs>
  );
};
