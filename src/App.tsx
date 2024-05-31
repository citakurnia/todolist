import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ITodo } from "./interface";
import ToDoList from "./components/toDoList";
import ToDoForm from "./components/toDoForm";

function App() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <Box
      sx={{
        bgColor: "#1a202c",
        w: "100vw",
        h: "100vh",
        p: 4,
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
