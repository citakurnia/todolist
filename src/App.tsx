import {
  Box,
  Button,
  Checkbox,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { css } from "@emotion/react";

function App() {
  const tasks: Array<string> = [
    "Create Guest Experience mobile check-in",
    "Document current CI/CD process",
    "Perform Code Review for final Pillow-Talk release",
    "Implement new Color Palette from Design Team",
    "Fix image uploading process for guest check-in",
    "Provide on-boarding documentation",
  ];

  return (
    <Box
      bgColor="#1a202c"
      w="100vw"
      h="100vh"
      p={4}
      color="white"
      display="flex"
      flexDirection="column"
    >
      <Text as="b" fontSize="2xl" textAlign="center">
        Chores ToDo List
      </Text>
      <VStack spacing={1} align="strecth" mx="30%">
        {tasks.map((task, index) => (
          <HStack
            key={index}
            justifyContent="space-between"
            bg="2D3748"
            p={3}
            borderRadius="md"
          >
            <Checkbox
              colorScheme="green"
              css={css`
                .chakra-checkbox__control {
                  border-color: #8fc29d;
                }
              `}
            >
              <Text pl="25px">{task}</Text>
            </Checkbox>
            <IconButton
              aria-label="Delete task"
              icon={<DeleteIcon />}
              colorScheme="red"
              bgColor="#1a202c"
              color="#fdb1b1"
              borderColor="#fdb1b1"
              borderStyle="solid"
              borderWidth="1px"
            />
          </HStack>
        ))}
      </VStack>
      <Box
        mt={4}
        borderColor="#808080"
        borderStyle="solid"
        borderWidth="1px"
        maxW="100vw"
      />
      <Text as="b" fontSize="2xl" textAlign="center" mt={4}>
        Done: 0
      </Text>
      <Box mx="30%">
        <VStack alignItems="flex-start">
          <Text fontSize="sm" mt={4}>
            Add todo
          </Text>
          <Input py="5px" bg="#2D3748" borderColor="gray.600" flex="1" />
          <Button bgColor="skyblue" mt={2}>
            <Text color="black">ADD TASK</Text>
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default App;
