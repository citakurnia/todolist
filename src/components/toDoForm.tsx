import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { ITodo } from "../interface";
import { useEffect, useRef, useState } from "react";
import { toDoFormBoxStyle } from "../style";

export default function ToDoForm({
  todos,
  setTodos,
  count,
}: {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  count: number;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const inputToEmptyString = () => {
    if (inputRef.current && inputRef.current.value) {
      inputRef.current.value = "";
    }
    inputRef.current?.focus();
  };

  const updateTodos = () => {
    const regSpace = /^\s*$/;
    if (input.match(regSpace)) {
      alert("Please enter a valid input");
    }

    const inputTrim = input.trim();
    if (inputTrim) {
      let isDup = false;
      todos.forEach((item) => {
        if (item.todo.toLowerCase() == inputTrim.toLowerCase()) {
          isDup = true;
          alert("Task has already input");
        }
      });
      if (!isDup) {
        setTodos([...todos, { todo: inputTrim, isChecked: false }]);
      }
    }
  };

  return (
    <div>
      <Box sx={toDoFormBoxStyle} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Text as="b" sx={{ fontSize: "2xl", mt: 4 }}>
          Done: {count}
        </Text>
      </Box>
      <Box sx={{ mx: "30%" }}>
        <VStack sx={{ alignItems: "flex-start" }}>
          <Text sx={{ fontSize: "sm", mt: 4 }}>Add todo</Text>
          <Input
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
            sx={{
              py: "5px",
              bg: "#2D3748",
              borderColor: "gray.600",
              flex: "1",
            }}
          />
          <Button
            onClick={() => {
              updateTodos();
              inputToEmptyString();
            }}
            sx={{ bgColor: "skyblue", mt: 2 }}
          >
            <Text sx={{ color: "black" }}>ADD TASK</Text>
          </Button>
        </VStack>
      </Box>
    </div>
  );
}
