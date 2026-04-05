import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import useCountdown from '../hooks/useCountdown';
import GoldButton from './GoldButton';
import SectionFrame from './SectionFrame';

const countdownUnits = [
  { key: 'days', label: 'Hari' },
  { key: 'hours', label: 'Jam' },
  { key: 'minutes', label: 'Menit' },
  { key: 'seconds', label: 'Detik' },
];

export default function HeroSection() {
  const timeLeft = useCountdown('Feb 20, 2027 08:00:00');

  const handleSaveDate = () => {
    const googleCalUrl =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=The+Wedding+of+Ilham+%26+Riska` +
      `&dates=20270220T010000Z/20270220T060000Z` +
      `&details=Pernikahan+Ilham+%26+Riska` +
      `&location=Jl.+Margo+Basuki`;
    window.open(googleCalUrl, '_blank');
  };

  return (
    <section className="relative flex flex-col items-center justify-center pt-16 pb-28 px-4 overflow-hidden w-full max-w-[500px] mx-auto min-h-[100vh]">

      {/* Frame Ornaments */}
      <SectionFrame isFirstSection={true} />

      {/* Main Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center w-full"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Text Group */}
        <div className="mt-2 mb-6">
          <p className="font-serif tracking-widest text-[14px] text-[#B8860B] mb-1 uppercase">The Wedding Of</p>
          <h1 className="font-script text-[3.8rem] text-[#B8860B] mb-3 leading-none drop-shadow-sm">Ilham &amp; Riska</h1>
          <p className="font-serif font-medium text-[15px] text-[#B8860B]">Sabtu, 20 Februari 2027</p>
        </div>

        {/* Photo in Frame */}
        <div className="relative w-[300px] h-[340px] flex items-center justify-center mb-6">
          <img
            src="/assets/Adat-Aceh-foto-1.jpg"
            alt="Hero Pasangan"
            className="absolute z-0"
            style={{
              width: '75%', height: '75%', objectFit: 'cover',
              WebkitMaskImage: "url('/assets/Adat-Aceh-Frame-1-a-mask-1.png')",
              WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center',
              maskImage: "url('/assets/Adat-Aceh-Frame-1-a-mask-1.png')",
              maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center',
            }}
          />
          <img
            src="/assets/Adat-Aceh-Frame-1-a-1.png"
            alt="Frame Emas"
            className="absolute w-full h-full object-contain pointer-events-none drop-shadow-lg z-10"
          />
        </div>

        {/* Save The Date + Countdown */}
        <motion.div
          className="flex flex-col items-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Ornamen line + title */}
          <div className="flex items-center gap-3 w-full max-w-[280px] mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#B8860B]/60" />
            <h2 className="title-script text-2xl text-[#B8860B] drop-shadow-sm whitespace-nowrap">Save The Date</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#B8860B]/60" />
          </div>

          {/* Countdown — premium gradient boxes */}
          <div className="flex justify-center gap-2.5 mb-6 w-full px-2">
            {countdownUnits.map(({ key, label }) => (
              <div
                key={key}
                className="flex flex-col items-center justify-center rounded-2xl w-[68px] h-[68px] shadow-[0_4px_16px_rgba(184,134,11,0.25)]"
                style={{
                  background: 'linear-gradient(145deg, #f9f3e3 0%, #ede0c0 50%, #f7eed8 100%)',
                  border: '1.5px solid rgba(184,134,11,0.5)',
                }}
              >
                <span className="block font-serif text-2xl font-bold leading-none text-[#7a5200]">
                  {String(timeLeft[key]).padStart(2, '0')}
                </span>
                <span className="block text-[9px] text-[#9a7b4f] font-serif font-semibold tracking-wider uppercase mt-0.5">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Simpan Tanggal button with shimmer */}
          <GoldButton onClick={handleSaveDate}>
            <CalendarDays size={16} />
            Simpan Tanggal
          </GoldButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
