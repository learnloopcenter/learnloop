import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IoTrendingUp, IoFlame } from 'react-icons/io5';

const SectionContainer = styled.div`
  padding: 0 1rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TrendingIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
`;

const ScrollContainer = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TrendingList = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 0.5rem;
  min-width: max-content;
`;

const TrendingCard = styled(motion.div)`
  min-width: 280px;
  height: 120px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.primaryGradient};
  }
`;

const TrendingImage = styled.div<{ $image: string }>`
  width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 4px;
    right: 4px;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.primaryGradient};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const TrendingContent = styled.div`
  flex: 1;
`;

const TrendingTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem;
  line-height: 1.3;
`;

const TrendingStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const TrendingTag = styled.span`
  background: ${({ theme }) => theme.colors.primaryGradient};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
`;

const trendingTopics = [
  {
    id: 1,
    title: 'AI & Machine Learning Fundamentals',
    views: '1.2M',
    videos: 156,
    tag: '#trending',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'Quantum Physics Explained Simply',
    views: '890K',
    videos: 89,
    tag: '#hot',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=200&h=200&fit=crop'
  },
  {
    id: 3,
    title: 'Climate Change Solutions',
    views: '2.1M',
    videos: 234,
    tag: '#viral',
    image: 'https://images.unsplash.com/photo-1569163495571-7cfee2c96ea1?w=200&h=200&fit=crop'
  },
  {
    id: 4,
    title: 'Cryptocurrency & Blockchain',
    views: '756K',
    videos: 134,
    tag: '#rising',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&h=200&fit=crop'
  }
];

const TrendingSection: React.FC = () => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>
          <TrendingIcon>
            <IoTrendingUp />
          </TrendingIcon>
          Trending Now
        </SectionTitle>
      </SectionHeader>

      <ScrollContainer>
        <TrendingList>
          {trendingTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TrendingCard
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <TrendingImage $image={topic.image} />
                
                <TrendingContent>
                  <TrendingTitle>{topic.title}</TrendingTitle>
                  
                  <TrendingStats>
                    <Stat>
                      <IoFlame style={{ color: '#FF6B6B' }} />
                      {topic.views} views
                    </Stat>
                    <Stat>
                      {topic.videos} videos
                    </Stat>
                  </TrendingStats>
                  
                  <TrendingTag>{topic.tag}</TrendingTag>
                </TrendingContent>
              </TrendingCard>
            </motion.div>
          ))}
        </TrendingList>
      </ScrollContainer>
    </SectionContainer>
  );
};

export default TrendingSection;