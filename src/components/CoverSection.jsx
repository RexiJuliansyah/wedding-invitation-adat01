import { motion } from 'framer-motion';
import { MailOpen } from 'lucide-react';
import GoldButton from './GoldButton';

export default function CoverSection({ onOpen }) {
  // Ambil nama tamu dari URL (contoh: ?to=Nama+Tamu)
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('to') || 'Nama Tamu';

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-batik bg-fixed overflow-hidden w-full max-w-[500px] mx-auto min-h-[100vh]"
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%', transition: { duration: 1, ease: "easeInOut" } }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Frame Ornaments */}
      <img src="/assets/Adat-Aceh-Ornamen-Kiri-Atas.png" alt="Ornamen" className="absolute top-0 left-0 w-32 md:w-40 opacity-90 z-10" />
      <img src="/assets/Adat-Aceh-Ornamen-Kiri-Atas.png" alt="Ornamen" className="absolute top-0 right-0 w-32 md:w-40 opacity-90 z-10 transform -scale-x-100" />

      <img src="/assets/Adat-Aceh-Ornamen-Bawah-pendek.jpg" alt="Ornamen Bawah" className="absolute bottom-0 left-0 w-full h-24 object-cover opacity-90 z-10 mix-blend-multiply hidden" />

      {/* Assuming Adat-Aceh-Ornamen-Kiri-Bawah exists, we place it */}
      <img src="/assets/Adat-Aceh-Ornamen-Kiri-Bawah.png" alt="Ornamen" className="absolute -bottom-2 left-0 w-40 opacity-90 z-10" />
      <img src="/assets/Adat-Aceh-Ornamen-Kiri-Bawah.png" alt="Ornamen" className="absolute -bottom-2 right-0 w-40 opacity-90 z-10 transform -scale-x-100" />
      <img src="/assets/Adat-Aceh-Ornamen-Bawah-Tengah.png" alt="Ornamen" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[240px] z-30 drop-shadow-xs" />
      {/* Main Content inside Cover */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center w-full px-6"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Top Logo / Crest */}
        <div className="flex flex-col items-center mb-6">
          <img src="/assets/Adat-Aceh-Ornamen-Tengah.png" alt="Flower Ornament" className="w-12 mb-2" />
          <img src="/assets/Adat-Aceh-Pinto-Aceh-1.png" alt="Crest Pintu Aceh" className="w-32 drop-shadow-md" />
        </div>

        <p className="font-serif tracking-widest text-[16px] text-[#B8860B] mb-2 uppercase">The Wedding Of</p>
        <h1 className="font-script text-6xl text-[#B8860B] mb-8 leading-tight drop-shadow-sm">Ilham & Riska</h1>

        <div className="w-full max-w-[280px] mb-8">
          <p className="text-[#B8860B] font-serif text-[15px] mb-3">Kepada</p>

          <div className="border-[2px] border-dashed border-[#B8860B] rounded-lg py-3 px-4 mb-4 bg-white/30 backdrop-blur-sm">
            <h2 className="font-serif font-medium text-[18px] text-[#B8860B]">{guestName}</h2>
          </div>

          <p className="text-[11px] text-[#9A7B4F] mb-6 font-medium px-2 leading-relaxed">
            Mohon maaf apabila ada kesalahan penulisan nama/gelar
          </p>

          <GoldButton onClick={onOpen} className="w-full max-w-[220px] mx-auto">
            <MailOpen size={17} />
            <span>Buka Undangan</span>
          </GoldButton>
        </div>
      </motion.div>
    </motion.div>
  )
}
