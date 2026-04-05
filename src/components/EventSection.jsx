import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Clock } from 'lucide-react';
import GoldButton from './GoldButton';

const countdownUnits = [
  { key: 'days',    label: 'Hari'   },
  { key: 'hours',   label: 'Jam'    },
  { key: 'minutes', label: 'Menit'  },
  { key: 'seconds', label: 'Detik'  },
];

const events = [
  {
    title: 'Akad Nikah',
    day: 'SABTU', date: '20', month: 'FEBRUARI 2027',
    time: 'Pukul 08.00 WIB',
    icon: CalendarDays,
  },
  {
    title: 'Resepsi',
    day: 'SABTU', date: '20', month: 'FEBRUARI 2027',
    time: 'Pukul 10.00 – Selesai',
    icon: Clock,
  },
];

export default function EventSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('Feb 20, 2027 08:00:00').getTime();
    const tick = () => {
      const d = target - Date.now();
      if (d < 0) return;
      setTimeLeft({
        days:    Math.floor(d / 86400000),
        hours:   Math.floor((d % 86400000) / 3600000),
        minutes: Math.floor((d % 3600000)  / 60000),
        seconds: Math.floor((d % 60000)    / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="pt-20 pb-28 px-4 relative z-10 w-full max-w-[500px] mx-auto overflow-hidden bg-transparent">

      {/* Top Ornaments */}
      <img src="/assets/Adat-Aceh-Ornamen-Kiri-Atas.png" alt="" className="absolute top-0 left-0  w-32 md:w-36 opacity-90 z-10" />
      <img src="/assets/Adat-Aceh-Ornamen-Kiri-Atas.png" alt="" className="absolute top-0 right-0 w-32 md:w-36 opacity-90 z-10 -scale-x-100" />

      <motion.div
        className="flex flex-col items-center relative z-20 w-full mb-8"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} viewport={{ once: true }}
      >
        <h2 className="title-script text-5xl text-[#B8860B] drop-shadow-sm mb-1">Detail Acara</h2>
        <img src="/assets/Adat-Aceh-Ornamen-Tengah.png" alt="" className="w-10 opacity-70 mt-2" />
      </motion.div>

      <div className="w-full flex flex-col items-center space-y-5 relative z-20">
        {events.map(({ title, day, date, month, time, icon: Icon }, i) => (
          <motion.div
            key={title}
            className="w-full rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }} viewport={{ once: true }}
          >
            {/* Gold top accent bar */}
            <div className="h-[3px] bg-gradient-to-r from-transparent via-[#B8860B] to-transparent" />
            <div
              className="p-6 text-center"
              style={{
                background: 'linear-gradient(160deg, rgba(255,255,255,0.85) 0%, rgba(253,245,220,0.9) 100%)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(184,134,11,0.25)',
                borderTop: 'none',
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Icon size={16} className="text-[#B8860B]" />
                <h3 className="title-script text-3xl text-[#7a5200] drop-shadow-sm">{title}</h3>
              </div>

              {/* Date display */}
              <div className="flex items-baseline justify-center gap-3 mb-3">
                <div className="text-right">
                  <p className="text-[11px] font-bold text-gray-500 tracking-widest">{day}</p>
                </div>
                <p className="text-7xl font-light text-[#C19B4C] leading-none font-serif" style={{ textShadow: '0 2px 8px rgba(193,155,76,0.3)' }}>{date}</p>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-gray-500 tracking-widest">{month}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2 max-w-[200px] mx-auto mb-3">
                <div className="flex-1 h-px bg-[#B8860B]/30" />
                <div className="w-1 h-1 rounded-full bg-[#B8860B]/50" />
                <div className="flex-1 h-px bg-[#B8860B]/30" />
              </div>

              <p className="text-[13px] font-serif italic text-gray-600">{time}</p>
            </div>
          </motion.div>
        ))}

        {/* Location */}
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}
        >
          <p className="text-[13px] font-serif text-[#7a5200] font-medium mb-4">Jl. Margo Basuki, Sukabumi</p>
          <GoldButton
            as="a"
            href="https://maps.google.com/?q=Sukabumi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={15} className="shrink-0" />
            Lihat Lokasi Acara
          </GoldButton>
        </motion.div>
      </div>

      {/* Bottom Ornaments */}
      <img src="/assets/Adat-Aceh-Ornamen-Kiri-Bawah.png"   alt="" className="absolute bottom-0 left-0  w-32 md:w-36 opacity-90 z-10" />
      <img src="/assets/Adat-Aceh-Ornamen-Kiri-Bawah.png"   alt="" className="absolute bottom-0 right-0 w-32 md:w-36 opacity-90 z-10 -scale-x-100" />
      <img src="/assets/Adat-Aceh-Ornamen-Bawah-Tengah.png" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[240px] z-30 drop-shadow-xs" />
    </section>
  );
}
