import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/assets/Adat-Aceh-foto-1.jpg',
  '/assets/Adat-Aceh-foto-cwe.jpg',
  '/assets/Adat-Aceh-foto-cwo.jpg',
  '/assets/Adat-Aceh-foto-1.jpg',
  '/assets/Adat-Aceh-foto-cwo.jpg',
  '/assets/Adat-Aceh-foto-cwe.jpg',
];

export default function GallerySection() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const prev = (e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % images.length); };

  return (
    <section className="pt-10 pb-56 text-center relative z-10 w-full max-w-[500px] mx-auto bg-transparent">

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} viewport={{ once: true }}
        className="mb-8 px-4"
      >
        <h2 className="title-script text-5xl text-[#B8860B] drop-shadow-sm mb-2">Our Moment</h2>
        <p className="text-[12px] text-[#9a7b4f] font-serif">Klik foto untuk memperbesar</p>
      </motion.div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 gap-1.5 mb-6 w-full px-1">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="w-full aspect-[4/5] overflow-hidden bg-gray-200 rounded-xl cursor-pointer relative group shadow-md"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            onClick={() => setLightboxIdx(i)}
          >
            <img
              src={src}
              alt={`Foto ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {/* gold overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#B8860B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            {/* border glow */}
            <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-[#D4AF37]/60 transition-all duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Video Highlights Placeholder (replaces Rick Roll) */}
      <motion.div
        className="mx-1 mb-8 rounded-2xl overflow-hidden shadow-[0_8px_20px_-5px_rgba(0,0,0,0.4)] border-[3px] border-[#D4AF37]/40 relative"
        style={{ aspectRatio: '16/9' }}
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }} viewport={{ once: true }}
      >
        <div
          className="w-full h-full flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #2a1d0a 0%, #4a3010 50%, #2a1d0a 100%)',
          }}
        >
          <img src="/assets/Adat-Aceh-Ornamen-Tengah.png" alt="" className="w-14 mb-3 opacity-70" />
          <p className="title-script text-3xl text-[#D4AF37] mb-1">Video Highlights</p>
          <p className="text-[11px] text-[#9a7b4f] font-serif tracking-widest uppercase">Coming Soon</p>
          <div className="flex gap-1 mt-3">
            {[0,1,2].map(i => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Ornaments */}
      <img src="/assets/Adat-Aceh-Ornamen-Bawah-Tengah.png" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[240px] z-30 drop-shadow-xs" />
      <img src="/assets/Adat-Aceh-Ornamen-Kiri-Bawah.png" alt="" className="absolute bottom-0 left-0  w-32 md:w-36 opacity-90 z-10" />
      <img src="/assets/Adat-Aceh-Ornamen-Kiri-Bawah.png" alt="" className="absolute bottom-0 right-0 w-32 md:w-36 opacity-90 z-10 -scale-x-100" />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.92)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-5 right-5 text-white/80 hover:text-[#D4AF37] transition-colors z-10"
            >
              <X size={30} />
            </button>

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-3 text-white/70 hover:text-[#D4AF37] transition-colors z-10 bg-black/30 rounded-full p-2"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIdx}
              src={images[lightboxIdx]}
              alt=""
              className="max-h-[80vh] max-w-[88vw] object-contain rounded-2xl shadow-2xl border-2 border-[#D4AF37]/30"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-3 text-white/70 hover:text-[#D4AF37] transition-colors z-10 bg-black/30 rounded-full p-2"
            >
              <ChevronRight size={32} />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-6 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIdx(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === lightboxIdx ? 'bg-[#D4AF37] scale-125' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
