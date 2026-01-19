import React, { useEffect } from 'react';
import { globalStyles } from '../utils/globalStyles';

export const GlobalStyles: React.FC = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const styleElement = document.createElement('style');
      styleElement.textContent = globalStyles;
      document.head.appendChild(styleElement);

      return () => {
        document.head.removeChild(styleElement);
      };
    }
  }, []);

  return null;
};

