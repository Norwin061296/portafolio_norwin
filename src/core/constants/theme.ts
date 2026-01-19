export const theme = {
  colors: {
    primary: {
      main: '#D4AF37',      // Metallic Gold
      light: '#F4C430',     // Saffron Gold
      dark: '#AA8C2C',      // Dark Goldenrod
      gradient: ['#D4AF37', '#C5A028', '#FFD700'], // Rich Gold Gradient
    },
    secondary: {
      main: '#000000',      // Pure Black
      light: '#121212',     // Material Dark
      dark: '#000000',      // Pure Black
      background: '#050505', // Almost Black
      surface: '#0A0A0A',    // Dark Surface
    },
    text: {
      primary: '#FFFFFF',   // White
      secondary: '#E0E0E0', // Light Gray
      accent: '#D4AF37',    // Gold
      muted: '#888888',     // Muted Gray
    },
    status: {
      success: '#4CAF50',
      warning: '#FFC107',
      error: '#FF5252',
      info: '#2196F3',
    },
    border: {
      main: '#333333',
      light: '#444444',
      accent: 'rgba(212, 175, 55, 0.5)', // Transparent Gold
    },
    overlay: {
      dark: 'rgba(0, 0, 0, 0.85)',
      darker: 'rgba(0, 0, 0, 0.95)',
      light: 'rgba(212, 175, 55, 0.05)',
      glass: 'rgba(255, 255, 255, 0.03)',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
  },
  typography: {
    fontSizes: {
      xs: 11,
      sm: 13,
      md: 15,
      lg: 18,
      xl: 22,
      xxl: 28,
      xxxl: 36,
      huge: 52,
      massive: 72,
    },
    fontWeights: {
      light: '300' as const,
      regular: '400' as const,
      medium: '500' as const,
      semibold: '600' as const,
      bold: '700' as const,
      extrabold: '800' as const,
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.6,
      relaxed: 1.9,
    },
  },
  borderRadius: {
    sm: 6,
    md: 12,
    lg: 18,
    xl: 24,
    full: 9999,
  },
  shadows: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 6,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.5,
      shadowRadius: 16,
      elevation: 10,
    },
    glow: {
      shadowColor: '#D4AF37',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.4,
      shadowRadius: 10,
      elevation: 5,
    },
  },
  animation: {
    duration: {
      fast: 200,
      normal: 300,
      slow: 500,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1200,
  },
} as const;

export type Theme = typeof theme;
