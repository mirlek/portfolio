import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Image,
  Flex,
  IconButton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import dachnik from "../assets/dachnik_logo.png";
import eOSI from "../assets/eOSI_logo.png";
import rm from "../assets/rm_logo.png";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "eOSI",
    description: "I did adaptive layout of HeadPage using JavaScript, React and Bootstrap",
    imageUrl: eOSI,
    link: "https://www.osibiling.kz/",
  },
  {
    title: "Dachnik",
    description: "I’m currently working on implementing new features and maintaining the frontend for the website using TypeScript, Next.js, and Vanilla Extract CSS",
    imageUrl: dachnik,
    link: "https://dachnik-spb.ru/",
  },
  {
    title: "RestMonster",
    description: "I've worked on Admin panel and web-sites layout using Javascript, Vue.js and Bootstrap",
    imageUrl: rm,
    link: "https://restmonster.ru/",
  },
];

const ProjectsCarousel: React.FC = () => {
  return (
    <>
    <Text fontSize="2xl" mb={6} fontWeight="bold" textAlign="center">Projects I worked on</Text>
    <Flex maxW="1200px" mx="auto" mt={8} mb={10} py={4} alignItems="center">
      <Flex flex="1" overflow="hidden">
        {projects.map((project, index) => (
          <Box key={index} p={2} flex="1" mx={2}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              bg="white"
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Image src={project.imageUrl} alt={project.title} height="20em" width="100%"/>

              <Box p={6}>
                <Heading fontSize="xl" mb={4} color="teal.500">
                  {project.title}
                </Heading>
                <Text mb={4} height="6em">{project.description}</Text>
                <Flex justifyContent="center">
                  <Button
                    as="a"
                    href={project.link}
                    colorScheme="teal"
                    target="_blank"
                    variant="outline"
                  >
                    Explore
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>

      <ChakraLink as={Link} to="/projects" display="flex" alignItems="center">
        <IconButton
          aria-label="View More Projects"
          icon={<ChevronRightIcon boxSize="2em"/>}
          bg="teal.500"
          color="white"
          borderRadius="full"
          height="10em"
          width="50px"
          _hover={{ bg: "teal.600" }}
          _active={{ bg: "teal.700" }}
          title="Explore my other projects"
        />
      </ChakraLink>
    </Flex>
    </>
  );
};

export default ProjectsCarousel;
