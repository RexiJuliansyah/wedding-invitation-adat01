import { motion } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';
import SectionFrame from './SectionFrame';
import GoldButton from './GoldButton';

// TikTok SVG icon (not in lucide)
const TikTokIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
  </svg>
);

export default function StreamingSection() {
  return (
    <section className="py-16 px-6 text-center relative z-10 w-full max-w-[500px] mx-auto bg-transparent flex flex-col items-center justify-center">

      {/* Top Separator Ornament */}
      <div className="flex items-center gap-3 mb-10 w-full max-w-[340px]">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#B8860B]/60" />
        <img src="/assets/Adat-Aceh-Ornamen-Tengah.png" alt="" className="w-10 opacity-80" loading="lazy" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#B8860B]/60" />
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }} viewport={{ once: true }}
        className="w-full max-w-[340px] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.15)] mb-8"
      >
        {/* Gold top bar */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-[#B8860B] to-transparent" />

        <div
          className="py-8 px-7 text-center"
          style={{
            background: 'linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(253,245,220,0.95) 100%)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {/* Live indicator */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.span
              className="w-2 h-2 rounded-full bg-red-500"
              animate={{ opacity: [1, 0.2, 1], scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <span className="text-[10px] font-bold text-red-500 tracking-widest uppercase font-serif">Live Streaming</span>
          </div>

          <h2 className="title-script text-4xl text-[#B8860B] drop-shadow-sm mb-4">Saksikan Bersama</h2>

          <p className="text-gray-600 text-[12px] font-serif leading-relaxed mb-6 max-w-[260px] mx-auto">
            Temui kami secara virtual. Acara akan disiarkan langsung melalui akun media sosial kami.
          </p>

          <GoldButton
            as="a"
            href="https://www.instagram.com/igmempelai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={15} />
            Tonton Live
          </GoldButton>
        </div>
      </motion.div>

      {/* Social Media Links — with icons */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}
        className="space-y-2.5"
      >
        {[
          { icon: Instagram, label: 'Instagram', handle: '@igmempelai', color: '#E1306C', href: 'https://instagram.com/igmempelai' },
          { icon: TikTokIcon, label: 'TikTok', handle: '@tiktokmempelai', color: '#010101', href: 'https://tiktok.com/@tiktokmempelai' },
          { icon: Youtube, label: 'YouTube', handle: 'youtubemempelai', color: '#FF0000', href: 'https://youtube.com/@youtubemempelai' },
        ].map(({ icon: Icon, label, handle, color, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-2 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-md"
            style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(184,134,11,0.2)' }}
          >
            <span style={{ color }}><Icon size={16} /></span>
            <span className="text-[12px] text-gray-600 font-serif">{label} : </span>
            <span className="text-[12px] font-bold text-[#5a421c] font-serif">{handle}</span>
          </a>
        ))}
      </motion.div>

      {/* Bottom Corner Ornaments */}
      <SectionFrame showTop={false} />
    </section>
  );
}
