import React from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { AssistantProvider } from './context/AssistantContext';

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AssistantProvider>
          <RouterProvider router={router} />
        </AssistantProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
