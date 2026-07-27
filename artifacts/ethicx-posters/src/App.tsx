import React, { useState } from 'react';
import { allPosters, PosterCategory } from '@/posters';
import { PosterCard } from '@/components/PosterCard';
import { PosterModal } from '@/components/PosterModal';
import { MonitorPlay, Download, Loader2 } from 'lucide-react';
import { downloadAllPosters } from '@/lib/downloadPoster';
import ethicxLogo from '@assets/1764163440584-removebg-preview_1785157622863.png';

const CATEGORIES: ('All' | PosterCategory)[] = ['All', 'Scarcity', 'Presale', 'Developer', 'Earn', 'Community'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | PosterCategory>('All');
  const [viewingPosterId, setViewingPosterId] = useState<string | null>(null);
  const [dlProgress, setDlProgress] = useState<{ current: number; total: number } | null>(null);

  const filteredPosters = selectedCategory === 'All'
    ? allPosters
    : allPosters.filter(p => p.category === selectedCategory || (selectedCategory === 'Community' && p.category === 'Vision'));

  const viewingPoster = viewingPosterId ? allPosters.find(p => p.id === viewingPosterId) || null : null;

  const isDownloading = dlProgress !== null;

  const handleDownloadAll = () => {
    if (isDownloading) return;
    downloadAllPosters(
      allPosters,
      (current, total) => setDlProgress({ current, total }),
      () => setDlProgress(null),
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary/30 pb-20 font-sans">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={ethicxLogo} alt="EthicX" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold uppercase tracking-widest leading-none">EthicX Lab</h1>
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">Poster Generator</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-zinc-500 text-sm font-medium">
            <MonitorPlay size={16} />
            <span>50 Premium Assets</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
            Marketing Toolkit
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            High-resolution, brand-aligned promotional posters for the EthicX ecosystem.
            Ready to download and deploy across all social channels.
          </p>
        </div>

        {/* ── DOWNLOAD ALL BUTTON ── */}
        <div className="mb-8">
          <button
            onClick={handleDownloadAll}
            disabled={isDownloading}
            className={`
              relative flex items-center gap-3 px-8 py-4 rounded-2xl
              font-black uppercase tracking-widest text-sm
              transition-all duration-200 overflow-hidden
              ${isDownloading
                ? 'bg-primary/20 text-primary cursor-not-allowed border border-primary/30'
                : 'bg-primary text-black hover:bg-primary/90 active:scale-[0.98] shadow-[0_0_40px_rgba(247,147,26,0.35)] hover:shadow-[0_0_55px_rgba(247,147,26,0.55)]'
              }
            `}
          >
            {isDownloading ? (
              <>
                <Loader2 size={20} className="animate-spin shrink-0" />
                <span>
                  Downloading&nbsp;
                  <span className="tabular-nums">{dlProgress!.current}</span>
                  <span className="opacity-60"> / {dlProgress!.total}</span>
                </span>
                {/* progress bar */}
                <span
                  className="absolute inset-x-0 bottom-0 h-[3px] bg-primary transition-all duration-150"
                  style={{ width: `${(dlProgress!.current / dlProgress!.total) * 100}%` }}
                />
              </>
            ) : (
              <>
                <Download size={20} className="shrink-0" />
                <span>Download All 50 Posters</span>
              </>
            )}
          </button>
          {isDownloading && (
            <p className="mt-2 text-zinc-500 text-xs">
              Your browser will save each PNG automatically — keep this tab open until complete.
            </p>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all
                ${selectedCategory === category
                  ? 'bg-primary text-black'
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {filteredPosters.map(poster => (
            <PosterCard
              key={poster.id}
              poster={poster}
              onClick={() => setViewingPosterId(poster.id)}
            />
          ))}
        </div>

        {filteredPosters.length === 0 && (
          <div className="py-20 text-center text-zinc-500">
            No posters found for this category.
          </div>
        )}
      </main>

      {/* Modal */}
      {viewingPoster && (
        <PosterModal
          poster={viewingPoster}
          onClose={() => setViewingPosterId(null)}
        />
      )}
    </div>
  );
}

export default App;
