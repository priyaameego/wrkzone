import React, { createContext, useContext, useState, useEffect } from 'react';
import { CVProfileData } from '../types';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'seeker' | 'employer';
  companyName?: string;
}

interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, role?: 'seeker' | 'employer') => void;
  register: (name: string, email: string, role: 'seeker' | 'employer', companyName?: string) => void;
  logout: () => void;
  savedJobIds: string[];
  toggleSaveJob: (jobId: string) => void;
  appliedJobIds: string[];
  applyToJob: (jobId: string) => boolean;
  userCV: CVProfileData;
  updateUserCV: (data: Partial<CVProfileData>) => void;
  toasts: ToastMessage[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const defaultCV: CVProfileData = {
  fullName: 'Abebaw Alanche',
  title: 'Senior Full-Stack Engineer',
  email: 'abebaw@example.com',
  phone: '+251 91 123 4567',
  location: 'Addis Ababa, Ethiopia',
  website: 'https://wrkzon.com/cv/abebaw-alanche-1',
  linkedin: 'https://linkedin.com/in/abebaw-alanche',
  github: 'https://github.com/abebaw',
  summary: 'Experienced software engineer specialized in building scalable cloud web applications, modern React/TypeScript frontends, and robust backend APIs with high reliability.',
  template: 'AwsomeCV',
  workHistory: [
    {
      id: 'wh-1',
      title: 'Lead Software Engineer',
      company: 'ZonTech Solutions',
      period: '2023 - Present',
      description: 'Architecting high-throughput job matching engines, mentoring engineering squads, and optimizing microservices.'
    },
    {
      id: 'wh-2',
      title: 'Full Stack Engineer',
      company: 'EthioFin Innovations',
      period: '2020 - 2023',
      description: 'Developed modern web applications using React, Node.js, and PostgreSQL.'
    }
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'B.Sc. in Computer Science',
      school: 'Addis Ababa University',
      period: '2015 - 2019'
    }
  ],
  skills: ['React', 'TypeScript', 'Node.js', 'C# .NET', 'PostgreSQL', 'Docker', 'AWS', 'Tailwind CSS'],
  languages: ['English (Fluent)', 'Amharic (Native)'],
  certifications: ['AWS Certified Solutions Architect', 'Professional Scrum Master']
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem('wrzon:user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [savedJobIds, setSavedJobIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('wrzon:saved_jobs');
      return stored ? JSON.parse(stored) : ['job-1', 'job-6'];
    } catch {
      return ['job-1', 'job-6'];
    }
  });

  const [appliedJobIds, setAppliedJobIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('wrzon:applied_jobs');
      return stored ? JSON.parse(stored) : ['job-2'];
    } catch {
      return ['job-2'];
    }
  });

  const [userCV, setUserCV] = useState<CVProfileData>(() => {
    try {
      const stored = localStorage.getItem('wrzon:cv');
      return stored ? JSON.parse(stored) : defaultCV;
    } catch {
      return defaultCV;
    }
  });

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('wrzon:user', JSON.stringify(user));
      } else {
        localStorage.removeItem('wrzon:user');
      }
    } catch {
      // ignore
    }
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem('wrzon:saved_jobs', JSON.stringify(savedJobIds));
    } catch {
      // ignore
    }
  }, [savedJobIds]);

  useEffect(() => {
    try {
      localStorage.setItem('wrzon:applied_jobs', JSON.stringify(appliedJobIds));
    } catch {
      // ignore
    }
  }, [appliedJobIds]);

  useEffect(() => {
    try {
      localStorage.setItem('wrzon:cv', JSON.stringify(userCV));
    } catch {
      // ignore
    }
  }, [userCV]);

  const login = (email: string, role: 'seeker' | 'employer' = 'seeker') => {
    const name = email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const newUser: User = {
      id: 'usr-' + Math.random().toString(36).substring(2, 7),
      name: name || 'Abebaw Alanche',
      email,
      role,
      companyName: role === 'employer' ? 'Tech Innovations Ltd' : undefined
    };
    setUser(newUser);
    showToast(`Signed in successfully as ${newUser.name} (${role === 'employer' ? 'Employer' : 'Job Seeker'})`, 'success');
  };

  const register = (name: string, email: string, role: 'seeker' | 'employer', companyName?: string) => {
    const newUser: User = {
      id: 'usr-' + Math.random().toString(36).substring(2, 7),
      name,
      email,
      role,
      companyName
    };
    setUser(newUser);
    showToast(`Welcome to Wrkzon, ${name}! Your account is ready.`, 'success');
  };

  const logout = () => {
    setUser(null);
    showToast('Signed out successfully.', 'info');
  };

  const toggleSaveJob = (jobId: string) => {
    setSavedJobIds(prev => {
      const exists = prev.includes(jobId);
      if (exists) {
        showToast('Job removed from saved jobs.', 'info');
        return prev.filter(id => id !== jobId);
      } else {
        showToast('Job saved to your Myzon list!', 'success');
        return [...prev, jobId];
      }
    });
  };

  const applyToJob = (jobId: string): boolean => {
    if (appliedJobIds.includes(jobId)) {
      showToast('You have already applied for this position.', 'info');
      return false;
    }
    setAppliedJobIds(prev => [...prev, jobId]);
    showToast('Application submitted successfully via Wrkzon Easy Apply!', 'success');
    return true;
  };

  const updateUserCV = (data: Partial<CVProfileData>) => {
    setUserCV(prev => ({ ...prev, ...data }));
    showToast('CV updated successfully.', 'success');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        savedJobIds,
        toggleSaveJob,
        appliedJobIds,
        applyToJob,
        userCV,
        updateUserCV,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
      {/* Toast container */}
      <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map(t => (
          <div
            key={t.id}
            className={`pointer-events-auto p-3.5 rounded-lg shadow-lg text-sm font-medium flex items-center justify-between border transition-all transform translate-y-0 ${
              t.type === 'success'
                ? 'bg-emerald-600 text-white border-emerald-700'
                : t.type === 'error'
                ? 'bg-red-600 text-white border-red-700'
                : 'bg-slate-800 text-white border-slate-700'
            }`}
          >
            <span>{t.message}</span>
            <button
              onClick={() => removeToast(t.id)}
              className="ml-3 text-white/80 hover:text-white font-bold"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
