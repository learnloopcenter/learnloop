import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  IoCloudUpload, 
  IoSchool, 
  IoTrophy, 
  IoEye,
  IoVideocam,
  IoImage,
  IoDocumentText
} from 'react-icons/io5';

const CreateContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 700;
  margin: 0 0 0.5rem;
  background: ${({ theme }) => theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const CreateOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CreateCard = styled(motion.div)<{ $gradient: string }>`
  background: ${({ $gradient }) => $gradient};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 2rem;
  color: white;
  cursor: pointer;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%);
    pointer-events: none;
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  opacity: 0.9;
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.9;
  margin: 0;
  line-height: 1.4;
`;

const StatsSection = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 2rem;
  margin: 2rem auto 0;
  max-width: 600px;
`;

const StatsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1.5rem;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const createOptions = [
  {
    id: 'video',
    title: 'Upload Video',
    description: 'Share your knowledge with educational videos',
    icon: IoVideocam,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'quiz',
    title: 'Create Quiz',
    description: 'Build interactive quizzes for your content',
    icon: IoSchool,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 'live',
    title: 'Go Live',
    description: 'Start a live teaching session',
    icon: IoEye,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 'article',
    title: 'Write Article',
    description: 'Create in-depth educational content',
    icon: IoDocumentText,
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  }
];

const mockStats = {
  totalVideos: 24,
  totalViews: '156K',
  totalLikes: '12.4K',
  followers: '3.2K',
  earnings: '$1,240'
};

const Create: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (optionId: string) => {
    setSelectedOption(optionId);
    // Here you would navigate to the specific creation flow
    console.log(`Creating ${optionId}...`);
  };

  return (
    <CreateContainer>
      <Header>
        <Title>Create & Share</Title>
        <Subtitle>Inspire learners around the world</Subtitle>
      </Header>

      <CreateOptions>
        {createOptions.map((option, index) => {
          const Icon = option.icon;
          
          return (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CreateCard
                $gradient={option.gradient}
                onClick={() => handleOptionClick(option.id)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <CardIcon>
                  <Icon />
                </CardIcon>
                <CardTitle>{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CreateCard>
            </motion.div>
          );
        })}
      </CreateOptions>

      <StatsSection>
        <StatsTitle>Your Creator Dashboard</StatsTitle>
        <StatsGrid>
          <StatCard>
            <StatValue>{mockStats.totalVideos}</StatValue>
            <StatLabel>Videos</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{mockStats.totalViews}</StatValue>
            <StatLabel>Views</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{mockStats.totalLikes}</StatValue>
            <StatLabel>Likes</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{mockStats.followers}</StatValue>
            <StatLabel>Followers</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{mockStats.earnings}</StatValue>
            <StatLabel>Earnings</StatLabel>
          </StatCard>
        </StatsGrid>
      </StatsSection>
    </CreateContainer>
  );
};

export default Create;