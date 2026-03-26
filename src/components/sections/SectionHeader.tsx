interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-10 lg:mb-14 ${centered ? 'text-center' : ''}`}>
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-ethsun-gold mb-3">
        {eyebrow}
      </p>
      <h2 className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-ethsun-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-base lg:text-lg leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
