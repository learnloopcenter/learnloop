import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IoSchool, IoTrophy, IoFlash, IoTimer } from 'react-icons/io5';

const SectionContainer = styled.div`
  padding: 0 1rem;
`;

const SectionHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const ChallengeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ChallengeCard = styled(motion.div)<{ $gradient: string }>`
  background: ${({ $gradient }) => $gradient};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  color: white;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

const ChallengeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const ChallengeIcon = styled.div`
  font-size: 1.5rem;
  opacity: 0.9;
`;

const ChallengeBadge = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  backdrop-filter: blur(10px);
`;

const ChallengeTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  margin: 0 0 0.5rem;
  line-height: 1.3;
`;

const ChallengeDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: 0 0 1rem;
  opacity: 0.9;
  line-height: 1.4;
`;

const ChallengeStats = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
`;

const ActionButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: 1rem;
  backdrop-filter: blur(10px);
  align-self: flex-start;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const challenges = [
  {
    id: 1,
    title: 'Math Lightning Round',
    description: 'Solve 10 calculus problems in under 2 minutes!',
    icon: IoFlash,
    badge: 'Daily',
    participants: '2.3k',
    duration: '2min',
    reward: '500 XP',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    title: 'Science Quiz Master',
    description: 'Test your knowledge across physics, chemistry, and biology.',
    icon: IoSchool,
    badge: 'Weekly',
    participants: '1.8k',
    duration: '5min',
    reward: '1000 XP',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 3,
    title: 'Code Challenge',
    description: 'Debug this Python function and earn programming points!',
    icon: IoTrophy,
    badge: 'Featured',
    participants: '956',
    duration: '10min',
    reward: '1500 XP',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    id: 4,
    title: 'History Speedrun',
    description: 'How well do you know world history? Find out now!',
    icon: IoTimer,
    badge: 'Popular',
    participants: '3.1k',
    duration: '3min',
    reward: '750 XP',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  }
];

const QuizChallenges: React.FC = () => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>
          <IoTrophy style={{ color: '#FFD700' }} />
          Quiz Challenges
        </SectionTitle>
        <SectionSubtitle>Compete with others and earn rewards</SectionSubtitle>
      </SectionHeader>

      <ChallengeGrid>
        {challenges.map((challenge, index) => {
          const Icon = challenge.icon;
          
          return (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ChallengeCard
                $gradient={challenge.gradient}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div>
                  <ChallengeHeader>
                    <ChallengeIcon>
                      <Icon />
                    </ChallengeIcon>
                    <ChallengeBadge>{challenge.badge}</ChallengeBadge>
                  </ChallengeHeader>

                  <ChallengeTitle>{challenge.title}</ChallengeTitle>
                  <ChallengeDescription>{challenge.description}</ChallengeDescription>
                </div>

                <div>
                  <ChallengeStats>
                    <Stat>
                      <IoTimer />
                      {challenge.duration}
                    </Stat>
                    <Stat>
                      👥 {challenge.participants}
                    </Stat>
                    <Stat>
                      <IoTrophy />
                      {challenge.reward}
                    </Stat>
                  </ChallengeStats>

                  <ActionButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Challenge
                  </ActionButton>
                </div>
              </ChallengeCard>
            </motion.div>
          );
        })}
      </ChallengeGrid>
    </SectionContainer>
  );
};

export default QuizChallenges;