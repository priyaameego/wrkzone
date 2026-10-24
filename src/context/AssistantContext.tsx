import React, { createContext, useContext, useState, useEffect } from 'react';

export interface AssistantMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  actionLink?: {
    label: string;
    url: string;
  };
}

interface AssistantContextType {
  isOpen: boolean;
  openAssistant: () => void;
  closeAssistant: () => void;
  toggleAssistant: () => void;
  messages: AssistantMessage[];
  sendMessage: (query: string) => void;
  clearMessages: () => void;
}

const AssistantContext = createContext<AssistantContextType | undefined>(undefined);

const initialMessages: AssistantMessage[] = [
  {
    id: 'msg-1',
    sender: 'assistant',
    text: "Hello! I'm the Wrkzon Assistant. I can help you find jobs, build a LaTeX-quality CV, explain how our Job Agent works, or answer career questions. What would you like help with today?",
    timestamp: 'Just now'
  }
];

export const AssistantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<AssistantMessage[]>(initialMessages);

  // Global keydown listener for Ctrl+/ (or Cmd+/)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const openAssistant = () => setIsOpen(true);
  const closeAssistant = () => setIsOpen(false);
  const toggleAssistant = () => setIsOpen(prev => !prev);
  const clearMessages = () => setMessages(initialMessages);

  const sendMessage = (query: string) => {
    if (!query.trim()) return;

    const userMsg: AssistantMessage = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      const q = query.toLowerCase();
      let reply = "I'm here to help! You can explore our live jobs, use our free CV Maker, or register for the automated Job Agent waitlist.";
      let actionLink: { label: string; url: string } | undefined = undefined;

      if (q.includes('cv') || q.includes('resume')) {
        reply = "You can create or upload a resume in our CV Maker. We support LaTeX-grade typography and 6 customizable templates (AwesomeCV, Modern, Classic, Europass, Francais, Amharic).";
        actionLink = { label: 'Open CV Maker', url: '/cvmaker' };
      } else if (q.includes('job') || q.includes('work') || q.includes('remote') || q.includes('engineer') || q.includes('accountant')) {
        reply = "We have active verified positions across software engineering, humanitarian operations, accounting, and legal services with Easy Apply.";
        actionLink = { label: 'Browse Jobs', url: '/jobs' };
      } else if (q.includes('agent') || q.includes('agency') || q.includes('ai')) {
        reply = "Job Agent is our autonomous matching loop that scores roles against your profile and sends automated applications or candidate shortlists. Early access is open now!";
        actionLink = { label: 'Join Job Agent Waitlist', url: '/agency' };
      } else if (q.includes('candidate') || q.includes('hire') || q.includes('talent')) {
        reply = "Looking for verified talent? Browse public candidate profiles or post an open job directly from the Employer Hub.";
        actionLink = { label: 'View Candidates', url: '/candidates' };
      } else if (q.includes('help') || q.includes('support') || q.includes('contact')) {
        reply = "Need support or guidance? You can view our Help Center guides or reach our support desk anytime.";
        actionLink = { label: 'Visit Help Center', url: '/help' };
      }

      const botMsg: AssistantMessage = {
        id: 'bot-' + Date.now(),
        sender: 'assistant',
        text: reply,
        timestamp: 'Just now',
        actionLink
      };

      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  return (
    <AssistantContext.Provider
      value={{
        isOpen,
        openAssistant,
        closeAssistant,
        toggleAssistant,
        messages,
        sendMessage,
        clearMessages
      }}
    >
      {children}
    </AssistantContext.Provider>
  );
};

export const useAssistant = () => {
  const context = useContext(AssistantContext);
  if (!context) {
    throw new Error('useAssistant must be used within an AssistantProvider');
  }
  return context;
};
