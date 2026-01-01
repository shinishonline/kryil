interface MarqueeProps {
  variant?: 'light' | 'dark';
}

export default function Marquee({ variant = 'dark' }: MarqueeProps) {
  const words = [
    'SCALABLE',
    'SECURE',
    'HIGH-PERFORMANCE',
    'INNOVATIVE',
    'RELIABLE',
    'ENTERPRISE-GRADE',
  ];

  const marqueeContent = words.map((word) => `${word} \u2022 `).join('');
  const repeatedContent = marqueeContent.repeat(4);

  const bgColor = variant === 'light' ? 'bg-[#f1f0ea]' : 'bg-black';
  const textColor = variant === 'light' ? 'text-black/[0.06]' : 'text-white/[0.03]';
  const borderColor = variant === 'light' ? 'border-black/5' : 'border-white/5';

  return (
    <div className={`py-6 md:py-10 ${bgColor} border-y ${borderColor} overflow-hidden`}>
      <div className="animate-marquee whitespace-nowrap">
        <span className={`font-['Lato'] text-[clamp(2.5rem,8vw,6rem)] font-bold uppercase tracking-[-0.02em] ${textColor}`}>
          {repeatedContent}
        </span>
      </div>
    </div>
  );
}
