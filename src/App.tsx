import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ITodo } from "./interface";
import ToDoList from "./components/toDoList";
import ToDoForm from "./components/toDoForm";
import { layoutStyle } from "./style";

function App() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <Box sx={layoutStyle}>
      <Text as="b" sx={{ fontSize: "2xl", textAlign: "center" }}>
        Chores ToDo List
      </Text>
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        count={count}
        setCount={setCount}
      />
      <ToDoForm todos={todos} setTodos={setTodos} count={count} />
    </Box>
  );
}

export default App;
