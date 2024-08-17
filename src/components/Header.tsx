import React from 'react';
import { Box, Button, Image, useBreakpointValue, useDisclosure, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, VStack, Link } from '@chakra-ui/react';
import Navigation from './Navigation';
import logo from '../assets/logo.png';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showBurgerMenu = useBreakpointValue({ base: true, md: false });

  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="space-between" 
      p={4} 
      width="100%" 
      maxHeight="75px" 
      position="relative" 
      boxShadow="md" 
      bg="blackAlpha.50"
    >
      <Box 
        flex={showBurgerMenu ? 1 : 5} 
        display="flex" 
        alignItems="center"
      >
        <Image src={logo} alt="Logo" boxSize="6em" pt={2}/>
      </Box>
      {showBurgerMenu ? (
        <>
          <Button onClick={onOpen} variant="outline" colorScheme="black" size="lg">
            <span>&#9776;</span>
          </Button>
          <Drawer isOpen={isOpen} onClose={onClose} placement="top">
            <DrawerOverlay>
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
                <DrawerBody>
                  <VStack
                    spacing={4}
                    align="center"
                    justify="center"
                    p={4}
                    h="auto" 
                    borderRadius="md"
                    bg="white"
                  >
                    <Link href="/" _hover={{ textDecoration: 'none' }}>
                      <Button variant="link" colorScheme="black" size="lg">Home</Button>
                    </Link>
                    <Link href="/projects" _hover={{ textDecoration: 'none' }}>
                      <Button variant="link" colorScheme="black" size="lg">Projects</Button>
                    </Link>
                    <Link href="/Ekaterina Mirlenko CV.pdf" download _hover={{ textDecoration: 'none' }}>
                      <Button variant="link" colorScheme="black" size="lg">Download CV</Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/ekaterinamirlenko/" target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: 'none' }}>
                      <Button variant="link" colorScheme="black" size="lg">
                        <Box as="span" mr={2}>
                          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#121212", height: "2em" }} />
                        </Box>
                        LinkedIn
                      </Button>
                    </Link>
                    <Link href="https://github.com/mirlek" target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: 'none' }}>
                      <Button variant="link" colorScheme="black" size="lg">
                        <Box as="span" mr={2}>
                          <FontAwesomeIcon icon={faGithub} style={{ color: "#121212", height: "2em" }} />
                        </Box>
                        GitHub
                      </Button>
                    </Link>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      ) : (
        <Box flex={7}>
          <Navigation />
        </Box>
      )}
    </Box>
  );
}

export default Header;
