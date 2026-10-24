import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, Trash2 } from 'lucide-react';
import { useAssistant } from '../../context/AssistantContext';
import { Link } from '@tanstack/react-router';

export const AssistantModal: React.FC = () => {
  const { isOpen, closeAssistant, messages, sendMessage, clearMessages } = useAssistant();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput('');
  };

  const handleChipClick = (query: string) => {
    sendMessage(query);
  };

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-[#1a1a24] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col h-[600px] max-h-[90vh] overflow-hidden"
        role="dialog"
        aria-label="Wrkzon Assistant"
      >
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-[#ff6600] to-orange-500 text-white flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shadow-inner">
              <Sparkles className="w-5 h-5 text-yellow-200 animate-pulse" />
            </div>
            <div>
              <h2 className="text-base font-bold leading-tight">Wrkzon Assistant</h2>
              <p className="text-xs text-orange-100 flex items-center gap-1">
                <span>AI Career &amp; Matching Guide</span>
                <span>&middot;</span>
                <kbd className="px-1.5 py-0.5 text-[10px] bg-white/20 rounded font-mono">Ctrl + /</kbd>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={clearMessages}
              title="Clear conversation"
              className="p-2 rounded-lg hover:bg-white/15 text-white/90 hover:text-white transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={closeAssistant}
              title="Close Assistant"
              className="p-2 rounded-lg hover:bg-white/15 text-white/90 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/50 dark:bg-[#15151c]">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-[#ff6600]/15 dark:bg-orange-500/20 text-[#ff6600] dark:text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#ff6600] text-white rounded-tr-none'
                    : 'bg-white dark:bg-[#20202c] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm rounded-tl-none'
                }`}
              >
                <p>{msg.text}</p>

                {msg.actionLink && (
                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-700/60">
                    <Link
                      to={msg.actionLink.url}
                      onClick={closeAssistant}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#ff6600] text-white hover:bg-[#e65c00] transition-colors"
                    >
                      <span>{msg.actionLink.label}</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompt Chips */}
        <div className="px-4 py-2 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a1a24] flex items-center gap-2 overflow-x-auto text-xs whitespace-nowrap">
          <span className="text-slate-600 dark:text-slate-300 font-medium shrink-0">Try asking:</span>
          <button
            onClick={() => handleChipClick('How do I build a LaTeX CV?')}
            className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-orange-50 hover:text-[#ff6600] dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
          >
            How do I build a LaTeX CV?
          </button>
          <button
            onClick={() => handleChipClick('Browse remote software engineering jobs')}
            className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-orange-50 hover:text-[#ff6600] dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
          >
            Remote engineering jobs
          </button>
          <button
            onClick={() => handleChipClick('How does Job Agent early access work?')}
            className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-orange-50 hover:text-[#ff6600] dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
          >
            Job Agent early access
          </button>
        </div>

        {/* Input Footer */}
        <form onSubmit={handleSubmit} className="p-3 sm:p-4 bg-white dark:bg-[#1a1a24] border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask anything about jobs, CVs, or Job Agent..."
            className="flex-1 bg-slate-100 dark:bg-[#232330] border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="px-4 py-2.5 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white font-medium text-sm flex items-center gap-1.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            <span>Send</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
