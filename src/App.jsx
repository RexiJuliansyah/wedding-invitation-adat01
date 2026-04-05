import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import CoverSection from './components/CoverSection';
import HeroSection from './components/HeroSection';
import QuotesSection from './components/QuotesSection';
import CoupleSection from './components/CoupleSection';
import EventSection from './components/EventSection';
import StreamingSection from './components/StreamingSection';
import StorySection from './components/StorySection';
import GallerySection from './components/GallerySection';
import GiftSection from './components/GiftSection';
import RSVPSection from './components/RSVPSection';
import SectionDivider from './components/SectionDivider';
import BottomNavBar from './components/BottomNavBar';
import BrandedFooter from './components/BrandedFooter';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/assets/music.m4a');
    audioRef.current.loop = true;
    return () => { if (audioRef.current) audioRef.current.pause(); };
  }, []);

  const handleOpen = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(err => console.error('Autoplay prevented:', err));
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center w-full font-sans">
      {/* Mobile Wrapper for Desktop */}
      <div className="w-full max-w-[500px] min-h-screen relative shadow-2xl overflow-x-hidden pb-20 isolate">
        {/* Anti-Jumping Fixed Background */}
        <div className="fixed top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] bg-batik pointer-events-none z-0"></div>


        <AnimatePresence>
          {!isOpened && <CoverSection onOpen={handleOpen} />}
        </AnimatePresence>

        {isOpened && (
          <div className="relative z-10 w-full animate-fade-in">
            <div id="hero"><HeroSection /></div>
            <SectionDivider shadow='both' />
            <QuotesSection />
            <SectionDivider shadow='both' />
            <div id="couple"><CoupleSection /></div>
            <SectionDivider shadow='both' />
            <div id="event"><EventSection /></div>
            <SectionDivider shadow='both' />
            <StreamingSection />
            <SectionDivider shadow='both' />
            <StorySection />
            <SectionDivider shadow='both' />
            <div id="gallery"><GallerySection /></div>
            <SectionDivider shadow='both' />
            <div id="gift"><GiftSection /></div>
            <SectionDivider shadow='both' />
            <div id="rsvp"><RSVPSection /></div>
            <SectionDivider shadow='top' />
            <BrandedFooter />
          </div>
        )}

        {isOpened && <BottomNavBar isPlaying={isPlaying} toggleMusic={toggleMusic} />}
      </div>
    </div>
  );
}
