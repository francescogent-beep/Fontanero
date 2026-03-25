import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Container, Section, H1, H2, Text, Button, Grid, Card, Badge, FeatureItem, CTASection } from '../components/UI';
import { BUSINESS_DETAILS, SERVICES, REVIEWS, BLOG_POSTS, GENERAL_FAQS, ABOUT_ME } from '../data';
import { 
  Star, 
  ShieldCheck, 
  Clock, 
  Award,
  ArrowRight, 
  ChevronDown,
  Droplets,
  Flame,
  WashingMachine,
  Snowflake,
  Wrench,
  Zap,
  Filter,
  Hammer,
  Building2,
  Bath,
  CheckCircle2,
  PenTool as Tool
} from 'lucide-react';

const IconMap: Record<string, React.ElementType> = {
  Droplets,
  Flame,
  WashingMachine,
  Snowflake,
  Wrench,
  Zap,
  Filter,
  Hammer,
  Building2,
  Bath
};

export const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <>
      <SEO 
        title={`Fontanero Urgente en ${BUSINESS_DETAILS.address.city}`}
        description={`${BUSINESS_DETAILS.name}: Tu fontanero de confianza en ${BUSINESS_DETAILS.address.city}. Reparación de fugas, calentadores, aire acondicionado y electrodomésticos. ¡Atención rápida!`}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-24 md:pb-40 overflow-hidden">
        <Container>
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto relative">
            {/* Decorative light flares moved to background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-blue-400/10 blur-[80px] md:blur-[120px] rounded-full -z-10" />
            
            <Badge className="mb-6 md:mb-8 bg-white/40 backdrop-blur-md border-white/40 uppercase tracking-wider">Servicio Técnico en {BUSINESS_DETAILS.address.city}</Badge>
            
            <H1 className="mb-8 md:mb-10">
              <span className="bg-white/45 backdrop-blur-2xl border border-white/60 px-4 py-3 md:px-8 md:py-4 rounded-2xl md:rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] md:shadow-[0_20px_50px_rgba(0,0,0,0.08)] box-decoration-clone inline-block text-zinc-950">
                Fontanería y Reparaciones con <span className="text-blue-600 drop-shadow-sm">Garantía Profesional</span>
              </span>
            </H1>
            
            <div className="mb-10 md:mb-12 max-w-xl mx-auto bg-white/35 backdrop-blur-xl border border-white/50 px-6 py-4 md:px-8 md:py-5 rounded-2xl md:rounded-[1.5rem] shadow-[0_10px_25px_rgba(0,0,0,0.03)] md:shadow-[0_15px_35px_rgba(0,0,0,0.05)]">
              <Text size="md" className="text-zinc-800 font-medium leading-relaxed md:text-lg">
                Solucionamos tus problemas de fontanería, calefacción y electrodomésticos de forma rápida y eficiente en toda la zona de {BUSINESS_DETAILS.address.city}.
              </Text>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full sm:w-auto px-4 sm:px-0">
              <Button href={`tel:${BUSINESS_DETAILS.contact.phone}`} variant="primary" className="w-full sm:w-auto px-10">Llamar Ahora</Button>
              <Button to="/servicios" variant="outline" className="w-full sm:w-auto px-10 bg-white/40 backdrop-blur-md border-white/40 hover:bg-white/60">Ver Servicios</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <Section className="pt-0 md:pt-0 pb-[70px]">
        <Container>
          <Grid cols={3} className="gap-4 sm:gap-8 pt-[35px] pb-0">
            <FeatureItem 
              title="Atención Rápida" 
              text="Sabemos que una fuga no puede esperar. Acudimos a tu domicilio en el menor tiempo posible." 
              icon={<Clock className="w-6 h-6" />}
            />
            <FeatureItem 
              title="Presupuesto Cerrado" 
              text="Sin sorpresas. Te informamos del coste antes de empezar a trabajar." 
              icon={<ShieldCheck className="w-6 h-6" />}
            />
            <FeatureItem 
              title="Profesionales Certificados" 
              text="Contamos con la experiencia y certificaciones necesarias para instalaciones de gas y agua." 
              icon={<Award className="w-6 h-6" />}
            />
          </Grid>
        </Container>
      </Section>

      {/* Services Preview */}
      <Section>
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <Badge>Nuestras Especialidades</Badge>
              <H2 className="mt-4">Servicios Profesionales de Fontanería y Climatización</H2>
            </div>
            <Button to="/servicios" variant="outline">Ver Todos</Button>
          </div>
          <Grid cols={3}>
            {SERVICES.slice(0, 3).map((service) => {
              const ServiceIcon = IconMap[service.icon as string] || Tool;
              return (
                <Card key={service.slug} className="flex flex-col h-full">
                  <div className="mb-4 text-blue-600">
                    <ServiceIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-600 text-sm mb-6 flex-grow">{service.summary}</p>
                  <Link to={`/servicios/${service.slug}`} className="text-blue-600 font-bold text-sm flex items-center hover:underline">
                    Saber más <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </Section>

      {/* About Me Preview */}
      <Section className="bg-zinc-50/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src={ABOUT_ME.image} 
                  alt="Francesco - Hidrasan" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-[2rem] -z-0 hidden md:block" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-zinc-200 rounded-[2rem] -z-0 hidden md:block" />
            </div>
            
            <div>
              <Badge>{ABOUT_ME.title}</Badge>
              <H2 className="mt-4 mb-6">{ABOUT_ME.subtitle}</H2>
              <Text className="mb-10 text-zinc-600 leading-relaxed">
                {ABOUT_ME.description}
              </Text>
              
              <div className="grid grid-cols-3 gap-8 mb-10">
                {ABOUT_ME.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <Button to="/contacto" variant="secondary">Conóceme Más</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Reviews Snippet */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <Badge>Testimonios</Badge>
            <H2 className="mt-4">Lo que dicen nuestros clientes</H2>
          </div>
          <Grid cols={3}>
            {REVIEWS.slice(0, 3).map((review, i) => (
              <Card key={i}>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="italic text-zinc-600 mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-zinc-400">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{review.author}</p>
                    <p className="text-xs text-zinc-400">{review.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
          <div className="text-center mt-12">
            <Button to="/reseñas" variant="outline">Ver todas las reseñas</Button>
          </div>
        </Container>
      </Section>

      {/* Blog Preview */}
      <Section>
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <Badge>Nuestro Blog</Badge>
              <H2 className="mt-4">Consejos y Noticias de Fontanería</H2>
            </div>
            <Button to="/blog" variant="outline">Ver Todo el Blog</Button>
          </div>
          <Grid cols={2}>
            {BLOG_POSTS.map((post) => (
              <Card key={post.id} className="group">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="text-xs text-zinc-400 mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-zinc-600 text-sm mb-6">{post.excerpt}</p>
                  <div className="text-blue-600 font-bold text-sm flex items-center">
                    Leer más <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <Badge>Preguntas Frecuentes</Badge>
            <H2 className="mt-4">Resolvemos tus dudas</H2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {GENERAL_FAQS.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white/40 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-zinc-50 transition-colors"
                >
                  <span className="font-bold text-zinc-950">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-8 pb-6 text-zinc-500 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
};
