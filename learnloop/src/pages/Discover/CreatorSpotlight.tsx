import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IoStar, IoSchool, IoHeart, IoAdd } from 'react-icons/io5';

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

const CreatorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  
  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const CreatorCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 1.5rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const CreatorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const AvatarContainer = styled.div`
  position: relative;
`;

const CreatorAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  object-fit: cover;
`;

const VerifiedBadge = styled.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.primaryGradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.cardBackground};
  font-size: 10px;
  color: white;
`;

const CreatorInfo = styled.div`
  flex: 1;
`;

const CreatorName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.25rem;
`;

const CreatorRole = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const CreatorStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CreatorDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin: 0 0 1rem;
`;

const SubjectTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const SubjectTag = styled.span`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const FollowButton = styled(motion.button)`
  flex: 1;
  background: ${({ theme }) => theme.colors.primaryGradient};
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const ViewButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const creators = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    role: 'Physics Professor',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=120&h=120&fit=crop&crop=face',
    followers: '45.2K',
    videos: 234,
    likes: '1.2M',
    isVerified: true,
    description: 'Making quantum physics accessible to everyone through engaging visual explanations.',
    subjects: ['Physics', 'Mathematics', 'Science']
  },
  {
    id: 2,
    name: 'Alex Rodriguez',
    role: 'Full-Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
    followers: '38.7K',
    videos: 189,
    likes: '890K',
    isVerified: true,
    description: 'Teaching modern web development with React, Node.js, and the latest frameworks.',
    subjects: ['Programming', 'Web Dev', 'JavaScript']
  },
  {
    id: 3,
    name: 'Prof. Maria Silva',
    role: 'History Scholar',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face',
    followers: '29.1K',
    videos: 156,
    likes: '756K',
    isVerified: true,
    description: 'Bringing ancient civilizations to life with immersive storytelling and rich visuals.',
    subjects: ['History', 'Culture', 'Ancient']
  }
];

const CreatorSpotlight: React.FC = () => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>
          <IoStar style={{ color: '#FFD700' }} />
          Featured Creators
        </SectionTitle>
        <SectionSubtitle>Learn from the best educators on LearnLoop</SectionSubtitle>
      </SectionHeader>

      <CreatorGrid>
        {creators.map((creator, index) => (
          <motion.div
            key={creator.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <CreatorCard
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CreatorHeader>
                <AvatarContainer>
                  <CreatorAvatar src={creator.avatar} alt={creator.name} />
                  {creator.isVerified && (
                    <VerifiedBadge>
                      <IoSchool />
                    </VerifiedBadge>
                  )}
                </AvatarContainer>
                
                <CreatorInfo>
                  <CreatorName>{creator.name}</CreatorName>
                  <CreatorRole>{creator.role}</CreatorRole>
                </CreatorInfo>
              </CreatorHeader>

              <CreatorStats>
                <Stat>
                  <StatValue>{creator.followers}</StatValue>
                  <StatLabel>Followers</StatLabel>
                </Stat>
                <Stat>
                  <StatValue>{creator.videos}</StatValue>
                  <StatLabel>Videos</StatLabel>
                </Stat>
                <Stat>
                  <StatValue>{creator.likes}</StatValue>
                  <StatLabel>Likes</StatLabel>
                </Stat>
              </CreatorStats>

              <CreatorDescription>{creator.description}</CreatorDescription>

              <SubjectTags>
                {creator.subjects.map((subject, idx) => (
                  <SubjectTag key={idx}>{subject}</SubjectTag>
                ))}
              </SubjectTags>

              <ActionButtons>
                <FollowButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoAdd />
                  Follow
                </FollowButton>
                <ViewButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Profile
                </ViewButton>
              </ActionButtons>
            </CreatorCard>
          </motion.div>
        ))}
      </CreatorGrid>
    </SectionContainer>
  );
};

export default CreatorSpotlight;