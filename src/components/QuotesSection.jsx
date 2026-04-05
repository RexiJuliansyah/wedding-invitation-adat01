import { motion } from 'framer-motion';

export default function QuotesSection() {
  return (
    <section className="relative py-20 px-4 flex justify-center items-center overflow-hidden w-full max-w-[500px] mx-auto bg-transparent">
      <motion.div
        className="relative z-10 max-w-[340px] w-full text-center rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.13)]"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} viewport={{ once: true }}
      >
        {/* Gold top accent */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-[#B8860B] to-transparent" />

        <div
          style={{
            background: 'linear-gradient(160deg, #fff 0%, #fdf5e0 60%, #fff 100%)',
            border: '1.5px solid rgba(184,134,11,0.25)',
            borderTop: 'none',
          }}
          className="p-8"
        >
          {/* Corner ornament top-left */}
          <img src="/assets/Adat-Aceh-Ornamen-Tengah.png" alt="" className="w-10 mx-auto mb-4 opacity-60" />

          {/* Arabic text */}
          <p
            className="text-xl text-gray-800 mb-5 leading-[2.4] font-semibold"
            style={{ fontFamily: "'Amiri', 'Times New Roman', serif", direction: 'rtl' }}
          >
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً
          </p>

          {/* Gold divider */}
          <div className="flex items-center gap-2 max-w-[180px] mx-auto mb-5">
            <div className="flex-1 h-px bg-[#B8860B]/40" />
            <div className="w-1 h-1 rounded-full bg-[#B8860B]/60" />
            <div className="flex-1 h-px bg-[#B8860B]/40" />
          </div>

          <p className="text-gray-600 text-[13px] font-serif leading-relaxed mb-5">
            Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.
          </p>

          <p className="font-serif font-bold text-[#B8860B] text-[14px] tracking-wide">Q.S. Ar-Rum : 21</p>

          {/* Bottom ornament */}
          <img src="/assets/Adat-Aceh-Ornamen-Tengah.png" alt="" className="w-8 mx-auto mt-5 opacity-50" />
        </div>

        {/* Gold bottom accent */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#B8860B]/60 to-transparent" />
      </motion.div>
    </section>
  );
}
