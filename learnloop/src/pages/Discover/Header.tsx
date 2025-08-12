import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IoSearch, IoMoon, IoSunny } from 'react-icons/io5';
import { useTheme } from '../../contexts/ThemeContext';

const HeaderContainer = styled.div`
  padding: 2rem 1rem 1rem;
  background: ${({ theme }) => theme.colors.background};
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Greeting = styled.div``;

const GreetingTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  
  .gradient-text {
    background: ${({ theme }) => theme.colors.primaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const GreetingSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0.5rem 0 0;
`;

const ThemeToggle = styled(motion.button)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled(motion.input)`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all 0.3s ease;

  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 20px;
  pointer-events: none;
`;

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning!';
    if (hour < 18) return 'Good afternoon!';
    return 'Good evening!';
  };

  return (
    <HeaderContainer>
      <TopSection>
        <Greeting>
          <GreetingTitle>
            <span className="gradient-text">{getGreeting()}</span>
          </GreetingTitle>
          <GreetingSubtitle>What would you like to learn today?</GreetingSubtitle>
        </Greeting>
        
        <ThemeToggle
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          {isDarkMode ? <IoSunny /> : <IoMoon />}
        </ThemeToggle>
      </TopSection>

      <SearchContainer>
        <SearchIcon>
          <IoSearch />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search topics, creators, or subjects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;