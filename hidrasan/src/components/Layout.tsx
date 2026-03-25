import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, MapPin, Clock } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data';
import { Container } from './UI';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [headerHeight, setHeaderHeight] = React.useState(0);
  const headerRef = React.useRef<HTMLElement>(null);
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Track scroll for frosted effect
  React.useEffect(() => {
    const handleScroll = () => {
      // Threshold adjusted to start after hero buttons (approx 500px on desktop, 400px on mobile)
      const threshold = window.innerWidth < 768 ? 400 : 550;
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Measure header height
  React.useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().bottom);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [isMenuOpen]);

  return (
    <div 
      className="relative min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900"
      style={{ 
        ['--header-height' as any]: `${headerHeight}px`
      }}
    >
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-x-0 bottom-0 -z-20 bg-cover bg-center bg-no-repeat bg-[url(https://i.imgur.com/pjyEzGB.png)] md:bg-[url(https://i.imgur.com/9M3ZkIi.png)]"
        style={{ 
          top: 'var(--header-height, 0px)'
        }}
      />
      
      {/* Frosted Overlay - appears on scroll */}
      <div 
        className={`fixed inset-x-0 bottom-0 -z-10 transition-all duration-1000 ease-in-out backdrop-blur-xl bg-white/40 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
        style={{ top: 'var(--header-height, 0px)' }}
      />

      <div className="relative z-0 flex flex-col min-h-screen">
        {/* Top Bar and Header Container for measurement */}
        <div className="sticky top-0 z-50">
          <header ref={headerRef} className="bg-white border-b border-zinc-100/50">
            {/* Top Bar */}
            <div className="bg-zinc-900 text-white py-2 text-xs hidden md:block">
              <Container className="flex justify-between items-center">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {BUSINESS_DETAILS.address.city}, {BUSINESS_DETAILS.address.street}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {BUSINESS_DETAILS.openingHours[0].hours}</span>
                </div>
                <div className="flex gap-4">
                  <a href={`tel:${BUSINESS_DETAILS.contact.phone}`} className="hover:text-blue-400 transition-colors">Tel: {BUSINESS_DETAILS.contact.phoneDisplay}</a>
                </div>
              </Container>
            </div>

            {/* Main Header Content */}
            <Container className="flex justify-between items-center pt-[20px] pb-[10px]">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={BUSINESS_DETAILS.logo} 
              alt={BUSINESS_DETAILS.name} 
              className="h-[47px] w-auto object-contain mt-[-3px] mb-[-5px]"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <NavLink to="/" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-950'}`}>Inicio</NavLink>
            <NavLink to="/servicios" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-950'}`}>Servicios</NavLink>
            <NavLink to="/blog" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-950'}`}>Blog</NavLink>
            <NavLink to="/reseñas" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-950'}`}>Reseñas</NavLink>
            <NavLink to="/contacto" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-950'}`}>Contacto</NavLink>
          </nav>

          <div className="hidden md:block">
            <a href={`tel:${BUSINESS_DETAILS.contact.phone}`} className="bg-zinc-950 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-all active:scale-95">
              {BUSINESS_DETAILS.contact.phoneDisplay}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-zinc-950" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-zinc-100 py-4 px-4 flex flex-col gap-4 shadow-xl">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2">Inicio</NavLink>
            <NavLink to="/servicios" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2">Servicios</NavLink>
            <NavLink to="/blog" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2">Blog</NavLink>
            <NavLink to="/reseñas" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2">Reseñas</NavLink>
            <NavLink to="/contacto" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2">Contacto</NavLink>
            <a href={`tel:${BUSINESS_DETAILS.contact.phone}`} className="bg-blue-600 text-white text-center py-3 rounded-xl font-bold">Llamar Ahora</a>
          </div>
        )}
          </header>
        </div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 pt-16 pb-24 md:pb-16 border-t border-zinc-800">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src={BUSINESS_DETAILS.logo} 
                  alt={BUSINESS_DETAILS.name} 
                  className="h-12 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm leading-relaxed mb-6">
                {BUSINESS_DETAILS.description}
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/reseñas" className="hover:text-white transition-colors">Reseñas</Link></li>
                <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contacto</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>{BUSINESS_DETAILS.address.street}<br />{BUSINESS_DETAILS.address.postalCode} {BUSINESS_DETAILS.address.city}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <a href={`tel:${BUSINESS_DETAILS.contact.phone}`} className="hover:text-white">{BUSINESS_DETAILS.contact.phoneDisplay}</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Horario</h4>
              <ul className="space-y-4 text-sm">
                {BUSINESS_DETAILS.openingHours.map((oh, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{oh.day}</span>
                    <span className="text-white">{oh.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 text-xs flex flex-col md:flex-row justify-between gap-4">
            <p>© {new Date().getFullYear()} {BUSINESS_DETAILS.name}. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link to="/privacidad" className="hover:text-white">Privacidad</Link>
              <Link to="/cookies" className="hover:text-white">Cookies</Link>
            </div>
          </div>
        </Container>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-px bg-zinc-800 border-t border-zinc-800">
        <a href={`tel:${BUSINESS_DETAILS.contact.phone}`} className="bg-red-600 text-white py-4 flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-xs">
          <Phone className="w-4 h-4" /> Emergencia
        </a>
        <a href={BUSINESS_DETAILS.contact.whatsapp} className="bg-emerald-500 text-white py-4 flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-xs">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
      </div>
    </div>
  );
};
