import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, HStack, IconButton, VStack, Text } from "@chakra-ui/react";
import { Todo } from "../interface";
import { iconStyle } from "../style";

export default function TodoList({
  todos,
  setTodos,
  count,
  setCount,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  function checked(todo: Todo) {
    if (todo.isChecked) {
      todo.isChecked = false;
      setCount(count - 1);
    } else {
      todo.isChecked = true;
      setCount(count + 1);
    }
  }

  function deleteTodo(todo: Todo) {
    setTodos(todos.filter((t) => t.content !== todo.content));
    todo.isChecked && setCount(count - 1);
  }

  return (
    <VStack spacing={1} align="strecth" sx={{ mx: "30%" }}>
      {todos.map((todo, index) => (
        <HStack
          key={index}
          sx={{ justifyContent: "space-between", p: 1, borderRadius: "md" }}
        >
          <Checkbox
            isChecked={todo.isChecked}
            onChange={() => checked(todo)}
            colorScheme="green"
            sx={{ borderColor: "#8fc29d" }}
          >
            {todo.isChecked ? (
              <Text sx={{ pl: "25px", textDecoration: "line-through" }}>
                {todo.content}
              </Text>
            ) : (
              <Text sx={{ pl: "25px" }}>{todo.content}</Text>
            )}
          </Checkbox>
          <IconButton
            onClick={() => deleteTodo(todo)}
            aria-label="Delete task"
            icon={<DeleteIcon />}
            colorScheme="red"
            sx={iconStyle}
          />
        </HStack>
      ))}
    </VStack>
  );
}
