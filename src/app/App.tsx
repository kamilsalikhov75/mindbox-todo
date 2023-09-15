import { Todo } from "../pages/Todo/Todo";
import { ThemeProvider } from "./providers/ThemeProvider/ui/ThemeProvider";
import { TodoProvider } from "./providers/TodoProvider/ui/TodoProvider";

function App() {

  return (
    <ThemeProvider>
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
