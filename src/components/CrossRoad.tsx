import React from "react";
import { Box, Button, Heading, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CrossRoad: React.FC = () => {
  return (
    <Flex maxW="1200px" mx="auto" mt={8} gap={4}>
      <Box
        flex="1"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        bg="white"
        p={6}
      >
        <Heading fontSize="xl" mb={4} textAlign="center">
          If you want to learn more about my path 
        </Heading>
        <Button
          as={Link}
          to="/about"
          colorScheme="teal"
          variant="solid"
          width="100%"
        >
          Explore "About"
        </Button>
      </Box>

      <Box
        flex="1"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        bg="white"
        p={6}
      >
        <Heading fontSize="xl" mb={4} textAlign="center">
          If you want to see my development progress
        </Heading>
        <Button
          as={Link}
          to="/projects"
          colorScheme="teal"
          variant="solid"
          width="100%"
        >
          Explore "Projects"
          </Button>
      </Box>
    </Flex>
  );
};

export default CrossRoad;
