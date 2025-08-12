import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, PanInfo } from 'framer-motion';
import { 
  IoHeart, 
  IoHeartOutline, 
  IoChatbubble, 
  IoShare, 
  IoPlay, 
  IoPause,
  IoSchool,
  IoBookmark,
  IoBookmarkOutline
} from 'react-icons/io5';

const CardContainer = styled(motion.div)`
  position: relative;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoBackground = styled.div<{ $bgImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg, 
    ${({ theme }) => theme.colors.primary}40,
    ${({ theme }) => theme.colors.secondary}40,
    ${({ theme }) => theme.colors.accent}40
  ), url(${({ $bgImage }) => $bgImage});
  background-size: cover;
  background-position: center;
  filter: blur(100px);
  opacity: 0.3;
`;

const VideoContent = styled.div<{ $bgImage: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  background: url(${({ $bgImage }) => $bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 60%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
`;

const PlayButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
  z-index: 10;
  backdrop-filter: blur(10px);
`;

const TopContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 60px 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CreatorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CreatorAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

const CreatorName = styled.span`
  color: white;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const QuizBadge = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primaryGradient};
  padding: 8px 16px;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const BottomContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const VideoInfo = styled.div`
  flex: 1;
  max-width: 70%;
`;

const VideoTitle = styled.h3`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  margin-bottom: 8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  line-height: 1.3;
`;

const VideoDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.4;
  margin-bottom: 12px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  backdrop-filter: blur(10px);
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const ActionButton = styled(motion.button)<{ $isActive?: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${({ $isActive, theme }) => $isActive ? theme.colors.primary : 'white'};
  transition: all 0.3s ease;
  border: 2px solid ${({ $isActive, theme }) => $isActive ? theme.colors.primary : 'transparent'};

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;

const ActionCount = styled.span`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  margin-top: 4px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

interface Video {
  id: string;
  title: string;
  description: string;
  creator: {
    name: string;
    avatar: string;
  };
  thumbnail: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
  hasQuiz: boolean;
  subject: string;
}

interface VideoCardProps {
  video: Video;
  isActive: boolean;
  onPlay: () => void;
  onSwipeUp: () => void;
  onSwipeDown: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  video, 
  isActive, 
  onPlay, 
  onSwipeUp, 
  onSwipeDown 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    
    if (offset.y < -50 || velocity.y < -500) {
      onSwipeUp();
    } else if (offset.y > 50 || velocity.y > 500) {
      onSwipeDown();
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    onPlay();
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const triggerQuiz = () => {
    setShowQuiz(!showQuiz);
  };

  const formatCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <CardContainer
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      whileTap={{ scale: 0.98 }}
    >
      <VideoBackground $bgImage={video.thumbnail} />
      
      <VideoContent $bgImage={video.thumbnail}>
        <VideoOverlay />
        
        <TopContent>
          <CreatorInfo>
            <CreatorAvatar src={video.creator.avatar} alt={video.creator.name} />
            <CreatorName>@{video.creator.name}</CreatorName>
          </CreatorInfo>
          
          {video.hasQuiz && (
            <QuizBadge
              onClick={triggerQuiz}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <IoSchool />
              Quiz Ready!
            </QuizBadge>
          )}
        </TopContent>

        {!isPlaying && (
          <PlayButton
            onClick={togglePlay}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <IoPlay style={{ marginLeft: '4px' }} />
          </PlayButton>
        )}

        <BottomContent>
          <VideoInfo>
            <VideoTitle>{video.title}</VideoTitle>
            <VideoDescription>{video.description}</VideoDescription>
            <TagContainer>
              <Tag>#{video.subject}</Tag>
              {video.tags.slice(0, 2).map((tag, index) => (
                <Tag key={index}>#{tag}</Tag>
              ))}
            </TagContainer>
          </VideoInfo>

          <ActionButtons>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ActionButton
                $isActive={isLiked}
                onClick={handleLike}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
              >
                {isLiked ? <IoHeart /> : <IoHeartOutline />}
              </ActionButton>
              <ActionCount>{formatCount(video.likes + (isLiked ? 1 : 0))}</ActionCount>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ActionButton
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
              >
                <IoChatbubble />
              </ActionButton>
              <ActionCount>{formatCount(video.comments)}</ActionCount>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ActionButton
                $isActive={isSaved}
                onClick={handleSave}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
              >
                {isSaved ? <IoBookmark /> : <IoBookmarkOutline />}
              </ActionButton>
              <ActionCount>Save</ActionCount>
            </div>

            <ActionButton
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <IoShare />
            </ActionButton>
          </ActionButtons>
        </BottomContent>
      </VideoContent>
    </CardContainer>
  );
};

export default VideoCard;