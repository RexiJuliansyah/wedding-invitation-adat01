import { motion } from 'framer-motion';

export default function StorySection() {
  const stories = [
    {
      title: "Awal Bertemu",
      text: "Kisah ini berawal dari pertemuan kita\ndi bulan mei tahun 2020.",
      img: "/assets/Adat-Aceh-foto-1.jpg",
      align: "left"
    },
    {
      title: "Jadian",
      text: "Setelah menjalani hubungan selama 3\ntahun, kita berkomitmen untuk masa\ndepan hubungan kita.",
      img: "/assets/Adat-Aceh-foto-cwo.jpg",
      align: "right"
    },
    {
      title: "Lamaran",
      text: "Nanda memberanikan diri membawa\nkeluarganya bersilaturahmi ke rumah\nku, dan meminta ku untuk menikah\ndengannya.",
      img: "/assets/Adat-Aceh-foto-cwe.jpg",
      align: "left"
    }
  ];

  return (
    <section className="pt-20 pb-10 px-6 relative z-10 w-full max-w-[500px] mx-auto overflow-hidden bg-transparent">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="title-script text-5xl text-[#B8860B] drop-shadow-sm">Love Story</h2>
      </motion.div>

      <div className="flex flex-col gap-14 w-full max-w-[400px] mx-auto relative z-20">
        {stories.map((story, index) => {
          const isLeft = story.align === "left";
          return (
            <motion.div
              key={index}
              className={`flex items-center gap-5 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {isLeft ? (
                <>
                  <div className="flex-1 text-right">
                    <h3 className="font-serif font-bold text-gray-800 text-[15px] mb-1">{story.title}</h3>
                    <p className="text-gray-700 text-[11px] leading-relaxed whitespace-pre-line">{story.text}</p>
                  </div>
                  <div className="w-[110px] h-[110px] shrink-0 rounded-full overflow-hidden shadow-[0_8px_15px_-3px_rgba(0,0,0,0.3)] border-[3px] border-white/60">
                    <img src={story.img} alt={story.title} className="w-full h-full object-cover" />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[110px] h-[110px] shrink-0 rounded-full overflow-hidden shadow-[0_8px_15px_-3px_rgba(0,0,0,0.3)] border-[3px] border-white/60">
                    <img src={story.img} alt={story.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-serif font-bold text-gray-800 text-[15px] mb-1">{story.title}</h3>
                    <p className="text-gray-700 text-[11px] leading-relaxed whitespace-pre-line">{story.text}</p>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Centered Ornament separating Story and Gallery visually */}
      <div className="w-full flex justify-center mt-24 relative z-20">
        {/* Top Separator Ornament */}
        <div className="flex items-center justify-center gap-3 mb-10 w-full max-w-[340px]">
          <div className="flex-1 h-[1px] bg-[#B8860B]/50"></div>
          <img src="/assets/Adat-Aceh-Ornamen-Tengah.png" alt="Ornamen" className="w-10 opacity-80" />
          <div className="flex-1 h-[1px] bg-[#B8860B]/50"></div>
        </div>
      </div>

    </section>
  );
}
