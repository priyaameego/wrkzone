import React, { useState } from 'react';
import { Link, useNavigate, useSearch } from '@tanstack/react-router';
import { UserPlus, User, Building2, Lock, Mail, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const searchParams = useSearch({ strict: false }) as { role?: string };
  const initialRole = searchParams?.role === 'employer' ? 'employer' : 'seeker';

  const { register, showToast } = useAuth();
  const [role, setRole] = useState<'seeker' | 'employer'>(initialRole);
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }
    if (!agreed) {
      showToast('You must agree to the Terms of Service to register.', 'error');
      return;
    }
    register(name, email, role, role === 'employer' ? companyName || name : undefined);
    navigate({ to: role === 'employer' ? '/employer' : '/myzon' });
  };

  return (
    <div className="max-w-[480px] mx-auto px-4 py-12 space-y-6">
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
          Create Your Wrkzon Account
        </h1>
        <p className="text-xs text-slate-500">
          Get started with free CV tools, job matching, and early access pipelines.
        </p>
      </div>

      <div className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 space-y-5">
        
        {/* Role Toggle */}
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {role === 'seeker' ? 'Full Legal Name' : 'Contact Person Full Name'}
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Abebaw Alanche"
                className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
              />
            </div>
          </div>

          {role === 'employer' && (
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Company Name</label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={e => setCompanyName(e.target.value)}
                  placeholder="e.g. Global Tech Solutions"
                  className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
              />
            </div>
          </div>

          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="terms-check"
              checked={agreed}
              onChange={e => setAgreed(e.target.checked)}
              className="mt-0.5 rounded text-[#ff6600] focus:ring-[#ff6600]"
            />
            <label htmlFor="terms-check" className="text-[11px] text-slate-500 leading-tight">
              I agree to the{' '}
              <Link to="/terms" className="text-[#ff6600] hover:underline">Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-[#ff6600] hover:underline">Privacy Policy</Link>.
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold text-xs shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            <span>Create {role === 'employer' ? 'Employer' : 'Seeker'} Account</span>
          </button>
        </form>

        <div className="text-center pt-2 text-xs text-slate-500">
          Already registered?{' '}
          <Link to="/auth/login" search={{ role }} className="text-[#ff6600] font-bold hover:underline">
            Sign In here
          </Link>
        </div>

      </div>
    </div>
  );
};
