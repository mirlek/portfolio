import React from 'react';
import { Box, Text, Flex, SimpleGrid } from '@chakra-ui/react';
import { FaJs, FaReact, FaCss3Alt, FaChartLine, FaLightbulb, FaUserFriends, FaBrain, FaHandsHelping, FaSyncAlt } from 'react-icons/fa';
import { SiTypescript, SiHtml5, SiNextdotjs, SiVuedotjs, SiBootstrap, SiAntdesign, SiChakraui } from 'react-icons/si';

interface Skill {
  icon: React.ComponentType<any>;
  label: string;
  description: string;
}

const skills: Skill[] = [
  { icon: FaJs, label: 'JavaScript', description: '' },
  { icon: SiTypescript, label: 'TypeScript', description: '' },
  { icon: SiHtml5, label: 'HTML', description: '' },
  { icon: FaCss3Alt, label: 'CSS', description: '' },
  { icon: FaReact, label: 'React', description: 'Experienced in building dynamic user interfaces with React.' },
  { icon: SiNextdotjs, label: 'Next.js', description: 'Knowledgeable in server-side rendering and static site generation with Next.js.' },
  { icon: SiVuedotjs, label: 'Vue.js', description: 'Experienced in creating interactive user interfaces with Vue.js.' },
  { icon: SiBootstrap, label: 'Bootstrap', description: '' },
  { icon: SiAntdesign, label: 'Ant Design', description: '' },
  { icon: SiChakraui, label: 'Chakra UI', description: '' },
  { icon: FaSyncAlt, label: 'Adaptive', description: 'Excellent communication skills and adaptiveness gained through studies at Universities and living in different countries and cultures.' },
  { icon: FaChartLine, label: 'Problem-Solving', description: 'Сapable of structured long-time work, appreciates accuracy in results and excellent in multitasking.' },
  { icon: FaBrain, label: 'Open-minded', description: 'Сurious and have a fast speed of processing new incoming information.' },
  { icon: FaHandsHelping, label: 'Strong sense of ownership', description: 'Consistently takes initiative, assumes responsibility for outcomes, and is committed to driving projects to success. Demonstrates leadership and collaborates effectively with diverse teams.' },
  { icon: FaUserFriends, label: 'Teamwork', description: 'Collaborative and supportive, with a strong ability to work effectively in diverse teams. Thrives in group settings by building positive relationships, fostering open communication, and working together towards common goals. ' },
  { icon: FaLightbulb, label: 'Creativity', description: 'Innovative and forward-thinking, with a knack for generating original ideas and approaches. I enjoy exploring new concepts and finding creative solutions to complex problems.' },
];

const Skills: React.FC = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={6} mt={10} fontWeight="bold" textAlign="center">Hard Skills</Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4} mb={8}>
        {skills.slice(0, 4).map(({ icon: Icon, label, description }, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md" bg="white" boxShadow="md">
            <Flex align="center" mb={2}>
              <Box as={Icon} w={8} h={8} color="orange.600" mr={2} />
              <Text fontSize="lg" fontWeight="bold">{label}</Text>
            </Flex>
            <Text color="gray.600">{description}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <Flex justifyContent="center" mb={8}>
        <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} width={{ base: '100%', sm: '75%', md: '60%' }}>
          {skills.slice(4, 7).map(({ icon: Icon, label, description }, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="md" bg="white" boxShadow="md">
              <Flex align="center" mb={2}>
                <Box as={Icon} w={8} h={8} color="orange.600" mr={2} />
                <Text fontSize="lg" fontWeight="bold">{label}</Text>
              </Flex>
              <Text color="gray.600">{description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} mb={8}>
        {skills.slice(7, 10).map(({ icon: Icon, label, description }, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md" bg="white" boxShadow="md">
            <Flex align="center" mb={2}>
              <Box as={Icon} w={8} h={8} color="orange.600" mr={2} />
              <Text fontSize="lg" fontWeight="bold">{label}</Text>
            </Flex>
            <Text color="gray.600">{description}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <Text fontSize="2xl" mb={8} pt={10} fontWeight="bold" textAlign="center">Soft Skills</Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} mb={8}>
        {skills.slice(10).map(({ icon: Icon, label, description }, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md" bg="white" boxShadow="md">
            <Flex align="center" mb={2}>
              <Box as={Icon} w={8} h={8} color="teal.500" mr={2} />
              <Text fontSize="lg" fontWeight="bold">{label}</Text>
            </Flex>
            <Text color="gray.600">{description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
