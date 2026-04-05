import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import SectionFrame from './SectionFrame';
import GoldButton from './GoldButton';

export default function RSVPSection() {
  const [loading, setLoading]   = useState(false);
  const [success, setSuccess]   = useState(false);
  const [submitted, setSubmitted] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name     = formData.get('name');
    const message  = formData.get('message');
    const attend   = formData.get('attend');

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setSubmitted(prev => [{ name, message, attend, time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) }, ...prev]);
      setTimeout(() => setSuccess(false), 3000);
      e.target.reset();
    }, 1500);
  };

  const stats = {
    hadir:       submitted.filter(s => s.attend === 'Hadir').length,
    tidakHadir:  submitted.filter(s => s.attend === 'Tidak Hadir').length,
    masihRagu:   submitted.filter(s => s.attend === 'Masih Ragu').length,
  };

  return (
    <section className="pt-20 pb-48 px-4 relative z-10 w-full max-w-[500px] mx-auto overflow-hidden text-center bg-transparent">

      {/* Top Corner Ornaments */}
      <SectionFrame showBottom={false} showBottomCenter={false} />

      <div className="relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="title-script text-5xl text-[#B8860B] drop-shadow-sm">Ucapan &amp; Do'a</h2>
          <p className="text-[12px] text-[#9a7b4f] font-serif mt-2">Sampaikan doa terbaik Anda untuk kami</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-3 mb-6 max-w-[340px] mx-auto"
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
        >
          {[
            { label: 'Hadir',       count: stats.hadir,      emoji: '✅' },
            { label: 'Tidak Hadir', count: stats.tidakHadir, emoji: '❌' },
            { label: 'Masih Ragu',  count: stats.masihRagu,  emoji: '🤔' },
          ].map(({ label, count, emoji }) => (
            <div
              key={label}
              className="rounded-2xl py-3 px-1 flex flex-col items-center shadow-[0_4px_16px_rgba(184,134,11,0.2)]"
              style={{
                background: 'linear-gradient(145deg, #7a5200 0%, #B8860B 50%, #7a5200 100%)',
                border: '1.5px solid rgba(212,175,55,0.4)',
              }}
            >
              <span className="text-2xl mb-0.5">{emoji}</span>
              <span className="text-xl font-bold font-serif text-white leading-none">{count}</span>
              <span className="text-[9px] font-bold mt-1 text-white/80 tracking-wide whitespace-nowrap">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="max-w-[360px] mx-auto rounded-2xl p-5 mb-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          style={{
            background: 'linear-gradient(160deg, #fdf8ee 0%, #f3e8cc 100%)',
            border: '1.5px solid rgba(184,134,11,0.3)',
          }}
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }}
        >
          {/* Gold top accent */}
          <div className="h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mb-4" />

          <form onSubmit={handleSubmit} className="space-y-3 text-left">
            <input
              name="name"
              type="text"
              placeholder="Nama Anda"
              required
              className="w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-all duration-200 font-serif"
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1.5px solid rgba(184,134,11,0.3)',
                color: '#3d2b10',
              }}
              onFocus={(e) => e.target.style.borderColor = '#B8860B'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(184,134,11,0.3)'}
            />
            <textarea
              name="message"
              rows="3"
              placeholder="Tulis ucapan & doa Anda..."
              required
              className="w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-all duration-200 font-serif resize-none"
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1.5px solid rgba(184,134,11,0.3)',
                color: '#3d2b10',
              }}
              onFocus={(e) => e.target.style.borderColor = '#B8860B'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(184,134,11,0.3)'}
            />
            <select
              name="attend"
              required
              defaultValue=""
              className="w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-all duration-200 font-serif"
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1.5px solid rgba(184,134,11,0.3)',
                color: '#6b4e23',
              }}
            >
              <option value="" disabled>Konfirmasi Kehadiran</option>
              <option value="Hadir">✅ Hadir</option>
              <option value="Tidak Hadir">❌ Tidak Hadir</option>
              <option value="Masih Ragu">🤔 Masih Ragu</option>
            </select>

            <GoldButton
              type="submit"
              disabled={loading || success}
              className={`w-full ${success ? '!bg-none' : ''}`}
              style={success ? { background: '#16a34a' } : {}}
            >
              {loading ? '...' : success ? '✓ Terkirim!' : 'Kirim Ucapan'}
            </GoldButton>
          </form>
        </motion.div>

        {/* Wish Feed */}
        {submitted.length > 0 && (
          <motion.div
            className="space-y-3 max-w-[360px] mx-auto mb-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            <p className="text-[11px] text-[#9a7b4f] font-serif font-semibold tracking-wide uppercase">Ucapan Tamu</p>
            {submitted.map((s, i) => (
              <div
                key={i}
                className="text-left p-4 rounded-2xl shadow-sm"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(184,134,11,0.2)',
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-serif font-bold text-[#7a5200] text-sm">{s.name}</span>
                  <span className="text-[10px] text-[#9a7b4f] font-serif">{s.time}</span>
                </div>
                <p className="text-[12px] text-gray-700 leading-relaxed font-serif mb-1">{s.message}</p>
                <span className="text-[10px] text-[#9a7b4f] font-serif">{s.attend}</span>
              </div>
            ))}
          </motion.div>
        )}

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 max-w-[300px] mx-auto mb-5">
            <div className="flex-1 h-px bg-[#B8860B]/30" />
            <Heart size={14} className="text-[#B8860B]" fill="#B8860B" />
            <div className="flex-1 h-px bg-[#B8860B]/30" />
          </div>
          <p className="font-serif text-[#a68641] text-[12px] max-w-[300px] mx-auto leading-relaxed mb-4 px-2">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </p>
          <h2 className="font-serif font-bold tracking-wide text-lg text-[#a68641] mb-4">Wassalamu'alaikum Wr. Wb.</h2>
          <p className="text-[11px] font-bold text-[#a68641] mb-2">Kami yang berbahagia</p>
          <h1 className="title-script text-5xl text-[#B8860B] drop-shadow-sm">Ilham &amp; Riska</h1>
        </motion.div>
      </div>

      {/* Bottom Corner Ornaments */}
      <SectionFrame showTop={false} />
    </section>
  );
}
