import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default Container;
