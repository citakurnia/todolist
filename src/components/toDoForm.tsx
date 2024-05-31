import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { ITodo } from "../interface";
import { useState } from "react";

export default function ToDoForm({
  todos,
  setTodos,
  count,
}: {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  count: number;
}) {
  const [input, setInput] = useState<string>("");
  const updateTodos = () => {
    if (input) {
      let isDup: boolean = false;
      todos.forEach((item) => {
        if (item.todo.toLowerCase() == input.toLowerCase()) {
          isDup = true;
          alert("Task has already input");
        }
      });
      if (!isDup) {
        setTodos([...todos, { todo: input, isChecked: false }]);
      }
    }
  };

  return (
    <div>
      <Box
        sx={{
          mt: 4,
          borderColor: "#808080",
          borderStyle: "solid",
          borderWidth: "1px",
          maxW: "100vw",
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Text as="b" sx={{ fontSize: "2xl", mt: 4 }}>
          Done: {count}
        </Text>
      </Box>
      <Box sx={{ mx: "30%" }}>
        <VStack sx={{ alignItems: "flex-start" }}>
          <Text sx={{ fontSize: "sm", mt: 4 }}>Add todo</Text>
          <Input
            onChange={(e) => setInput(e.target.value)}
            sx={{
              py: "5px",
              bg: "#2D3748",
              borderColor: "gray.600",
              flex: "1",
            }}
          />
          <Button onClick={updateTodos} sx={{ bgColor: "skyblue", mt: 2 }}>
            <Text sx={{ color: "black" }}>ADD TASK</Text>
          </Button>
        </VStack>
      </Box>
    </div>
  );
}
