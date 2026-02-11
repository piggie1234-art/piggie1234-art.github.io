import React from 'react';
import { PROFILE } from '../constants';
import { GraduationCap, MapPin, Anchor } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center p-2 bg-primary-50 rounded-full mb-6">
          <span className="px-3 py-1 text-xs font-semibold tracking-wide text-primary-700 uppercase bg-white rounded-full shadow-sm border border-primary-100">
            Open for Opportunities
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          您好，我是 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">{PROFILE.name}</span>
        </h1>

        <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {PROFILE.school} {PROFILE.title}，专注于
          <span className="font-semibold text-slate-800 mx-1">{PROFILE.focus}</span>。
          擅长使用 Python、PyTorch 进行深度学习算法开发与工程落地。
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
            <GraduationCap size={16} className="text-primary-500" />
            <span>{PROFILE.major}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
            <Anchor size={16} className="text-primary-500" />
            <span>{PROFILE.focus}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
            <MapPin size={16} className="text-primary-500" />
            <span>{PROFILE.location}</span>
          </div>
        </div>

        <div className="mt-10">
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-full shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1"
          >
            查看我的项目
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;