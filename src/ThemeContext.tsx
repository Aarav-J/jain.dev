import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface ThemeColors {
  primary: string;
  secondary: string;
//   goto: string;
}

interface ThemeContextType {
  colors: ThemeColors;
  setColors: (colors: ThemeColors) => void;
  preset: string;
  setPreset: (preset: string) => void;
}

const defaultColors: ThemeColors = {
  primary: '#C517F1', // Default devPink
  secondary: '#9417DE', // Default devPurple
//   goto: '#292136', // Default goto
};

export const ThemeContext = createContext<ThemeContextType>({
  colors: defaultColors,
  setColors: () => {},
  preset: 'default',
  setPreset: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [colors, setColors] = useState<ThemeColors>(() => {
    const savedColors = localStorage.getItem('themeColors');
    return savedColors ? JSON.parse(savedColors) : defaultColors;
  });
  
  const [preset, setPreset] = useState<string>(() => {
    return localStorage.getItem('themePreset') || 'default';
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', colors.primary);
    document.documentElement.style.setProperty('--secondary-color', colors.secondary);
    // document.documentElement.style.setProperty('--goto-color', colors.goto);
    localStorage.setItem('themeColors', JSON.stringify(colors));
    localStorage.setItem('themePreset', preset);
  }, [colors, preset]);

  return (
    <ThemeContext.Provider value={{ colors, setColors, preset, setPreset }}>
      {children}
    </ThemeContext.Provider>
  );
};