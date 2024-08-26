import React from 'react';
import { Box, Heading, Text, SimpleGrid, Image, Link, useColorModeValue, Flex } from '@chakra-ui/react';
import dachnik from "../assets/dachnik_logo.png";
import eOSI from "../assets/eOSI_logo.png";
import rm from "../assets/rm_logo.png";
import crypto from "../assets/crypto.png";
import crud from "../assets/crud.png";
import crowdfunding from "../assets/crowsfunding.png";
import lian from "../assets/lian.png";
import restaurant from "../assets/restaurant.png";
import astana from "../assets/astana.png";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Dachnik",
    description: "I’m currently working on implementing new features and maintaining the frontend for the website using TypeScript, Next.js, and Vanilla Extract CSS. February 2024 - Current",
    imageUrl: dachnik,
    link: "https://dachnik-spb.ru/",
  },
  {
    title: "RestMonster",
    description: "I've worked on Admin panel and web-sites layout using Javascript, Vue.js and Bootstrap. September-February 2023-2024",
    imageUrl: rm,
    link: "https://restmonster.ru/",
  },
  {
    title: "eOSI",
    description: "I did adaptive layout of HeadPage using JavaScript, React and Bootstrap. April-May 2024",
    imageUrl: eOSI,
    link: "https://www.osibiling.kz/",
  },
  {
    title: 'Astana',
    description: 'Project on Vue.js(v3.0) and Bootstrap made in 2024',
    imageUrl: astana,
    link: 'https://github.com/mirlek/astana-vue',
  },
  {
    title: 'Crypto-App',
    description: 'Project on React.js made in 2023 with the use of Ant-Design CSS, chart-js-2, Server: Node.js, React Express',
    imageUrl: crypto,
    link: 'https://github.com/mirlek/crypto-app',
  },
  {
    title: 'CRUD',
    description: 'Project on React.js made in August 2022',
    imageUrl: crud,
    link: 'https://github.com/mirlek/crud-react',
  },
  {
    title: 'Crowdfunding Product Page',
    description: 'I did a layout using CSS participating into a code challenge in May 2022',
    imageUrl: crowdfunding,
    link: 'https://github.com/mirlek/crowdfunding-product-page',
  },
  {
    title: 'Restaurant Landing',
    description: 'CSS Layout. One of my work from 2020',
    imageUrl: restaurant,
    link: 'https://github.com/mirlek/restaurant_landing?tab=readme-ov-file',
  },{
    title: 'LIAN',
    description: 'My first website made in 2020',
    imageUrl: lian,
    link: 'https://github.com/mirlek/Lian',
  },
];

const ProjectCard: React.FC<Project> = ({ title, description, imageUrl, link }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('md', 'dark-lg');
  
  return (
    <Link href={link} isExternal>
      <Flex
        direction="column"
        bg={cardBg}
        boxShadow={cardShadow}
        borderRadius="md"
        overflow="hidden"
        transition="transform 0.2s"
        _hover={{ transform: 'scale(1.05)' }}
        height="100%"
      >
        {/* Изображение проекта */}
        <Image src={imageUrl} alt={title} objectFit="cover" width="100%" height="200px" />
        
        {/* Контейнер для текста (заголовок + описание) */}
        <Flex direction="column" p={4} justify="space-between" flex="1">
          <Box mb={2}>
            <Heading as="h3" size="md" noOfLines={2}>
              {title}
            </Heading>
            <Text fontSize="sm" mt={2} noOfLines={4}>
              {description}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Link>
  );
};

const Projects: React.FC = () => {
  return (
    <Box textAlign="center" mt={10} p={5}>
      <Heading as="h1" mb={14}>My Projects</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
