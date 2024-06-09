import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Todo } from "./interface";
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";
import { layoutStyle } from "./style";

function App() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <Box sx={layoutStyle}>
      <Text as="b" sx={{ fontSize: "2xl", textAlign: "center" }}>
        Chores TODO List
      </Text>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        count={count}
        setCount={setCount}
      />
      <TodoForm todos={todos} setTodos={setTodos} count={count} />
    </Box>
  );
}

export default App;
