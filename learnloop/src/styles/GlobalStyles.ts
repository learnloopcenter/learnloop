import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Remove default button styles */
  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    outline: none;
  }

  /* Remove default input styles */
  input, textarea {
    border: none;
    outline: none;
    font-family: inherit;
  }

  /* Remove default link styles */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Remove default list styles */
  ul, ol {
    list-style: none;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textMuted};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.textSecondary};
  }

  /* Mobile-first responsive design */
  .container {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (min-width: 768px) {
    .container {
      max-width: 768px;
      padding: 0 2rem;
    }
  }

  @media (min-width: 1024px) {
    .container {
      max-width: 1024px;
    }
  }

  @media (min-width: 1280px) {
    .container {
      max-width: 1280px;
    }
  }

  /* Animation utilities */
  .fade-in {
    animation: fadeIn 0.3s ease-in-out;
  }

  .slide-up {
    animation: slideUp 0.3s ease-out;
  }

  .bounce-in {
    animation: bounceIn 0.5s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes bounceIn {
    0% {
      transform: scale(0.3);
      opacity: 0;
    }
    50% {
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Utility classes */
  .text-gradient {
    background: ${({ theme }) => theme.colors.primaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .bg-gradient-primary {
    background: ${({ theme }) => theme.colors.primaryGradient};
  }

  .bg-gradient-secondary {
    background: ${({ theme }) => theme.colors.secondaryGradient};
  }

  .bg-gradient-accent {
    background: ${({ theme }) => theme.colors.accentGradient};
  }

  .shadow-vibrant {
    box-shadow: 0 8px 32px rgba(255, 107, 107, 0.3);
  }

  .shadow-vibrant-blue {
    box-shadow: 0 8px 32px rgba(69, 183, 209, 0.3);
  }

  .shadow-vibrant-green {
    box-shadow: 0 8px 32px rgba(150, 206, 180, 0.3);
  }
`;

export default GlobalStyles;