import React from 'react';
import { Link } from 'react-router-dom';
import { HStack, Button, Icon, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navigation: React.FC = () => {
  return (
    <HStack as="nav" spacing={4} justify="space-between" p={4}>
      <HStack spacing={4}>
        <Button 
          as={Link} 
          to="/" 
          variant="link" 
          colorScheme="black" 
          size="lg" 
          style={{ textDecoration: 'none' }} 
          _hover={{ color: 'blackAlpha.500' }}>
          Home
        </Button>
        <Button 
          as={Link} 
          to="/projects" 
          variant="link" 
          colorScheme="black" 
          size="lg" 
          style={{ textDecoration: 'none' }} 
          _hover={{ color: 'blackAlpha.500' }}>
          Projects
        </Button>
        <Button 
          as={Link} 
          to="/about" 
          variant="link" 
          colorScheme="black" 
          size="lg" 
          style={{ textDecoration: 'none' }} 
          _hover={{ color: 'blackAlpha.500' }}>
          About
        </Button>
      </HStack>

      <HStack spacing={2}>
        <Button 
          as="a" 
          href="/Ekaterina Mirlenko CV.pdf" 
          download 
          variant="outline" 
          colorScheme="gray" 
          borderColor="black" 
          mr={5}
          ml={5}
          size='md' 
          _hover={{ bg: 'blackAlpha.300'}}>
          Download CV
        </Button>   
        <Button
          as="a"
          href="https://www.linkedin.com/in/ekaterinamirlenko/"
          target="_blank"
          rel="noopener noreferrer"
          title="Connect with me on LinkedIn"
          variant="link"
          colorScheme="black"
          size="lg"
        >
          <Box as="span" mr={2}>
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#121212", height: "2em" }} />
          </Box>        
        </Button>
        <Button
          as="a"
          href="https://github.com/mirlek"
          target="_blank"
          rel="noopener noreferrer"
          title="Connect with me on GitHub"
          variant="link"
          colorScheme="black"
          size="lg"
        >
          <Box as="span" mr={2}>
            <FontAwesomeIcon icon={faGithub} style={{ color: "#121212", height: "2em" }} />
          </Box>        
        </Button>
      </HStack>
    </HStack>
  );
};

export default Navigation;
