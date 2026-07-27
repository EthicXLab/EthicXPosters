import React, { useRef } from 'react';
import { downloadPoster } from '@/lib/downloadPoster';
import { Download, X } from 'lucide-react';
import { PosterDefinition } from '@/posters';

interface PosterModalProps {
  poster: PosterDefinition | null;
  onClose: () => void;
}

export function PosterModal({ poster, onClose }: PosterModalProps) {
  const posterRef = useRef<HTMLDivElement>(null);

  if (!poster) return null;

  const handleDownload = () => {
    if (posterRef.current) {
      downloadPoster(posterRef.current, `EthicX-${poster.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X size={24} />
      </button>

      <div className="flex flex-col md:flex-row gap-8 max-h-full items-center justify-center max-w-7xl w-full">
        <div className="flex-1 overflow-hidden flex items-center justify-center h-full w-full relative" style={{ containerType: 'size' }}>
          <div 
            className="relative shadow-2xl rounded-sm pointer-events-none" 
            style={{ 
              width: '1080px', 
              height: '1080px', 
              transform: 'scale(min(calc(100cqi / 1080), calc(100cqb / 1080), 0.8))', 
              transformOrigin: 'center center' 
            }}
          >
             {/* We render a pristine unscaled version for html2canvas to capture */}
             <div ref={posterRef} className="absolute inset-0 w-[1080px] h-[1080px] origin-top-left bg-[#0a0a0a] pointer-events-auto">
               <poster.component />
             </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:w-80 shrink-0 bg-zinc-900/80 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
          <div>
            <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">{poster.category}</h3>
            <h2 className="text-2xl font-bold text-white mb-4">{poster.title}</h2>
          </div>
          
          <button 
            onClick={handleDownload}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-black font-bold py-4 px-6 rounded-xl transition-all active:scale-95 uppercase tracking-wider"
          >
            <Download size={20} />
            Download PNG
          </button>
          
          <p className="text-zinc-500 text-sm">
            High-resolution 1080x1080 output ready for social media posting.
          </p>
        </div>
      </div>
    </div>
  );
}
