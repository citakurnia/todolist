import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, HStack, IconButton, VStack, Text } from "@chakra-ui/react";
import { ITodo } from "../interface";
import { iconStyle } from "../style";

export default function ToDoList({
  todos,
  setTodos,
  count,
  setCount,
}: {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const checked = (input: ITodo) => {
    if (input.isChecked) {
      input.isChecked = false;
      setCount(count - 1);
    } else {
      input.isChecked = true;
      setCount(count + 1);
    }
  };

  const deleteTask = (input: ITodo) => {
    setTodos(todos.filter((task) => task.todo !== input.todo));
    input.isChecked && setCount(count - 1);
  };

  return (
    <VStack spacing={1} align="strecth" sx={{ mx: "30%" }}>
      {todos.map((item, index) => (
        <HStack
          key={index}
          sx={{ justifyContent: "space-between", p: 1, borderRadius: "md" }}
        >
          <Checkbox
            isChecked={item.isChecked}
            onChange={() => checked(item)}
            colorScheme="green"
            sx={{ borderColor: "#8fc29d" }}
          >
            {item.isChecked ? (
              <Text sx={{ pl: "25px", textDecoration: "line-through" }}>
                {item.todo}
              </Text>
            ) : (
              <Text sx={{ pl: "25px" }}>{item.todo}</Text>
            )}
          </Checkbox>
          <IconButton
            onClick={() => deleteTask(item)}
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
