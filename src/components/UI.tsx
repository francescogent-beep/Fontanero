import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data';

// --- ATOMIC COMPONENTS ---

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string; dark?: boolean }> = ({ children, className = "", id, dark }) => (
  <section id={id} className={`py-20 md:py-32 ${dark ? 'bg-zinc-950/90 text-white backdrop-blur-xl' : 'bg-white/70 text-zinc-950 backdrop-blur-xl'} ${className}`}>
    {children}
  </section>
);

export const H1: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h1 className={`text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.15] md:leading-[1.1] ${className}`}>
    {children}
  </h1>
);

export const H2: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight ${className}`}>
    {children}
  </h2>
);

export const Text: React.FC<{ children: React.ReactNode; className?: string; size?: 'sm' | 'md' | 'lg' }> = ({ children, className = "", size = 'md' }) => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-lg md:text-xl',
    lg: 'text-xl md:text-2xl'
  };
  return <p className={`${sizes[size]} text-zinc-500 font-normal leading-relaxed ${className}`}>{children}</p>;
};

export const Button: React.FC<{ 
  children: React.ReactNode; 
  to?: string; 
  href?: string; 
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  className?: string;
  onClick?: () => void;
}> = ({ children, to, href, variant = 'primary', className = "", onClick }) => {
  const base = "inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center active:scale-95";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-600/10",
    secondary: "bg-zinc-950 text-white hover:bg-zinc-800",
    outline: "bg-zinc-100 text-zinc-950 hover:bg-zinc-200",
    whatsapp: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-xl shadow-emerald-500/10"
  };

  const content = (
    <>
      {children}
      {variant === 'primary' && <ArrowRight className="ml-2 w-4 h-4" />}
    </>
  );

  if (to) return <Link to={to} className={`${base} ${variants[variant]} ${className}`}>{content}</Link>;
  if (href) return <a href={href} className={`${base} ${variants[variant]} ${className}`}>{content}</a>;
  return <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>{content}</button>;
};

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white/50 backdrop-blur-md rounded-[2.5rem] p-10 transition-all duration-500 hover:bg-white/80 border border-white/20 shadow-sm ${className}`}>
    {children}
  </div>
);

export const Grid: React.FC<{ children: React.ReactNode; cols?: number; className?: string }> = ({ children, cols = 3, className = "" }) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };
  return <div className={`grid ${gridCols[cols as keyof typeof gridCols]} gap-6 ${className}`}>{children}</div>;
};

export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] bg-zinc-100 text-zinc-500 border border-zinc-200/50 ${className}`}>
    {children}
  </span>
);

// --- COMPOSITE UI BLOCKS ---

export const CTASection: React.FC = () => (
  <Section dark className="text-center">
    <Container>
      <H2 className="text-white">¿Necesitas un fontanero urgente?</H2>
      <Text className="text-zinc-400 mb-12 max-w-2xl mx-auto">
        Estamos disponibles para atender cualquier avería en {BUSINESS_DETAILS.address.city} y alrededores. Rapidez, limpieza y garantía profesional.
      </Text>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Button href={`tel:${BUSINESS_DETAILS.contact.phone}`} variant="primary" className="px-10">Llamar Ahora</Button>
        <Button href={BUSINESS_DETAILS.contact.whatsapp} variant="whatsapp" className="px-10">
          <MessageCircle className="mr-2 w-5 h-5" />
          WhatsApp
        </Button>
      </div>
    </Container>
  </Section>
);

export const FeatureItem: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <CheckCircle2 className="w-6 h-6 text-blue-600" />
    </div>
    <div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-zinc-600">{text}</p>
    </div>
  </div>
);
