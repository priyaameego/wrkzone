import React from 'react';
import { Link } from '@tanstack/react-router';
import { GraduationCap, Clock, Star, Users, ChevronRight, BookOpen } from 'lucide-react';
import { mockCourses } from '../data/mockData';

export const CoursesPage: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
          Career Development &amp; Skill Courses
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Upskill with high-demand courses taught by verified engineering and hiring leaders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockCourses.map(course => (
          <div
            key={course.id}
            className="bg-white dark:bg-[#1a1a24] p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-orange-300 dark:hover:border-orange-800 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-[#ff6600] dark:bg-orange-950/60 dark:text-orange-400">
                  {course.category}
                </span>
                <span className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{course.rating}</span>
                  <span className="text-slate-400">({course.reviewCount})</span>
                </span>
              </div>

              <Link
                to={`/course/${course.id}` as any}
                className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#ff6600] transition-colors block leading-snug"
              >
                {course.title}
              </Link>

              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{course.duration}</span>
                </span>
                <span>&middot;</span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{course.studentsCount} students</span>
                </span>
                <span>&middot;</span>
                <span>Level: {course.level}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">Instructor: {course.instructor}</span>
              <Link
                to={`/course/${course.id}` as any}
                className="px-4 py-2 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white text-xs font-bold transition-colors"
              >
                View Syllabus &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
