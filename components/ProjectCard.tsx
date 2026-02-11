import React from 'react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-primary-50 rounded-xl group-hover:bg-primary-100 transition-colors">
            <FolderGit2 className="text-primary-600" size={24} />
          </div>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer"
            className="text-slate-400 hover:text-primary-600 transition-colors"
            title="View Code"
          >
            <Github size={20} />
          </a>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2.5 py-1 text-xs font-medium text-primary-700 bg-primary-50 rounded-md border border-primary-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <a 
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="w-full py-3 bg-slate-50 border-t border-slate-100 text-slate-600 text-sm font-medium flex items-center justify-center gap-2 group-hover:bg-primary-600 group-hover:text-white transition-colors"
      >
        <span>查看详情 & 代码</span>
        <ExternalLink size={14} />
      </a>
    </div>
  );
};

export default ProjectCard;