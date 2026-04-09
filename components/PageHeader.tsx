interface PageHeaderProps {
  label: string;
  title: string;
  image: string;
}

export default function PageHeader({ label, title, image }: PageHeaderProps) {
  return (
    <section className="relative pt-44 pb-28 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('${image}')` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/85 via-charcoal-950/70 to-charcoal-950/85" />
      {/* Gold horizontal rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="relative z-10 text-center px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-6 h-px bg-gold-400/60" />
          <span className="section-label text-gold-400">{label}</span>
          <span className="w-6 h-px bg-gold-400/60" />
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl text-white font-semibold">{title}</h1>
      </div>
    </section>
  );
}
