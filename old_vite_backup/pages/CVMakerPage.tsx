import React, { useState } from 'react';
import { 
  Download, Upload, Save, RotateCcw, Plus, 
  Trash2, Eye, FileText, CheckCircle2, Sparkles, Printer
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { CVProfileData } from '../types';

export const CVMakerPage: React.FC = () => {
  const { userCV, updateUserCV, showToast } = useAuth();
  const [cvData, setCvData] = useState<CVProfileData>(userCV);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [previewTemplate, setPreviewTemplate] = useState<CVProfileData['template']>(cvData.template || 'AwsomeCV');
  const [newSkill, setNewSkill] = useState('');

  const templates: { id: CVProfileData['template']; name: string; desc: string }[] = [
    { id: 'AwsomeCV', name: 'AwesomeCV', desc: 'Modern tech & engineering with bold headers' },
    { id: 'Classic', name: 'Classic', desc: 'Formal serif typography for finance & corporate' },
    { id: 'Modern', name: 'Modern', desc: 'Clean single-column layout optimized for ATS' },
    { id: 'Europass', name: 'Europass', desc: 'Standardized European framework styling' },
    { id: 'Francais', name: 'Français', desc: 'Tailored for francophone CV standards' },
    { id: 'Amharic', name: 'Amharic', desc: 'Localized formatting with Ethiopic font support' },
  ];

  const handleFieldChange = (field: keyof CVProfileData, value: any) => {
    setCvData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddExperience = () => {
    const newEntry = {
      id: 'wh-' + Date.now(),
      title: 'Senior Software Engineer',
      company: 'Company Name',
      period: '2024 - Present',
      description: 'Describe key achievements and measurable impacts using action verbs...'
    };
    setCvData(prev => ({ ...prev, workHistory: [newEntry, ...prev.workHistory] }));
  };

  const handleRemoveExperience = (id: string) => {
    setCvData(prev => ({ ...prev, workHistory: prev.workHistory.filter(w => w.id !== id) }));
  };

  const handleUpdateExperience = (id: string, field: string, val: string) => {
    setCvData(prev => ({
      ...prev,
      workHistory: prev.workHistory.map(w => w.id === id ? { ...w, [field]: val } : w)
    }));
  };

  const handleAddEducation = () => {
    const newEntry = {
      id: 'edu-' + Date.now(),
      degree: 'Degree / Major',
      school: 'University Name',
      period: '2020 - 2024'
    };
    setCvData(prev => ({ ...prev, education: [...prev.education, newEntry] }));
  };

  const handleRemoveEducation = (id: string) => {
    setCvData(prev => ({ ...prev, education: prev.education.filter(e => e.id !== id) }));
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkill.trim()) return;
    if (!cvData.skills.includes(newSkill.trim())) {
      setCvData(prev => ({ ...prev, skills: [...prev.skills, newSkill.trim()] }));
    }
    setNewSkill('');
  };

  const handleRemoveSkill = (skill: string) => {
    setCvData(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skill) }));
  };

  const handleSave = () => {
    updateUserCV(cvData);
    showToast('CV data saved successfully to your profile!', 'success');
  };

  const handleExportJSON = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(cvData, null, 2))}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `${cvData.fullName.replace(/\s+/g, '_')}_JSONResume.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('JSON Resume exported successfully!', 'success');
  };

  const handleImportJSON = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (re) => {
          try {
            const parsed = JSON.parse(re.target?.result as string);
            setCvData(prev => ({ ...prev, ...parsed }));
            showToast('JSON Resume imported successfully!', 'success');
          } catch {
            showToast('Invalid JSON Resume file format.', 'error');
          }
        };
        reader.readAsText(target.files[0]);
      }
    };
    input.click();
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-6">
      
      {/* Header & Controls Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Professional CV Maker
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Build recruiter-approved, LaTeX-grade resumes with live preview and JSON Resume support.
          </p>
        </div>

        {/* Global Toolbar buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleImportJSON}
            className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1.5 text-slate-700 dark:text-slate-300"
            title="Import JSON Resume"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Import JSON</span>
          </button>

          <button
            type="button"
            onClick={handleExportJSON}
            className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1.5 text-slate-700 dark:text-slate-300"
            title="Export JSON Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Export JSON</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadPDF}
            className="px-4 py-2 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Template Selector Ribbon */}
      <div className="bg-white dark:bg-[#1e1e28] p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span>Choose LaTeX Typography Template</span>
          <span className="text-[#ff6600] lowercase font-semibold">Live updating</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {templates.map(tpl => (
            <button
              key={tpl.id}
              type="button"
              onClick={() => {
                setPreviewTemplate(tpl.id);
                handleFieldChange('template', tpl.id);
              }}
              className={`p-3 rounded-xl border text-left transition-all ${
                previewTemplate === tpl.id
                  ? 'border-[#ff6600] bg-orange-50/60 dark:bg-orange-950/40 text-slate-900 dark:text-white shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-xs">{tpl.name}</span>
                {previewTemplate === tpl.id && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6600]" />
                )}
              </div>
              <p className="text-[10px] text-slate-500 line-clamp-1">{tpl.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Tab Toggle (Edit vs Preview) */}
      <div className="lg:hidden flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
        <button
          onClick={() => setActiveTab('edit')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
            activeTab === 'edit' ? 'bg-[#ff6600] text-white shadow-sm' : 'text-slate-600 dark:text-slate-300'
          }`}
        >
          Form Editor
        </button>
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
            activeTab === 'preview' ? 'bg-[#ff6600] text-white shadow-sm' : 'text-slate-600 dark:text-slate-300'
          }`}
        >
          Live Preview
        </button>
      </div>

      {/* Dual Workspace: Form Editor (Left) & Live Preview (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Form Editor */}
        <div className={`lg:col-span-6 space-y-6 ${activeTab === 'preview' ? 'hidden lg:block' : ''}`}>
          
          {/* Section: Personal Info */}
          <div className="bg-white dark:bg-[#1e1e28] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-800">
              1. Personal Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">Full Name</label>
                <input
                  type="text"
                  value={cvData.fullName}
                  onChange={e => handleFieldChange('fullName', e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">Professional Title</label>
                <input
                  type="text"
                  value={cvData.title}
                  onChange={e => handleFieldChange('title', e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">Email Address</label>
                <input
                  type="email"
                  value={cvData.email}
                  onChange={e => handleFieldChange('email', e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">Phone Number</label>
                <input
                  type="text"
                  value={cvData.phone}
                  onChange={e => handleFieldChange('phone', e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">Location (City, Country)</label>
                <input
                  type="text"
                  value={cvData.location}
                  onChange={e => handleFieldChange('location', e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
              </div>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="bg-white dark:bg-[#1e1e28] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-800">
              2. Professional Summary
            </h3>
            <textarea
              rows={4}
              value={cvData.summary}
              onChange={e => handleFieldChange('summary', e.target.value)}
              className="w-full bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600] leading-relaxed"
              placeholder="Highlight your core expertise, key achievements, and leadership impact..."
            />
          </div>

          {/* Section: Work Experience */}
          <div className="bg-white dark:bg-[#1e1e28] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                3. Work Experience
              </h3>
              <button
                type="button"
                onClick={handleAddExperience}
                className="text-xs font-bold text-[#ff6600] hover:text-[#e65c00] flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Role</span>
              </button>
            </div>

            <div className="space-y-4">
              {cvData.workHistory.map(wh => (
                <div key={wh.id} className="p-4 rounded-xl bg-slate-50 dark:bg-[#242432] border border-slate-200 dark:border-slate-700 space-y-3 relative group">
                  <button
                    type="button"
                    onClick={() => handleRemoveExperience(wh.id)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition-colors"
                    title="Remove experience"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="text"
                      value={wh.title}
                      onChange={e => handleUpdateExperience(wh.id, 'title', e.target.value)}
                      placeholder="Job Title"
                      className="bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-600 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 dark:text-white"
                    />
                    <input
                      type="text"
                      value={wh.company}
                      onChange={e => handleUpdateExperience(wh.id, 'company', e.target.value)}
                      placeholder="Company"
                      className="bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-600 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 dark:text-white"
                    />
                    <input
                      type="text"
                      value={wh.period}
                      onChange={e => handleUpdateExperience(wh.id, 'period', e.target.value)}
                      placeholder="Period (e.g. 2022 - Present)"
                      className="sm:col-span-2 bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-600 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 dark:text-white"
                    />
                  </div>

                  <textarea
                    rows={3}
                    value={wh.description}
                    onChange={e => handleUpdateExperience(wh.id, 'description', e.target.value)}
                    placeholder="Bullet points / achievements..."
                    className="w-full bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-600 rounded-lg p-2.5 text-xs text-slate-900 dark:text-white leading-relaxed"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div className="bg-white dark:bg-[#1e1e28] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                4. Education
              </h3>
              <button
                type="button"
                onClick={handleAddEducation}
                className="text-xs font-bold text-[#ff6600] hover:text-[#e65c00] flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Degree</span>
              </button>
            </div>

            <div className="space-y-3">
              {cvData.education.map(edu => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#242432] border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3">
                  <div className="space-y-1 flex-1">
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={e => setCvData(prev => ({
                        ...prev,
                        education: prev.education.map(x => x.id === edu.id ? { ...x, degree: e.target.value } : x)
                      }))}
                      placeholder="Degree"
                      className="w-full bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-600 rounded-lg px-2 py-1 text-xs font-bold text-slate-900 dark:text-white"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={edu.school}
                        onChange={e => setCvData(prev => ({
                          ...prev,
                          education: prev.education.map(x => x.id === edu.id ? { ...x, school: e.target.value } : x)
                        }))}
                        placeholder="School / University"
                        className="bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-600 rounded-lg px-2 py-1 text-xs text-slate-600 dark:text-slate-300"
                      />
                      <input
                        type="text"
                        value={edu.period}
                        onChange={e => setCvData(prev => ({
                          ...prev,
                          education: prev.education.map(x => x.id === edu.id ? { ...x, period: e.target.value } : x)
                        }))}
                        placeholder="Year"
                        className="bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-600 rounded-lg px-2 py-1 text-xs text-slate-600 dark:text-slate-300"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveEducation(edu.id)}
                    className="text-slate-400 hover:text-red-500"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Skills */}
          <div className="bg-white dark:bg-[#1e1e28] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-800">
              5. Skills &amp; Competencies
            </h3>

            <form onSubmit={handleAddSkill} className="flex gap-2">
              <input
                type="text"
                value={newSkill}
                onChange={e => setNewSkill(e.target.value)}
                placeholder="Type a skill and press enter (e.g. React, IFRS, Python)..."
                className="flex-1 bg-slate-50 dark:bg-[#262626] border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#ff6600] text-white text-xs font-bold"
              >
                Add
              </button>
            </form>

            <div className="flex flex-wrap gap-2 pt-2">
              {cvData.skills.map(skill => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-slate-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Live LaTeX-Quality Preview Frame */}
        <div className={`lg:col-span-6 sticky top-24 ${activeTab === 'edit' ? 'hidden lg:block' : ''}`}>
          <div className="bg-slate-100 dark:bg-slate-900/80 p-3 sm:p-5 rounded-3xl border border-slate-300 dark:border-slate-800 shadow-inner">
            <div className="flex items-center justify-between pb-3 px-2 text-xs font-bold text-slate-500">
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-[#ff6600]" />
                <span>Live LaTeX Preview: {previewTemplate}</span>
              </div>
              <span className="text-[11px] font-mono bg-white dark:bg-slate-800 px-2 py-0.5 rounded shadow-sm">
                A4 Document
              </span>
            </div>

            {/* Simulated Paper Canvas */}
            <div className="bg-white text-slate-900 p-8 sm:p-10 rounded-xl shadow-2xl border border-slate-200 min-h-[750px] space-y-6 font-sans text-xs select-text">
              
              {/* Header */}
              <div className="border-b-2 border-slate-800 pb-4 text-center space-y-1">
                <h2 className="text-2xl font-black tracking-tight uppercase text-slate-950 font-display">
                  {cvData.fullName || 'YOUR NAME'}
                </h2>
                <div className="text-xs font-semibold text-[#ff6600]">
                  {cvData.title || 'Professional Title'}
                </div>
                <div className="text-[10px] text-slate-500 flex flex-wrap justify-center gap-x-2">
                  <span>{cvData.email}</span>
                  {cvData.phone && <span>&middot; {cvData.phone}</span>}
                  {cvData.location && <span>&middot; {cvData.location}</span>}
                </div>
              </div>

              {/* Summary */}
              {cvData.summary && (
                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#ff6600] border-b border-slate-200 pb-0.5">
                    Summary
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-700">
                    {cvData.summary}
                  </p>
                </div>
              )}

              {/* Experience */}
              {cvData.workHistory.length > 0 && (
                <div className="space-y-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#ff6600] border-b border-slate-200 pb-0.5">
                    Experience
                  </div>
                  <div className="space-y-2.5">
                    {cvData.workHistory.map(w => (
                      <div key={w.id} className="space-y-0.5">
                        <div className="flex justify-between font-bold text-slate-900 text-[11px]">
                          <span>{w.title} — <span className="font-semibold text-slate-700">{w.company}</span></span>
                          <span className="font-mono text-slate-500 font-normal">{w.period}</span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-slate-600 whitespace-pre-line">
                          {w.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education */}
              {cvData.education.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#ff6600] border-b border-slate-200 pb-0.5">
                    Education
                  </div>
                  <div className="space-y-1.5">
                    {cvData.education.map(e => (
                      <div key={e.id} className="flex justify-between text-[11px]">
                        <div>
                          <strong className="text-slate-900">{e.degree}</strong>
                          <div className="text-slate-600 text-[10px]">{e.school}</div>
                        </div>
                        <span className="font-mono text-slate-500 text-[10px]">{e.period}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {cvData.skills.length > 0 && (
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#ff6600] border-b border-slate-200 pb-0.5">
                    Skills
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cvData.skills.map(s => (
                      <span key={s} className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-[10px] font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
