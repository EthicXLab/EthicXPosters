import html2canvas from 'html2canvas';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import type { PosterDefinition } from '@/posters';

export async function downloadPoster(element: HTMLElement, filename: string) {
  try {
    const canvas = await html2canvas(element, {
      width: 1080,
      height: 1080,
      scale: 1,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#0a0a0a',
    });
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (error) {
    console.error('Failed to download poster:', error);
  }
}

export async function downloadAllPosters(
  posters: PosterDefinition[],
  onProgress: (current: number, total: number) => void,
  onDone: () => void
) {
  // Off-screen container rendered at exact poster size so html2canvas captures correctly
  const container = document.createElement('div');
  container.style.cssText = [
    'position:fixed',
    'left:-2000px',
    'top:0',
    'width:1080px',
    'height:1080px',
    'overflow:hidden',
    'pointer-events:none',
    'z-index:-999',
    'background:#0a0a0a',
  ].join(';');
  document.body.appendChild(container);

  const root = createRoot(container);

  try {
    for (let i = 0; i < posters.length; i++) {
      const poster = posters[i];
      onProgress(i + 1, posters.length);

      // Render synchronously so the DOM is ready before html2canvas fires
      flushSync(() => {
        root.render(React.createElement(poster.component));
      });

      // Give images/fonts a tick to settle (they're already loaded from gallery)
      await new Promise(r => setTimeout(r, 80));

      try {
        const canvas = await html2canvas(container, {
          width: 1080,
          height: 1080,
          scale: 1,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#0a0a0a',
        });

        const link = document.createElement('a');
        link.download = `EthicX-${poster.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
        link.href = canvas.toDataURL('image/png');
        // Append to body briefly so Firefox honours the download attribute
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (err) {
        console.error(`Failed to capture poster "${poster.title}":`, err);
      }

      // Small gap so the browser's download queue doesn't saturate
      await new Promise(r => setTimeout(r, 120));
    }
  } finally {
    root.unmount();
    document.body.removeChild(container);
    onDone();
  }
}
