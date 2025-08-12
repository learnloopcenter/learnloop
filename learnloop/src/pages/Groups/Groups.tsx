import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoChatbubbles, 
  IoAdd, 
  IoSearch,
  IoPeople,
  IoSchool,
  IoTrophy,
  IoSend,
  IoClose
} from 'react-icons/io5';

const GroupsContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const Header = styled.div`
  padding: 2rem 1rem 1rem;
  background: ${({ theme }) => theme.colors.background};
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CreateGroupButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primaryGradient};
  color: white;
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textMuted};
`;

const GroupsGrid = styled.div`
  padding: 0 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

const GroupCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 1.5rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const GroupHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const GroupAvatar = styled.div<{ $color: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

const GroupInfo = styled.div`
  flex: 1;
`;

const GroupName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.25rem;
`;

const GroupSubject = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  font-weight: 500;
`;

const GroupStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const GroupDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
  margin: 0 0 1rem;
`;

const JoinButton = styled(motion.button)`
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryGradient};
  color: white;
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const ChatOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  
  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const ChatContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    border-radius: 20px;
    width: 400px;
    height: 600px;
  }
`;

const ChatHeader = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const CloseButton = styled(motion.button)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled.div<{ $isOwn?: boolean }>`
  align-self: ${({ $isOwn }) => $isOwn ? 'flex-end' : 'flex-start'};
  max-width: 70%;
`;

const MessageBubble = styled.div<{ $isOwn?: boolean }>`
  background: ${({ $isOwn, theme }) => 
    $isOwn ? theme.colors.primaryGradient : theme.colors.backgroundSecondary
  };
  color: ${({ $isOwn, theme }) => 
    $isOwn ? 'white' : theme.colors.text
  };
  padding: 0.75rem 1rem;
  border-radius: 18px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.4;
`;

const ChatInput = styled.div`
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text};
`;

const SendButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primaryGradient};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const mockGroups = [
  {
    id: 1,
    name: 'Calculus Study Crew',
    subject: 'Mathematics',
    members: 156,
    messages: 1240,
    description: 'Master calculus together! We solve problems, share resources, and help each other succeed.',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    avatar: '∫'
  },
  {
    id: 2,
    name: 'React Developers',
    subject: 'Programming',
    members: 234,
    messages: 2156,
    description: 'Learning React, sharing projects, and building amazing web applications together.',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    avatar: '⚛'
  },
  {
    id: 3,
    name: 'Spanish Fluency',
    subject: 'Languages',
    members: 89,
    messages: 567,
    description: '¡Hablamos español! Practice conversations, grammar, and cultural exchange.',
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    avatar: 'ES'
  },
  {
    id: 4,
    name: 'Physics Quest',
    subject: 'Physics',
    members: 178,
    messages: 934,
    description: 'Exploring the universe through physics! From quantum to relativity.',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    avatar: 'Φ'
  }
];

const mockMessages = [
  { id: 1, text: "Anyone working on the derivatives homework?", isOwn: false },
  { id: 2, text: "Yes! I'm stuck on problem #3", isOwn: true },
  { id: 3, text: "Let me help! What part is confusing?", isOwn: false },
  { id: 4, text: "The chain rule application", isOwn: true },
  { id: 5, text: "Ah, remember: (f(g(x)))' = f'(g(x)) × g'(x)", isOwn: false }
];

const Groups: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<any>(null);
  const [message, setMessage] = useState('');

  const openChat = (group: any) => {
    setSelectedGroup(group);
  };

  const closeChat = () => {
    setSelectedGroup(null);
  };

  const sendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <GroupsContainer>
      <Header>
        <HeaderTop>
          <Title>
            <IoChatbubbles style={{ color: '#FF6B6B' }} />
            Study Groups
          </Title>
          <CreateGroupButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoAdd />
            Create
          </CreateGroupButton>
        </HeaderTop>
        
        <SearchContainer>
          <SearchIcon>
            <IoSearch />
          </SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Search groups by subject or topic..."
          />
        </SearchContainer>
      </Header>

      <GroupsGrid>
        {mockGroups.map((group, index) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GroupCard
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openChat(group)}
            >
              <GroupHeader>
                <GroupAvatar $color={group.color}>
                  {group.avatar}
                </GroupAvatar>
                <GroupInfo>
                  <GroupName>{group.name}</GroupName>
                  <GroupSubject>{group.subject}</GroupSubject>
                </GroupInfo>
              </GroupHeader>

              <GroupStats>
                <Stat>
                  <IoPeople />
                  {group.members} members
                </Stat>
                <Stat>
                  <IoChatbubbles />
                  {group.messages} messages
                </Stat>
              </GroupStats>

              <GroupDescription>{group.description}</GroupDescription>

              <JoinButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Group
              </JoinButton>
            </GroupCard>
          </motion.div>
        ))}
      </GroupsGrid>

      <AnimatePresence>
        {selectedGroup && (
          <ChatOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeChat}
          >
            <ChatContainer
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ChatHeader>
                <ChatTitle>{selectedGroup.name}</ChatTitle>
                <CloseButton
                  onClick={closeChat}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoClose />
                </CloseButton>
              </ChatHeader>

              <ChatMessages>
                {mockMessages.map((msg) => (
                  <Message key={msg.id} $isOwn={msg.isOwn}>
                    <MessageBubble $isOwn={msg.isOwn}>
                      {msg.text}
                    </MessageBubble>
                  </Message>
                ))}
              </ChatMessages>

              <ChatInput>
                <MessageInput
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <SendButton
                  onClick={sendMessage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoSend />
                </SendButton>
              </ChatInput>
            </ChatContainer>
          </ChatOverlay>
        )}
      </AnimatePresence>
    </GroupsContainer>
  );
};

export default Groups;