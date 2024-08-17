import React from 'react';
import { Box, Heading, Stack } from '@chakra-ui/react';
import Navigation from './Navigation';

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <Box 
      as="footer" 
      display="flex" 
      alignItems="center" 
      justifyContent="space-between" 
      p={4} 
      borderTop="1px solid" 
      borderColor="gray.200"
      width="100%"
      position="relative"
      bottom="0"
    >
      <Heading as="h3" size="md" margin={0}>
        {title}
      </Heading>
      <Navigation />
    </Box>
  );
}

export default Footer;
