import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  IoCalculator,
  IoCode,
  IoBrain,
  IoLeaf,
  IoLanguage,
  IoBook,
  IoFlask,
  IoGameController,
  IoColorPalette,
  IoMusicalNotes,
  IoRocket,
  IoGlobe
} from 'react-icons/io5';

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
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
  }
`;

const CategoryCard = styled(motion.div)<{ $gradient: string }>`
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: ${({ $gradient }) => $gradient};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const CategoryIcon = styled.div`
  font-size: 2rem;
  color: white;
  margin-bottom: auto;
`;

const CategoryInfo = styled.div``;

const CategoryName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: white;
  margin: 0 0 0.25rem;
`;

const CategoryCount = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

const categories = [
  {
    id: 'math',
    name: 'Mathematics',
    count: '2.3k videos',
    icon: IoCalculator,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'programming',
    name: 'Programming',
    count: '1.8k videos',
    icon: IoCode,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 'science',
    name: 'Science',
    count: '3.1k videos',
    icon: IoLeaf,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 'psychology',
    name: 'Psychology',
    count: '987 videos',
    icon: IoBrain,
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    id: 'languages',
    name: 'Languages',
    count: '1.5k videos',
    icon: IoLanguage,
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    id: 'literature',
    name: 'Literature',
    count: '756 videos',
    icon: IoBook,
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    count: '892 videos',
    icon: IoFlask,
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },
  {
    id: 'physics',
    name: 'Physics',
    count: '1.2k videos',
    icon: IoRocket,
    gradient: 'linear-gradient(135deg, #a8caba 0%, #5d4e75 100%)'
  },
  {
    id: 'art',
    name: 'Art & Design',
    count: '643 videos',
    icon: IoColorPalette,
    gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)'
  },
  {
    id: 'music',
    name: 'Music',
    count: '534 videos',
    icon: IoMusicalNotes,
    gradient: 'linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)'
  },
  {
    id: 'history',
    name: 'History',
    count: '1.1k videos',
    icon: IoGlobe,
    gradient: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)'
  },
  {
    id: 'gaming',
    name: 'Game Dev',
    count: '421 videos',
    icon: IoGameController,
    gradient: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)'
  }
];

const CategoryGrid: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Explore Categories</SectionTitle>
        <SectionSubtitle>Dive into your favorite subjects</SectionSubtitle>
      </SectionHeader>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid>
          {categories.map((category) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CategoryCard $gradient={category.gradient}>
                  <CategoryIcon>
                    <Icon />
                  </CategoryIcon>
                  
                  <CategoryInfo>
                    <CategoryName>{category.name}</CategoryName>
                    <CategoryCount>{category.count}</CategoryCount>
                  </CategoryInfo>
                </CategoryCard>
              </motion.div>
            );
          })}
        </Grid>
      </motion.div>
    </SectionContainer>
  );
};

export default CategoryGrid;