import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const MainContent = styled.main`
  flex: 1;
  padding-bottom: 80px; /* Space for bottom navigation */
  overflow-y: auto;
  position: relative;
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <LayoutContainer>
      <MainContent>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </MainContent>
      <BottomNavigation />
    </LayoutContainer>
  );
};

export default Layout;