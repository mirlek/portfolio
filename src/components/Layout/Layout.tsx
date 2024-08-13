import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from '../Container';
import '../Layout/Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Container>
        {children}
      </Container>
      <Footer title={'© 2024 Ekaterina Mirlenko'} />
    </div>
  );
}

export default Layout;
