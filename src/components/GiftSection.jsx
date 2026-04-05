import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Gift, Copy, CheckCircle2 } from 'lucide-react';
import GoldButton from './GoldButton';

export default function GiftSection() {
  const [copiedId, setCopiedId] = useState(null);
  const [showAmplop, setShowAmplop] = useState(false);
  const [showKado, setShowKado] = useState(false);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Reusable in-card copy button (white variant)
  const CopyButton = ({ id, text, label }) => (
    <GoldButton
      variant="white"
      onClick={() => handleCopy(text, id)}
      className="mx-auto"
    >
      {copiedId === id
        ? <><CheckCircle2 size={14} className="text-green-600" /> Tersalin</>
        : <><Copy size={14} /> {label}</>
      }
    </GoldButton>
  );

  return (
    <section className="pt-20 pb-32 px-4 text-center relative z-10 w-full max-w-[500px] mx-auto bg-transparent">

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="title-script text-5xl text-[#B8860B] drop-shadow-sm mb-4">Wedding Gift</h2>
        <p className="text-gray-800 text-[13px] font-serif max-w-[320px] mx-auto leading-relaxed">
          Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-4 w-full max-w-[340px] mx-auto">

        {/* Button Amplop Online */}
        <GoldButton onClick={() => setShowAmplop(!showAmplop)} className="w-[200px]">
          <Mail size={18} /> Amplop Online
        </GoldButton>

        {/* Expandable Amplop Content */}
        <AnimatePresence>
          {showAmplop && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full overflow-hidden flex flex-col gap-4 mt-2 mb-2"
            >
              {/* Card BRI */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#6b471c] to-[#120b03] p-6 text-center border border-white/10">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 10%, transparent 10.01%)', backgroundSize: '10px 10px' }} />
                <h3 className="absolute top-4 right-5 text-white font-bold text-2xl italic tracking-wider">BRI</h3>
                <div className="w-12 h-9 rounded bg-gradient-to-br from-[#d4af37] to-[#8a6a1c] p-1 flex items-center justify-center absolute left-6 top-1/2 -translate-y-1/2 opacity-90 shadow-inner">
                  <div className="w-full h-full border border-black/20 rounded-sm" />
                </div>
                <div className="mt-8 mb-4 relative z-10">
                  <p className="text-white text-xl tracking-[0.2em] font-serif mb-4">0000 0000 000</p>
                  <CopyButton id="bri" text="00000000000" label="Salin No. Rekening" />
                </div>
                <p className="text-white font-bold text-sm tracking-wide relative z-10">A/n Nama Mempelai</p>
              </div>

              {/* Card BCA */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#6b471c] to-[#120b03] p-6 text-center border border-white/10">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 10%, transparent 10.01%)', backgroundSize: '10px 10px' }} />
                <h3 className="absolute top-4 right-5 text-white font-bold text-2xl italic tracking-wider">BCA</h3>
                <div className="w-12 h-9 rounded bg-gradient-to-br from-[#d4af37] to-[#8a6a1c] p-1 flex items-center justify-center absolute left-6 top-1/2 -translate-y-1/2 opacity-90 shadow-inner">
                  <div className="w-full h-full border border-black/20 rounded-sm" />
                </div>
                <div className="mt-8 mb-4 relative z-10">
                  <p className="text-white text-xl tracking-[0.2em] font-serif mb-4">0000 0000 000</p>
                  <CopyButton id="bca" text="00000000000" label="Salin No. Rekening" />
                </div>
                <p className="text-white font-bold text-sm tracking-wide relative z-10">A/n Nama Mempelai</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button Kirim Kado */}
        <GoldButton onClick={() => setShowKado(!showKado)} className="w-[200px]">
          <Gift size={18} /> Kirim Kado
        </GoldButton>

        {/* Expandable Kado Content */}
        <AnimatePresence>
          {showKado && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full overflow-hidden mt-2"
            >
              <div className="w-full bg-[#967434] border-2 border-dashed border-white rounded-2xl p-6 text-center text-white shadow-xl relative">
                <p className="text-xs font-medium mb-1">Kediaman Mempelai Wanita</p>
                <p className="text-[13px] leading-relaxed mb-6">Jl. Sudimoro No. 5 Kota pelabuhan Ratu</p>
                <CopyButton id="alamat" text="Jl. Sudimoro No. 5 Kota pelabuhan Ratu" label="Salin Alamat Kirim Kado" />
                <p className="font-bold text-sm tracking-wide mt-5">A/n Nama Mempelai</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Separator Ornament */}
        <div className="flex items-center justify-center gap-3 mt-6 w-full max-w-[340px]">
          <div className="flex-1 h-[1px] bg-[#B8860B]/50" />
          <img src="/assets/Adat-Aceh-Ornamen-Tengah.png" alt="" className="w-10 opacity-80" loading="lazy" />
          <div className="flex-1 h-[1px] bg-[#B8860B]/50" />
        </div>
      </div>
    </section>
  );
}
