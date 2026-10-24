import React, { useState } from 'react';
import { Link, useNavigate, useSearch } from '@tanstack/react-router';
import { LogIn, User, Building2, Lock, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const searchParams = useSearch({ strict: false }) as { role?: string; start?: string };
  const initialRole = searchParams?.role === 'employer' ? 'employer' : 'seeker';

  const { login, showToast } = useAuth();
  const [role, setRole] = useState<'seeker' | 'employer'>(initialRole);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please enter both your email and password.', 'error');
      return;
    }
    login(email, role);
    navigate({ to: role === 'employer' ? '/employer' : '/myzon' });
  };

  const handleQuickDemoLogin = (demoRole: 'seeker' | 'employer') => {
    const demoEmail = demoRole === 'employer' ? 'recruiter@irc-aid.org' : 'abebaw@wrkzon.com';
    login(demoEmail, demoRole);
    navigate({ to: demoRole === 'employer' ? '/employer' : '/myzon' });
  };

  return (
    <div className="max-w-[480px] mx-auto px-4 py-12 space-y-6">
      
      {/* Brand Header */}
      <div className="text-center space-y-2">
        <Link to="/" className="inline-flex items-center gap-2 mb-2">
          <img
            src="/images/brand/wrkzon-icon-nav.png"
            alt="Wrkzon"
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
          />
          <span className="font-display font-extrabold text-2xl tracking-tight leading-none">
            <span className="text-slate-900 dark:text-white">wrk</span>
            <span className="text-[#ff6600]">zon</span>
          </span>
        </Link>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          Sign In to Your Account
        </h1>
        <p className="text-xs text-slate-500">
          Access your saved CVs, track applications, or manage employer vacancies.
        </p>
      </div>

      <div className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 space-y-5">
        
        {/* Role Switcher */}
        <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
          <button
            type="button"
            onClick={() => setRole('seeker')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              role === 'seeker' ? 'bg-[#ff6600] text-white shadow-sm' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Job Seeker</span>
          </button>
          <button
            type="button"
            onClick={() => setRole('employer')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              role === 'employer' ? 'bg-[#ff6600] text-white shadow-sm' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Employer / Recruiter</span>
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={role === 'employer' ? 'recruiter@company.com' : 'you@example.com'}
                className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Password</label>
              <Link to="/auth/forgot-password" search={{ role }} className="text-[11px] font-semibold text-[#ff6600] hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold text-xs shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In to {role === 'employer' ? 'Employer Hub' : 'Myzon'}</span>
          </button>
        </form>

        {/* Demo One-Click Logins */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <div className="text-[11px] text-center text-slate-400 font-medium">Quick preview as:</div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('seeker')}
              className="py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-center"
            >
              Demo Seeker
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('employer')}
              className="py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-center"
            >
              Demo Employer
            </button>
          </div>
        </div>

        {/* Register link */}
        <div className="text-center pt-2 text-xs text-slate-500">
          Don't have an account yet?{' '}
          <Link to="/auth/register" search={{ role }} className="text-[#ff6600] font-bold hover:underline">
            Register now
          </Link>
        </div>

      </div>
    </div>
  );
};
