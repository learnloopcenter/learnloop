import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  IoHome, 
  IoCompass, 
  IoAdd, 
  IoChatbubbles, 
  IoPerson 
} from 'react-icons/io5';

const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: ${({ theme }) => theme.colors.navBackground};
  border-top: 1px solid ${({ theme }) => theme.colors.navBorder};
  backdrop-filter: blur(20px);
  z-index: ${({ theme }) => theme.zIndex.fixed};
  
  @supports (backdrop-filter: blur(20px)) {
    background: ${({ theme }) => 
      theme.colors.navBackground === '#FFFFFF' 
        ? 'rgba(255, 255, 255, 0.8)' 
        : 'rgba(26, 32, 44, 0.8)'
    };
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const NavItem = styled(motion.button)<{ $isActive: boolean; $isCenter?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ $isActive, $isCenter, theme }) => 
    $isCenter && $isActive 
      ? theme.colors.primaryGradient
      : $isActive 
        ? theme.colors.backgroundSecondary 
        : 'transparent'
  };
  border-radius: ${({ $isCenter }) => $isCenter ? '50%' : '12px'};
  width: ${({ $isCenter }) => $isCenter ? '56px' : '48px'};
  height: ${({ $isCenter }) => $isCenter ? '56px' : '48px'};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  ${({ $isCenter }) => $isCenter && `
    transform: translateY(-8px);
    box-shadow: 0 8px 32px rgba(255, 107, 107, 0.4);
  `}

  &:hover {
    transform: ${({ $isCenter }) => $isCenter ? 'translateY(-10px) scale(1.1)' : 'scale(1.1)'};
  }
`;

const IconWrapper = styled.div<{ $isActive: boolean; $isCenter?: boolean }>`
  font-size: ${({ $isCenter }) => $isCenter ? '24px' : '22px'};
  color: ${({ $isActive, $isCenter, theme }) => 
    $isCenter && $isActive 
      ? '#FFFFFF'
      : $isActive 
        ? theme.colors.navActive 
        : theme.colors.navInactive
  };
  transition: all 0.3s ease;
`;

const Label = styled.span<{ $isActive: boolean; $isCenter?: boolean }>`
  font-size: 0.7rem;
  font-weight: ${({ $isActive }) => $isActive ? '600' : '400'};
  color: ${({ $isActive, $isCenter, theme }) => 
    $isCenter && $isActive 
      ? 'transparent'
      : $isActive 
        ? theme.colors.navActive 
        : theme.colors.navInactive
  };
  margin-top: 2px;
  transition: all 0.3s ease;
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`;

const navigationItems = [
  { path: '/', icon: IoHome, label: 'Feed', id: 'feed' },
  { path: '/discover', icon: IoCompass, label: 'Discover', id: 'discover' },
  { path: '/create', icon: IoAdd, label: 'Create', id: 'create', isCenter: true },
  { path: '/groups', icon: IoChatbubbles, label: 'Groups', id: 'groups' },
  { path: '/profile', icon: IoPerson, label: 'Profile', id: 'profile' },
];

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <NavContainer>
      <NavContent>
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <NavItem
              key={item.id}
              $isActive={isActive}
              $isCenter={item.isCenter}
              onClick={() => handleNavigation(item.path)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: item.isCenter ? 1.1 : 1.05 }}
            >
              {isActive && !item.isCenter && (
                <ActiveIndicator
                  layoutId="activeTab"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
              
              <IconWrapper $isActive={isActive} $isCenter={item.isCenter}>
                <Icon />
              </IconWrapper>
              
              <Label $isActive={isActive} $isCenter={item.isCenter}>
                {item.label}
              </Label>
            </NavItem>
          );
        })}
      </NavContent>
    </NavContainer>
  );
};

export default BottomNavigation;