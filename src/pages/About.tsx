import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Education from '../components/Education';

const About: React.FC = () => {
  return (
    <>
      <Box textAlign="center" mt={10}>
        <Heading as="h1" mb={4}>My Projects</Heading>
        <Text fontSize="lg">
          This is the projects page. Here you can find a list of projects I have worked on.
        </Text>
      </Box>
      <Education />
    </>
  );
};

export default About;
