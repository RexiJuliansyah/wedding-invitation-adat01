export default function SectionDivider({ shadow = 'none' }) {
  let shadowClass = '';
  // Konfigurasi shadow khusus yang elegan & presisi untuk UI
  if (shadow === 'top') {
    shadowClass = 'shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.15)] z-20';
  } else if (shadow === 'bottom') {
    shadowClass = 'shadow-[0_10px_15px_-3px_rgba(0,0,0,0.15)] z-20';
  } else if (shadow === 'both') {
    shadowClass = 'shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.15),0_10px_15px_-3px_rgba(0,0,0,0.15)] z-20';
  } else {
    shadowClass = 'z-10'; // default z-index
  }

  return (
    <div className={`relative w-full h-[50px] md:h-[60px] pointer-events-none bg-batik ${shadowClass}`}>
      {/* Pattern Layer dengan mix blend */}
      <div
        className="absolute inset-0 w-full h-full opacity-80 mix-blend-multiply"
        style={{
          backgroundImage: "url('/assets/Adat-Aceh-Ornamen-Divider.png')",
          backgroundSize: "auto 100%",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center"
        }}
      />
    </div>
  );
}
