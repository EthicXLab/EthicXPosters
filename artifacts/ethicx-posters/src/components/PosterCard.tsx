import React, { useRef, useState, useEffect } from 'react';
import { PosterDefinition } from '@/posters';

interface PosterCardProps {
  poster: PosterDefinition;
  onClick: () => void;
}

export function PosterCard({ poster, onClick }: PosterCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => {
      setScale(el.offsetWidth / 1080);
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="group relative flex flex-col gap-3 rounded-xl bg-zinc-900/50 p-3 border border-white/5 hover:border-[#F7931A]/50 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div
        ref={containerRef}
        className="w-full aspect-square bg-black overflow-hidden rounded-lg relative"
      >
        {scale > 0 && (
          <div
            style={{
              width: '1080px',
              height: '1080px',
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              pointerEvents: 'none',
            }}
          >
            <poster.component />
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-black/80 text-white font-bold uppercase tracking-wider py-2 px-5 rounded-full border border-[#F7931A]/60 text-xs transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
            View Full
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 px-1">
        <span className="text-[10px] font-bold text-[#F7931A] tracking-widest uppercase">
          {poster.category}
        </span>
        <h4
          className="text-white font-semibold text-sm leading-tight line-clamp-2"
          title={poster.title}
        >
          {poster.title}
        </h4>
      </div>
    </div>
  );
}
