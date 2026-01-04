import type { ReactNode } from 'react';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-['Lato'] text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-white/50 text-sm">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-8 md:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 rounded-lg p-8 md:p-12 text-white/80 space-y-8">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
