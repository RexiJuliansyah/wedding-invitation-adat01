/**
 * SectionFrame Component
 * Consolidates the standard corner and bottom ornaments used across sections.
 * 
 * Props:
 *   showTop (bool) - Shows Top-Left/Top-Right ornaments
 *   showBottom (bool) - Shows Bottom-Left/Bottom-Right ornaments
 *   showBottomCenter (bool) - Shows Bottom-Center ornament
 *   isFirstSection (bool) - If true, doesn't use lazy loading for top ornaments
 */
export default function SectionFrame({ 
  showTop = true, 
  showBottom = true, 
  showBottomCenter = true,
  isFirstSection = false 
}) {
  const loading = isFirstSection ? "eager" : "lazy";

  return (
    <>
      {showTop && (
        <>
          <img 
            src="/assets/Adat-Aceh-Ornamen-Kiri-Atas.png" 
            alt="" 
            className="absolute top-0 left-0 w-32 md:w-36 opacity-90 z-10 pointer-events-none" 
            loading={loading} 
          />
          <img 
            src="/assets/Adat-Aceh-Ornamen-Kiri-Atas.png" 
            alt="" 
            className="absolute top-0 right-0 w-32 md:w-36 opacity-90 z-10 -scale-x-100 pointer-events-none" 
            loading={loading} 
          />
        </>
      )}

      {showBottom && (
        <>
          <img 
            src="/assets/Adat-Aceh-Ornamen-Kiri-Bawah.png" 
            alt="" 
            className="absolute bottom-0 left-0 w-32 md:w-36 opacity-90 z-10 pointer-events-none" 
            loading="lazy" 
          />
          <img 
            src="/assets/Adat-Aceh-Ornamen-Kiri-Bawah.png" 
            alt="" 
            className="absolute bottom-0 right-0 w-32 md:w-36 opacity-90 z-10 -scale-x-100 pointer-events-none" 
            loading="lazy" 
          />
        </>
      )}

      {showBottomCenter && (
        <img 
          src="/assets/Adat-Aceh-Ornamen-Bawah-Tengah.png" 
          alt="" 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[240px] z-30 drop-shadow-xs pointer-events-none" 
          loading="lazy" 
        />
      )}
    </>
  );
}
