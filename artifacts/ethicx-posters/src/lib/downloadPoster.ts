import html2canvas from 'html2canvas';

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
