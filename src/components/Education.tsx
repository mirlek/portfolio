import React from 'react';
import { Box, Text, VStack, HStack } from '@chakra-ui/react';

interface EducationDetail {
  year: string;
  label: string;
  description: string;
}

const EducationDetails: EducationDetail[] = [
  {
    year: '2022 - Nowadays',
    label: 'Frontend Development Education',
    description: 'Completed various learning courses in JavaScript, TypeScript, React, Vue.js, Next.js, Node.js, HTML, and CSS. Actively engaged in practical learning to apply theoretical knowledge in real-world scenarios.'
  },
  {
    year: '2016-2017',
    label: 'M.Sc. Computational Engineering and Technical Physics',
    description: 'Lappeenranta University of Technology | Lappeenranta, Finland'
  },
  {
    year: '2015-2017',
    label: 'M.Sc. Infocommunication Technologies and Communication Systems',
    description: 'Saint-Petersburg Electrotechnical University | Saint Petersburg, Russia'
  },
  {
    year: '2011-2015',
    label: 'Bachelor of Radio engineering, electronics, and telecommunications',
    description: 'Kazakh Agro-Technical University | Astana, Kazakhstan'
  },
];

const Education: React.FC = () => {
  return (
    <Box p={6} maxWidth="800px" mx="auto">
      <Text fontSize="2xl" mb={8} fontWeight="bold" textAlign="center">
        Education
      </Text>
      <VStack spacing={8} align="stretch">
        {EducationDetails.map((event, index) => (
          <HStack key={index} spacing={4} align="center">
            <Text fontSize="lg" fontWeight="bold">
                {event.year}
              </Text>
            <Box flex="1" borderLeft="2px solid teal" pl={4}>
              <Text fontSize="lg" fontWeight="bold">
                {event.label}
              </Text>
              <Text mt={2} color="gray.600">
                {event.description}
              </Text>
            </Box>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Education;
