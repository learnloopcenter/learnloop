import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import VideoCard from './VideoCard';
import { mockVideos } from './mockData';

const FeedContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.colors.background};
`;

const VideoContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  
  /* Hide scrollbar but allow scrolling */
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const VideoWrapper = styled(motion.div)`
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Feed: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const scrollTop = containerRef.current.scrollTop;
    const windowHeight = window.innerHeight;
    const newIndex = Math.round(scrollTop / windowHeight);
    
    if (newIndex !== currentVideoIndex && newIndex >= 0 && newIndex < mockVideos.length) {
      setCurrentVideoIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentVideoIndex]);

  const handleVideoPlay = (index: number) => {
    setCurrentVideoIndex(index);
  };

  const handleSwipeUp = () => {
    if (currentVideoIndex < mockVideos.length - 1) {
      const nextIndex = currentVideoIndex + 1;
      setCurrentVideoIndex(nextIndex);
      
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: nextIndex * window.innerHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleSwipeDown = () => {
    if (currentVideoIndex > 0) {
      const prevIndex = currentVideoIndex - 1;
      setCurrentVideoIndex(prevIndex);
      
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: prevIndex * window.innerHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <FeedContainer>
      <VideoContainer ref={containerRef}>
        <AnimatePresence mode="wait">
          {mockVideos.map((video, index) => (
            <VideoWrapper
              key={video.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.3 }
              }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <VideoCard
                video={video}
                isActive={index === currentVideoIndex}
                onPlay={() => handleVideoPlay(index)}
                onSwipeUp={handleSwipeUp}
                onSwipeDown={handleSwipeDown}
              />
            </VideoWrapper>
          ))}
        </AnimatePresence>
      </VideoContainer>
    </FeedContainer>
  );
};

export default Feed;