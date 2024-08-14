import React from 'react';
import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react';

const Container: React.FC<ContainerProps> = ({ children, ...rest }) => {
  return (
    <ChakraContainer maxW="container.xl" p={4} {...rest}>
      {children}
    </ChakraContainer>
  );
};

export default Container;
