import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  IoTrophy, 
  IoSchool, 
  IoHeart, 
  IoEye,
  IoSettings,
  IoStatsChart,
  IoRibbon,
  IoFlash,
  IoStar,
  IoTime
} from 'react-icons/io5';

const ProfileContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem 1rem;
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: ${({ theme }) => theme.colors.primaryGradient};
    opacity: 0.1;
  }
`;

const ProfileAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  object-fit: cover;
  position: relative;
  z-index: 1;
`;

const ProfileName = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem;
`;

const ProfileBio = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0 0 1rem;
  line-height: 1.5;
`;

const ProfileLevel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.primaryGradient};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 1.5rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const StatIcon = styled.div<{ $color: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  color: white;
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const AchievementCard = styled(motion.div)<{ $gradient: string; $unlocked: boolean }>`
  background: ${({ $gradient, $unlocked }) => $unlocked ? $gradient : '#E2E8F0'};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 1.5rem;
  color: ${({ $unlocked }) => $unlocked ? 'white' : '#64748B'};
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: ${({ $unlocked }) => $unlocked ? 1 : 0.6};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ $unlocked }) => 
      $unlocked 
        ? 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)'
        : 'none'
    };
    pointer-events: none;
  }
`;

const AchievementIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const AchievementTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  margin: 0 0 0.5rem;
`;

const AchievementDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: 0;
  opacity: 0.9;
`;

const QuizHistorySection = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const QuizItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};

  &:last-child {
    border-bottom: none;
  }
`;

const QuizInfo = styled.div`
  flex: 1;
`;

const QuizTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.25rem;
`;

const QuizSubject = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

const QuizScore = styled.div<{ $score: number }>`
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ $score, theme }) => 
    $score >= 80 
      ? theme.colors.success 
      : $score >= 60 
        ? theme.colors.warning 
        : theme.colors.danger
  };
  color: white;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const SettingsButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.md};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const userStats = [
  {
    icon: IoSchool,
    value: '89',
    label: 'Courses',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    icon: IoTrophy,
    value: '1,456',
    label: 'XP Points',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    icon: IoFlash,
    value: '23',
    label: 'Streak',
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    icon: IoTime,
    value: '127h',
    label: 'Study Time',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
];

const achievements = [
  {
    id: 1,
    title: 'First Quiz',
    description: 'Complete your first quiz',
    icon: '🎯',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    unlocked: true
  },
  {
    id: 2,
    title: 'Study Streak',
    description: '7 days in a row',
    icon: '🔥',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    unlocked: true
  },
  {
    id: 3,
    title: 'Knowledge Master',
    description: 'Score 90%+ on 10 quizzes',
    icon: '🧠',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    unlocked: true
  },
  {
    id: 4,
    title: 'Social Learner',
    description: 'Join 5 study groups',
    icon: '👥',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    unlocked: false
  }
];

const quizHistory = [
  { id: 1, title: 'Calculus Derivatives', subject: 'Mathematics', score: 92 },
  { id: 2, title: 'React Fundamentals', subject: 'Programming', score: 88 },
  { id: 3, title: 'Spanish Grammar', subject: 'Languages', score: 76 },
  { id: 4, title: 'Physics Motion', subject: 'Physics', score: 85 },
  { id: 5, title: 'World History', subject: 'History', score: 94 }
];

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileAvatar 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" 
          alt="Profile"
        />
        <ProfileName>Alex Johnson</ProfileName>
        <ProfileBio>
          Passionate learner exploring mathematics, programming, and languages. 
          Always curious and ready for the next challenge!
        </ProfileBio>
        <ProfileLevel>
          <IoStar />
          Level 15 Scholar
        </ProfileLevel>
      </ProfileHeader>

      <StatsGrid>
        {userStats.map((stat, index) => {
          const Icon = stat.icon;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StatCard
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <StatIcon $color={stat.color}>
                  <Icon />
                </StatIcon>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            </motion.div>
          );
        })}
      </StatsGrid>

      <SectionTitle>
        <IoTrophy style={{ color: '#FFD700' }} />
        Achievements
      </SectionTitle>

      <AchievementsGrid>
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <AchievementCard
              $gradient={achievement.gradient}
              $unlocked={achievement.unlocked}
              whileHover={{ scale: achievement.unlocked ? 1.05 : 1 }}
              whileTap={{ scale: achievement.unlocked ? 0.95 : 1 }}
            >
              <AchievementIcon>{achievement.icon}</AchievementIcon>
              <AchievementTitle>{achievement.title}</AchievementTitle>
              <AchievementDescription>{achievement.description}</AchievementDescription>
            </AchievementCard>
          </motion.div>
        ))}
      </AchievementsGrid>

      <SectionTitle>
        <IoStatsChart style={{ color: '#4ECDC4' }} />
        Recent Quiz Results
      </SectionTitle>

      <QuizHistorySection>
        {quizHistory.map((quiz) => (
          <QuizItem key={quiz.id}>
            <QuizInfo>
              <QuizTitle>{quiz.title}</QuizTitle>
              <QuizSubject>{quiz.subject}</QuizSubject>
            </QuizInfo>
            <QuizScore $score={quiz.score}>
              {quiz.score}%
            </QuizScore>
          </QuizItem>
        ))}
      </QuizHistorySection>

      <SettingsButton
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <IoSettings />
        Account Settings
      </SettingsButton>
    </ProfileContainer>
  );
};

export default Profile;