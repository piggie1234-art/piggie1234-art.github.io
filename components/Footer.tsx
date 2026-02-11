import React from 'react';
import { Mail, MessageCircle, Github, MapPin, User } from 'lucide-react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">保持联系</h3>
            <p className="text-slate-400 mb-8 max-w-md">
              如果您对我的项目感兴趣，或者有任何学术交流、合作机会，欢迎随时通过以下方式联系我。
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-800 rounded-lg text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <a href={`mailto:${PROFILE.email}`} className="hover:text-white transition-colors">
                  {PROFILE.email}
                </a>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-800 rounded-lg text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <MessageCircle size={20} />
                </div>
                <span className="hover:text-white transition-colors">
                  微信: {PROFILE.wechat}
                </span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-800 rounded-lg text-white group-hover:bg-white group-hover:text-slate-900 transition-colors">
                  <Github size={20} />
                </div>
                <a 
                  href={`https://github.com/${PROFILE.github}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  github.com/{PROFILE.github}
                </a>
              </div>
            </div>
          </div>

          {/* Mini Bio Card */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                {PROFILE.name[0]}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{PROFILE.name}</h4>
                <p className="text-primary-400 text-sm">{PROFILE.school} | {PROFILE.major}</p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-slate-400">
               <div className="flex items-center gap-2">
                 <MapPin size={16} />
                 <span>籍贯: {PROFILE.location}</span>
               </div>
               <div className="flex items-center gap-2">
                 <User size={16} />
                 <span>研究方向: {PROFILE.focus}</span>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;