import React from 'react';
import { Box, Heading, Text, VStack, List, ListItem, Grid } from '@chakra-ui/react';
import Education from '../components/Education';

const About: React.FC = () => {
  return (
    <>
      <Box textAlign="left" mt={10} px={6}>
        <Heading as="h1" mb={14} textAlign="center">My story</Heading>
        <Text fontSize="lg" textAlign="left">
          I'm a dedicated Frontend Developer with over 2 years of hands-on experience and proficiency in JavaScript, React and Vue, HTML, Bootstrap and Ant Design CSS frameworks.  <br />  <br />
          My path to front-end development was not straightforward. I have worked as a Digital Marketing Specialist in Semrush and as an IT Project Manager in the property management software startup. This experience helped me to discover my true passion and greatest motivation.
          I am passionate about converting design concepts into captivating user experiences using the latest trends in front-end development.  <br /> 
          For the last 2 years, I have achieved significant results in creating web applications. I started from a background and have completed numerous courses and projects in front-end development.
          <br />  <br />
          Driven to broaden my expertise, I aspire to obtain a Full-Stack Developer’s qualifications, contribute to innovative impactful projects and grow within a team that values curiosity and has a supportive work environment.
        </Text>
      </Box>

      {/* Work Experience Section */}
      <Box textAlign="left" mt={10} px={6}>
        <Text fontSize="2xl" mb={8} fontWeight="bold" textAlign="center">
          Work experience
        </Text>
        {/* Dachnik Project */}
        <VStack align="start" spacing={4}>
          <Box width="100%">
            <Grid templateColumns="1fr auto" alignItems="center">
              <Box>
                <Heading as="h3" size="md">Frontend Developer</Heading>
                <Text fontSize="sm" color="gray.500">Dachnik startup project | Remote, Volunteering</Text>
              </Box>
              <Text fontSize="sm" color="black" textAlign="right">March 2023 – Present</Text>
            </Grid>
          </Box>
          <List spacing={2} pl={4}>
            <ListItem>
              - Developing the frontend for a website for a house construction company - Dachnik.
            </ListItem>
            <ListItem>
              - Engaging in the creation and enhancement of dynamic, user-friendly interfaces using TypeScript, Next.js, and Vanilla Extract CSS.
            </ListItem>
            <ListItem>
              - Collaborating with the Backend Developer to integrate frontend interfaces with server-side applications and RESTful APIs, ensuring seamless data flow and functionality.
            </ListItem>
            <ListItem>
              - Optimizing the website for search engines (SEO) to enhance user engagement and conversion rates, aligning frontend development with overall marketing goals.
            </ListItem>
          </List>
        </VStack>

        {/* RestMonster Project */}
        <VStack align="start" spacing={4} mt={8}>
          <Box width="100%">
            <Grid templateColumns="1fr auto" alignItems="center">
              <Box>
                <Heading as="h3" size="md">Junior Frontend Developer</Heading>
                <Text fontSize="sm" color="gray.500">RestMonster startup project | Remote, Volunteering</Text>
              </Box>
              <Text fontSize="sm" color="black" textAlign="right">September 2023 – February 2024</Text>
            </Grid>
          </Box>
          <List spacing={2} pl={4}>
            <ListItem>
              - Actively participated in the development of user interfaces for both Admin site and Web site, in collaboration with a Senior Frontend Developer. 
            </ListItem>
            <ListItem>
              - Improved user experience by continuous manual testing and resolving possible errors.
            </ListItem>
            <ListItem>
              - Applied knowledge pursued learning through Frontend Learning courses.
            </ListItem>
          </List>
        </VStack>

        {/* Professional Development */}
        <VStack align="start" spacing={4} mt={8}>
          <Box width="100%">
            <Grid templateColumns="1fr auto" alignItems="center">
              <Box>
                <Heading as="h3" size="md">Professional Development</Heading>
                <Text fontSize="sm" color="gray.500">Frontend Development Education</Text>
              </Box>
              <Text fontSize="sm" color="black" textAlign="right">September 2022 – Present</Text>
            </Grid>
          </Box>
          <List spacing={2} pl={4}>
            <ListItem>
              - Completed various learning courses in JavaScript, TypeScript, React, Vue.js, Next.js, and Node.js. I learned to work with CSS frameworks, like Bootstrap, Chakra UI and Ant-Design.
            </ListItem>
            <ListItem>
              - Actively engaged in practical learning to apply theoretical knowledge in real-world scenarios.
            </ListItem>
          </List>
        </VStack>

        {/* Maternity Leave */}
        <VStack align="start" spacing={4} mt={8}>
          <Box width="100%">
            <Grid templateColumns="1fr auto" alignItems="center">
              <Box>
                <Heading as="h3" size="md">Maternity Leave</Heading>
                <Text fontSize="sm" color="gray.500">Full-time parenting and relocation to Oslo, Norway</Text>
              </Box>
              <Text fontSize="sm" color="black" textAlign="right">April 2021 – August 2022</Text>
            </Grid>
          </Box>
        </VStack>

        {/* IT Project Manager - Ubertas Group */}
        <VStack align="start" spacing={4} mt={8}>
          <Box width="100%">
            <Grid templateColumns="1fr auto" alignItems="center">
              <Box>
                <Heading as="h3" size="md">IT Project Manager</Heading>
                <Text fontSize="sm" color="gray.500">Ubertas Group – Twigtech | Melbourne, Australia, Remote, Full-time</Text>
              </Box>
              <Text fontSize="sm" color="black" textAlign="right">May 2020 – March 2021</Text>
            </Grid>
          </Box>
          <List spacing={2} pl={4}>
            <ListItem>
              - Led a team of 8 developers responsible for the implementation, support, and infrastructure of payment and cash management solutions within the Twigtech project.
            </ListItem>
            <ListItem>
              - Coordinated debugging process and tracked task fixes with manual QA that accelerated the speed of development.
            </ListItem>
            <ListItem>
              - Accomplished Junior Frontend tasks (React.js), helping the team with minor tasks.
            </ListItem>
            <ListItem>
              - Created internal technical documentation and educational content as the User Guide and Product How-to-Use videos.
            </ListItem>
            <ListItem>
              - Integrated Scrum into existing workflow, leading to improved sprint planning and quicker adaptation to changes.
            </ListItem>
          </List>
        </VStack>

        {/* Digital Marketing Specialist - Semrush */}
        <VStack align="start" spacing={4} mt={8}>
          <Box width="100%">
            <Grid templateColumns="1fr auto" alignItems="center">
              <Box>
                <Heading as="h3" size="md">Digital Marketing Specialist</Heading>
                <Text fontSize="sm" color="gray.500">Semrush Inc. | St.Petersburg, Russia, On-site, Full-tim</Text>
              </Box>
              <Text fontSize="sm" color="black" textAlign="right">July 2018 – April 2019</Text>
            </Grid>
          </Box>
          <List spacing={2} pl={4}>
            <ListItem>
              - Made HTML & CSS layouts of e-mails and increased the engagement of new users by 10%.
            </ListItem>
            <ListItem>
              - Collaborated with marketing teams to help develop new growth ideas and marketing strategies, updating teams on trends.
            </ListItem>
            <ListItem>
              - Continuous A/B testing led to the increase of CTR of weekly digest campaigns by 15%.
            </ListItem>
          </List>
        </VStack>
      </Box>

      <Education />
    </>
  );
};

export default About;
