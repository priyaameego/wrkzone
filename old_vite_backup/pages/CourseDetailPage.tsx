import React, { useState } from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { GraduationCap, Clock, Star, Users, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';
import { mockCourses } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

export const CourseDetailPage: React.FC = () => {
  const { id } = useParams({ strict: false }) as { id: string };
  const { showToast } = useAuth();
  const [enrolled, setEnrolled] = useState(false);

  const course = mockCourses.find(c => c.id === id || c.id === `course-${id}`) || mockCourses[0];

  const handleEnroll = () => {
    setEnrolled(true);
    showToast(`Enrolled in "${course.title}" successfully! Access details sent to your account.`, 'success');
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
        <Link to="/" className="hover:text-[#ff6600]">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link to="/courses" className="hover:text-[#ff6600]">Courses</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 dark:text-slate-200 truncate">{course.title}</span>
      </nav>

      {/* Hero Header */}
      <div className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
        <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-orange-100 text-[#ff6600] dark:bg-orange-950/60 dark:text-orange-400 uppercase tracking-wider">
          {course.category}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display leading-tight">
          {course.title}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          {course.description}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
          <span>Instructor: <strong>{course.instructor}</strong></span>
          <span>&middot;</span>
          <span className="flex items-center gap-1 text-amber-500 font-bold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{course.rating} ({course.reviewCount} reviews)</span>
          </span>
          <span>&middot;</span>
          <span>Duration: <strong>{course.duration}</strong></span>
          <span>&middot;</span>
          <span>Level: <strong>{course.level}</strong></span>
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={handleEnroll}
            disabled={enrolled}
            className={`px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all ${
              enrolled
                ? 'bg-emerald-600 text-white cursor-default'
                : 'bg-[#ff6600] hover:bg-[#e65c00] text-white active:scale-[0.98]'
            }`}
          >
            {enrolled ? 'Enrolled & Active' : 'Enroll in Free Course'}
          </button>
        </div>
      </div>

      {/* Syllabus */}
      <div className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#ff6600]" />
          <span>Curriculum &amp; Syllabus Modules</span>
        </h2>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {course.syllabus.map((mod, i) => (
            <div key={i} className="py-3.5 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-orange-50 dark:bg-slate-800 text-[#ff6600] flex items-center justify-center font-bold text-xs shrink-0">
                  {i + 1}
                </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{mod.title}</span>
              </div>
              <span className="text-slate-500 font-mono text-xs">{mod.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
