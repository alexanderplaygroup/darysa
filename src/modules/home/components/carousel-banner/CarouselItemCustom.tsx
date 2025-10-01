import { AppImage } from '@/common/components/custom-ui/AppImage';
import { PlayIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type ImageSlideProps = {
  src: string;
  alt: string;
  height?: number;
};

export function ImageSlide({ src, alt, height = 500 }: ImageSlideProps) {
  return (
    <div className="relative w-full" style={{ height }}>
      <AppImage src={src} alt={alt} fill sizes="100vw" className="object-center" />
    </div>
  );
}

type ClickableImageSlideProps = ImageSlideProps & {
  href: string;
};

export function ClickableImageSlide({ src, alt, href, height = 500 }: ClickableImageSlideProps) {
  return (
    <a href={href} className="relative block w-full" style={{ height }} target="_blank">
      <AppImage src={src} alt={alt} fill sizes="100vw" className="object-center" />
    </a>
  );
}

type VideoSlideProps = {
  src: string;
  height?: number;
  loop?: boolean;
  muted?: boolean;
  onFullscreenChange?: (isFullscreen: boolean) => void;
};

export function VideoSlide({
  src,
  height = 500,
  loop = true,
  muted = true,
  onFullscreenChange,
}: VideoSlideProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Detectar cambios de fullscreen
  useEffect(() => {
    const handler = () => {
      const video = videoRef.current;
      if (!video) return;

      const isFull = document.fullscreenElement === video;
      setIsFullscreen(isFull);

      if (isFull) {
        // 👉 Entró a fullscreen
        video.currentTime = 0; // 👈 reinicia desde el inicio
        video.muted = false;
        video.volume = 0.5;
        video.play();
      } else {
        // 👉 Salió de fullscreen
        video.muted = true; // solo se silencia, pero sigue corriendo
      }

      // Avisamos al carrusel
      onFullscreenChange?.(isFull);
    };

    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, [onFullscreenChange]);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  return (
    <div className="relative w-full cursor-pointer" style={{ height }} onClick={handleClick}>
      <video
        ref={videoRef}
        src={src}
        loop={loop}
        muted={muted}
        autoPlay
        playsInline
        className="h-full w-full object-cover"
      />

      {/* Overlay hasta que el user haga clic */}
      {!isFullscreen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-lg">
            <PlayIcon size={32} />
          </div>
        </div>
      )}
    </div>
  );
}
