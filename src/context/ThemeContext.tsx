import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemePreference = 'system' | 'light' | 'dark';

interface ThemeContextType {
  theme: ThemePreference;
  setTheme: (theme: ThemePreference) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemePreference>(() => {
    try {
      const stored = localStorage.getItem('wrzon:theme');
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        return stored;
      }
    } catch {
      // ignore
    }
    return 'light';
  });

  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const updateTheme = () => {
      const root = document.documentElement;
      let effectiveDark = false;

      if (theme === 'dark') {
        effectiveDark = true;
      } else if (theme === 'light') {
        effectiveDark = false;
      } else {
        effectiveDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      setIsDark(effectiveDark);
      root.classList.toggle('dark', effectiveDark);
      root.dataset.theme = effectiveDark ? 'dark' : 'light';
      root.dataset.themePreference = theme;
      try {
        localStorage.setItem('wrzon:theme', theme);
      } catch {
        // ignore
      }
    };

    updateTheme();

    if (theme === 'system') {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => updateTheme();
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
  }, [theme]);

  const setTheme = (newTheme: ThemePreference) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
