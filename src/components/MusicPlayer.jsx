import { motion, AnimatePresence } from 'framer-motion';
import { Disc3, Play, Pause } from 'lucide-react';

export default function MusicPlayer({ isPlaying, toggleMusic }) {
  return (
    <AnimatePresence>
      <motion.button
        key="music-player"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        onClick={toggleMusic}
        className="fixed bottom-[72px] right-4 z-50 flex items-center justify-center w-[52px] h-[52px] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-transform hover:scale-110 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #6b4e23 0%, #B8860B 50%, #6b4e23 100%)',
        }}
        title={isPlaying ? 'Jeda musik' : 'Putar musik'}
      >
        {/* Pulse ring when playing */}
        {isPlaying && (
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ border: '2px solid rgba(212,175,55,0.5)' }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        )}

        {/* Icon: playing → Disc3 spin, paused → Play */}
        {isPlaying
          ? <Disc3 size={22} className="text-white animate-spin" style={{ animationDuration: '3s' }} />
          : <Play size={20} className="text-white ml-0.5" fill="white" />
        }
      </motion.button>
    </AnimatePresence>
  );
}
