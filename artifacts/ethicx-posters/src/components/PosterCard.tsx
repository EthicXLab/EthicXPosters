import React from 'react';
import { PosterDefinition } from '@/posters';

interface PosterCardProps {
  poster: PosterDefinition;
  onClick: () => void;
}

export function PosterCard({ poster, onClick }: PosterCardProps) {
  // Using a 1080x1080 div scaled down via CSS scale inside a container that hides overflow
  return (
    <div className="group relative flex flex-col gap-3 rounded-xl bg-zinc-900/50 p-3 border border-white/5 hover:border-primary/50 transition-colors">
      <div 
        className="w-full aspect-square bg-black overflow-hidden rounded-lg cursor-pointer relative"
        onClick={onClick}
      >
        {/* We use a container that scales its 1080px child to exactly match the parent's width */}
        <div className="absolute inset-0 flex" style={{ containerType: 'inline-size' }}>
          <div 
            style={{ 
              width: '1080px', 
              height: '1080px', 
              transform: 'scale(calc(100cqi / 1080))', 
              transformOrigin: 'top left' 
            }}
            className="pointer-events-none"
          >
             <poster.component />
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
           <div className="bg-black/80 text-white font-bold uppercase tracking-wider py-2 px-6 rounded-full border border-primary/50 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all">
             View Full
           </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-1 px-1">
        <span className="text-[10px] font-bold text-primary tracking-widest uppercase">{poster.category}</span>
        <h4 className="text-white font-semibold text-sm leading-tight line-clamp-2" title={poster.title}>
          {poster.title}
        </h4>
      </div>
    </div>
  );
}
