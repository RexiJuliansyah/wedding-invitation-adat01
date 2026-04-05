import { useState, useEffect } from 'react';
import { Home, Heart, Calendar, Image, Gift, MessageCircle, Disc3, Play } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Home, label: 'Beranda' },
  { id: 'couple', icon: Heart, label: 'Kami' },
  { id: 'event', icon: Calendar, label: 'Acara' },
  { id: 'gallery', icon: Image, label: 'Galeri' },
  { id: 'gift', icon: Gift, label: 'Hadiah' },
  { id: 'rsvp', icon: MessageCircle, label: "Do'a" },
];

export default function BottomNavBar({ isPlaying, toggleMusic }) {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.4;
      let current = 'hero';
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] z-40 pointer-events-none">

      {/* Music Button above navbar */}
      <div className="flex justify-end px-4 pb-3 pointer-events-none">
        <button
          onClick={toggleMusic}
          className="pointer-events-auto flex items-center justify-center w-[48px] h-[48px] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-transform hover:scale-110 active:scale-95 relative"
          style={{
            background: 'linear-gradient(135deg, #6b4e23 0%, #B8860B 50%, #6b4e23 100%)',
          }}
          title={isPlaying ? 'Jeda musik' : 'Putar musik'}
        >
          {isPlaying && (
            <span
              className="absolute inset-0 rounded-full animate-pulse"
              style={{ border: '2px solid rgba(212,175,55,0.5)' }}
            />
          )}
          {isPlaying
            ? <Disc3 size={20} className="text-white animate-spin" style={{ animationDuration: '3s' }} />
            : <Play size={20} className="text-white ml-0.5" fill="white" />
          }
        </button>
      </div>

      {/* Nav Bar */}
      <nav className="bg-[#2a1d0a] flex justify-around items-center py-2 px-1 shadow-[0_-6px_24px_rgba(0,0,0,0.5)] pointer-events-auto">
        {navItems.map(({ id, icon: Icon, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative flex flex-col items-center gap-[2px] px-3 py-1.5 rounded-xl transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100 hover:scale-105'
                }`}
              aria-label={label}
            >
              {/* Active top-glow bar */}
              {isActive && (
                <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              )}

              <Icon
                size={isActive ? 20 : 18}
                strokeWidth={isActive ? 2 : 1.5}
                className={`transition-colors duration-300 ${isActive ? 'text-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,0.7)]' : 'text-[#9a7b4f]'
                  }`}
              />
              <span
                className={`text-[9px] font-serif tracking-wide transition-colors duration-300 ${isActive ? 'text-[#D4AF37] font-bold' : 'text-[#7a6040]'
                  }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
