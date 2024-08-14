import React from 'react';
import { Box, Card, CardBody, Heading, Stack, Text, Image, Flex } from '@chakra-ui/react';
import me from '../assets/me_circle.png'
import Skills from '../components/Skills';
import Education from '../components/Education';

const HomePage: React.FC = () => {
  return (
    <>
      <Box textAlign="center" mt={10} mb={10}>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='blank'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '500px' }}
            src={me}
            alt='My photo'
            p={4}

          />
          <Flex
            direction="column"
            align="center"
            justify="center"
            p={4} 
          >
            <Stack
              spacing={4} 
              align="center"
              textAlign="center" 
            >
              <CardBody>
                <Heading as="h1" mb={4} fontSize="3xl" lineHeight="1.2" textTransform="uppercase">
                  Ekaterina Mirlenko
                </Heading>
                <Heading as="h2" mb={4} fontSize="2xl" lineHeight="1.4" >
                  Frontend Developer
                </Heading>
                <Text py={4} fontSize="lg" lineHeight="1.6" textAlign="left">
                  I am a dedicated Frontend Developer with Project Manager skills and more than 2 years of experience in development, with proficiency in JavaScript, TypeScript, HTML, CSS, React, Next.js, and Vue.js. I am passionate about creating engaging user experiences through clean and modern designs.
                </Text>
              </CardBody>
            </Stack>
          </Flex>
        </Card>
      </Box>
      <Skills />
    </>
  );
};

export default HomePage;
