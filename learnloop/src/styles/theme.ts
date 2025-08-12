export const lightTheme = {
  colors: {
    primary: '#FF6B6B', // Coral Pink
    secondary: '#4ECDC4', // Turquoise
    accent: '#45B7D1', // Electric Blue
    success: '#96CEB4', // Mint Green
    warning: '#FFEAA7', // Light Yellow
    danger: '#FF7675', // Light Red
    info: '#74B9FF', // Light Blue
    
    // Vibrant gradients
    primaryGradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
    secondaryGradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
    accentGradient: 'linear-gradient(135deg, #45B7D1 0%, #96C93D 100%)',
    heroGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    
    // Text colors
    text: '#2D3748',
    textSecondary: '#4A5568',
    textMuted: '#718096',
    textLight: '#A0AEC0',
    
    // Background colors
    background: '#FFFFFF',
    backgroundSecondary: '#F7FAFC',
    backgroundTertiary: '#EDF2F7',
    
    // Card colors
    cardBackground: '#FFFFFF',
    cardBorder: '#E2E8F0',
    cardShadow: 'rgba(0, 0, 0, 0.1)',
    
    // Navigation
    navBackground: '#FFFFFF',
    navBorder: '#E2E8F0',
    navActive: '#FF6B6B',
    navInactive: '#A0AEC0',
  },
  fonts: {
    primary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    secondary: "'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '50%',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    // Dark mode adjustments
    primary: '#FF8A80', // Lighter coral for dark mode
    secondary: '#64FFDA', // Brighter turquoise
    accent: '#64B5F6', // Lighter blue
    
    // Dark gradients
    primaryGradient: 'linear-gradient(135deg, #FF8A80 0%, #FFB74D 100%)',
    secondaryGradient: 'linear-gradient(135deg, #64FFDA 0%, #4DB6AC 100%)',
    accentGradient: 'linear-gradient(135deg, #64B5F6 0%, #AED581 100%)',
    heroGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    
    // Dark text colors
    text: '#FFFFFF',
    textSecondary: '#E2E8F0',
    textMuted: '#A0AEC0',
    textLight: '#718096',
    
    // Dark backgrounds
    background: '#1A202C',
    backgroundSecondary: '#2D3748',
    backgroundTertiary: '#4A5568',
    
    // Dark cards
    cardBackground: '#2D3748',
    cardBorder: '#4A5568',
    cardShadow: 'rgba(0, 0, 0, 0.3)',
    
    // Dark navigation
    navBackground: '#1A202C',
    navBorder: '#4A5568',
    navActive: '#FF8A80',
    navInactive: '#718096',
  },
};

export type Theme = typeof lightTheme;