import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  IoSearch, 
  IoTrendingUp, 
  IoSchool, 
  IoFlash,
  IoRocket,
  IoColorPalette,
  IoMdMicrophone,
  IoGameController
} from 'react-icons/io5';
import Header from './Header';
import TrendingSection from './TrendingSection';
import CategoryGrid from './CategoryGrid';
import CreatorSpotlight from './CreatorSpotlight';
import QuizChallenges from './QuizChallenges';

const DiscoverContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding-bottom: 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const SectionSpacing = styled.div`
  margin-bottom: 2rem;
`;

const Discover: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <DiscoverContainer>
      <ContentWrapper>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <SectionSpacing>
          <TrendingSection />
        </SectionSpacing>
        
        <SectionSpacing>
          <CategoryGrid />
        </SectionSpacing>
        
        <SectionSpacing>
          <QuizChallenges />
        </SectionSpacing>
        
        <SectionSpacing>
          <CreatorSpotlight />
        </SectionSpacing>
      </ContentWrapper>
    </DiscoverContainer>
  );
};

export default Discover;