export function EducationalSection() {
  return (
    <section className="flex flex-col w-full">
      {/* Top Part: Dark Background */}
      <div className="bg-onyx text-silver-metal px-6 py-24 sm:py-32 flex flex-col items-center text-center">
        <h2 className="max-w-5xl font-serif text-[2.5rem] leading-[1.1] font-normal tracking-tight sm:text-6xl lg:text-7xl text-white">
          Tátil: Transformando o toque em possibilidades e a inclusão em realidade.
        </h2>
        
        <figure className="mt-16 mb-12 relative w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <img 
            src="/braille-tech.jpg" 
            alt="Pessoa com deficiência visual utilizando um dispositivo Braille moderno" 
            className="w-full aspect-[16/9] object-cover hover:scale-105 transition-transform duration-700"
          />
        </figure>
        
        <p className="eyebrow text-silver/80 tracking-[0.4em] uppercase text-sm font-medium">
          No coração da educação.
        </p>
      </div>

      {/* Bottom Part: Image Background with Glassmorphism Text */}
      <div className="relative min-h-[70vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="/teacher-student.jpg" 
          alt="Professora ensinando criança com deficiência visual a ler Braille" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        <div className="relative z-20 max-w-4xl backdrop-blur-md bg-white/10 border border-white/20 p-10 sm:p-16 rounded-3xl shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h3 className="font-serif text-[2rem] leading-[1.2] font-normal text-white sm:text-5xl text-center">
            Transforme o aprendizado em uma experiência que se pode sentir.
          </h3>
        </div>
      </div>
    </section>
  );
}
