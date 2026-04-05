import { motion } from 'framer-motion';
import SectionFrame from './SectionFrame';

const people = [
  {
    name: 'Riska Kirana',
    role: 'Putri Pertama dari',
    parents: 'Bpk. & Ibu',
    photo: '/assets/Adat-Aceh-foto-cwe.jpg',
    side: 'bride',
  },
  {
    name: 'Ilham Basyrul',
    role: 'Putra Pertama dari',
    parents: 'Bpk. & Ibu',
    photo: '/assets/Adat-Aceh-foto-cwo.jpg',
    side: 'groom',
  },
];

export default function CoupleSection() {

  return (
    <section className="pt-20 pb-44 text-center relative z-10 w-full max-w-[500px] mx-auto overflow-hidden">

      {/* Corner Ornaments */}
      <SectionFrame showBottomCenter={false} />

      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-8 relative z-20 mb-10"
      >
        <h2 className="title-serif text-2xl text-[#B8860B] mb-3">Assalamu'alaikum Wr. Wb.</h2>
        <p className="text-gray-700 text-sm max-w-[300px] mx-auto leading-relaxed">
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami
        </p>
      </motion.div>

      {/* Side-by-side Couple Photos */}
      <motion.div
        className="relative z-20 flex items-start justify-center gap-3 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Bride */}
        <div className="flex flex-col items-center flex-1">
          <div className="relative w-[148px] h-[210px] flex items-center justify-center mb-3">
            <img
              src={people[0].photo}
              alt={people[0].name}
              className="absolute z-0"
              style={{
                width: '90%', height: '90%', objectFit: 'cover',
                maskImage: "url('/assets/Adat-Aceh-Mask-2-1.png')",
                WebkitMaskImage: "url('/assets/Adat-Aceh-Mask-2-1.png')",
                maskSize: 'contain', WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center', WebkitMaskPosition: 'center',
              }}
            />
            <img
              src="/assets/Adat-Aceh-Frame-2-1.png"
              alt="Frame"
              className="absolute w-[115%] h-[115%] object-contain pointer-events-none drop-shadow-md z-10"
              loading="lazy"
            />
          </div>
          <h2 className="title-script text-[2rem] leading-none text-[#B8860B] mb-1 drop-shadow-sm">Riska Kirana</h2>
          <p className="text-[12px] text-[#9a7b4f] font-serif leading-snug">
            Putri Pertama dari<br /><span className="font-semibold text-[#B8860B]">Bpk. &amp; Ibu</span>
          </p>
        </div>

        {/* Ampersand separator */}
        <motion.div
          className="flex flex-col items-center justify-center pt-16 shrink-0"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <img src="/assets/Adat-Aceh-Ornamen-Tengah.png" alt="" className="w-8 mb-1 opacity-70" loading="lazy" />
          <span className="title-script text-4xl text-[#B8860B]">&amp;</span>
        </motion.div>

        {/* Groom */}
        <div className="flex flex-col items-center flex-1">
          <div className="relative w-[148px] h-[210px] flex items-center justify-center mb-3">
            <img
              src={people[1].photo}
              alt={people[1].name}
              className="absolute z-0"
              style={{
                width: '90%', height: '90%', objectFit: 'cover',
                maskImage: "url('/assets/Adat-Aceh-Mask-2-1.png')",
                WebkitMaskImage: "url('/assets/Adat-Aceh-Mask-2-1.png')",
                maskSize: 'contain', WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center', WebkitMaskPosition: 'center',
              }}
            />
            <img
              src="/assets/Adat-Aceh-Frame-2-1.png"
              alt="Frame"
              className="absolute w-[115%] h-[115%] object-contain pointer-events-none drop-shadow-md z-10"
              loading="lazy"
            />
          </div>
          <h2 className="title-script text-[2rem] leading-none text-[#B8860B] mb-1 drop-shadow-sm">Ilham Basyrul</h2>
          <p className="text-[12px] text-[#9a7b4f] font-serif leading-snug">
            Putra Pertama dari<br /><span className="font-semibold text-[#B8860B]">Bpk. &amp; Ibu</span>
          </p>
        </div>
      </motion.div>

      {/* Bottom Ornament */}
      <SectionFrame showTop={false} showBottom={false} showBottomCenter={true} />
    </section>
  );
}
