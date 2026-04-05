import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import GoldButton from './GoldButton';

export default function BrandedFooter() {
  return (
    <footer className="relative z-10 w-full max-w-[500px] mx-auto overflow-hidden">

      {/* Top wave ornament */}
      <div className="flex items-center gap-0 w-full">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
      </div>

      {/* Footer body */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center px-8 pt-10 pb-24"
      >
        {/* Separator ornament */}
        <div className="flex items-center gap-3 w-full max-w-[280px] mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#B8860B]/50" />
          <img src="/assets/Adat-Aceh-Ornamen-Tengah.png" alt="" className="w-8 opacity-60" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#B8860B]/50" />
        </div>

        {/* "Dibuat dengan" label */}
        <p className="text-[10px] font-serif tracking-[0.2em] uppercase text-[#9a7b4f] mb-5">
          Dibuat dengan penuh cinta oleh
        </p>

        {/* Logo */}

        <div
          className="relative mb-5 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(184,134,11,0.2)] transition-all duration-500 group-hover:shadow-[0_12px_40px_rgba(184,134,11,0.35)] group-hover:scale-[1.03]"
          style={{
            background: 'linear-gradient(160deg, #fdf8ee 0%, #f3e8cc 100%)',
            border: '1.5px solid rgba(184,134,11,0.3)',
            padding: '20px 32px',
          }}
        >
          {/* Gold top accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B8860B] to-transparent" />

          <img
            src="/assets/letare-logo-gold.png"
            alt="Letare Invitation"
            className="w-[180px] h-auto object-contain mx-auto"
            style={{ filter: 'drop-shadow(0 2px 8px rgba(184,134,11,0.15))' }}
          />

          {/* Gold bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent" />
        </div>

        {/* Instagram CTA */}
        <GoldButton
          as="a"
          href="https://www.instagram.com/letareinvitation"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4"
        >
          <Instagram size={14} />
          @letareinvitation
          <ExternalLink size={11} className="opacity-70" />
        </GoldButton>

        {/* Tagline */}
        <p className="text-[11px] text-[#b8a07a] font-serif italic leading-relaxed max-w-[220px]">
          "Crafting timeless digital invitations for your special moments"
        </p>

        {/* Copyright */}
        <p className="text-[9px] text-[#c8b08a]/60 font-serif tracking-widest uppercase mt-6">
          © 2026 Letare Invitation · All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
}
