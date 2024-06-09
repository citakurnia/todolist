import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { Todo } from "../interface";
import { useEffect, useRef, useState } from "react";
import { toDoFormBoxStyle } from "../style";

export default function TodoForm({
  todos,
  setTodos,
  count,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  count: number;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  function handleOnClick() {
    // Update todos
    const inputTrim = input.trim();

    if (inputTrim.length > 0) {
      let isDup = false;
      todos.forEach((item) => {
        if (item.content.toLowerCase() == inputTrim.toLowerCase()) {
          isDup = true;
          alert("Task has already input");
        }
      });

      if (!isDup) {
        setTodos([...todos, { content: inputTrim, isChecked: false }]);
      }
    } else {
      alert("Please enter a valid input");
    }

    // Reset input
    if (inputRef.current !== null) {
      inputRef.current.value = "";
    }
    inputRef.current?.focus();
  }

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
          <Button onClick={handleOnClick} sx={{ bgColor: "skyblue", mt: 2 }}>
            <Text sx={{ color: "black" }}>ADD TASK</Text>
          </Button>
        </VStack>
      </Box>
    </div>
  );
}
