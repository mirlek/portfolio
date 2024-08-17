import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Container>{children}</Container>
      <Footer title="© 2024 Ekaterina Mirlenko" />
    </Flex>
  );
}

export default Layout;
