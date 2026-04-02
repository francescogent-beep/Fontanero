import React from 'react';
import { SEO } from '../components/SEO';
import { Container, Section, H1, H2, Text, Grid, Card, Badge, CTASection, Button } from '../components/UI';
import { BUSINESS_DETAILS, SERVICES } from '../data';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
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

export const Services: React.FC = () => {
  return (
    <>
      <SEO 
        title="Instalaciones y Proyectos de Fontanería"
        description={`Especialistas en reformas integrales, sustitución de tuberías y fontanería comercial en ${BUSINESS_DETAILS.address.city}. Proyectos a medida con garantía profesional.`}
      />

      <section className="bg-zinc-950 text-white pt-32 pb-20">
        <Container>
          <Badge className="bg-white/10 text-zinc-400 border-white/10">Nuestras Soluciones</Badge>
          <H1 className="mt-8 mb-8">Proyectos e Instalaciones Profesionales</H1>
          <Text className="text-zinc-400 max-w-2xl">
            Ofrecemos un servicio especializado en la ejecución de proyectos complejos. Desde reformas integrales de viviendas hasta instalaciones técnicas para locales comerciales.
          </Text>
        </Container>
      </section>

      <Section>
        <Container>
          <Grid cols={2} className="gap-8">
            {SERVICES.map((service) => {
              const ServiceIcon = IconMap[service.icon as string] || Tool;
              return (
                <Card key={service.slug} className="p-8 flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <ServiceIcon className="w-8 h-8" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <Badge>{service.category}</Badge>
                    </div>
                    <p className="text-zinc-600 mb-6 leading-relaxed">
                      {service.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <span key={i} className="text-xs bg-zinc-100 px-2 py-1 rounded text-zinc-500 border border-zinc-200">
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <Button to={`/servicios/${service.slug}`} variant="outline" className="w-full sm:w-auto">
                      Detalles del proyecto
                    </Button>
                  </div>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
            <div className="relative z-10 max-w-2xl">
              <H2 className="text-white">¿Tienes un proyecto específico?</H2>
              <Text className="text-blue-100 mb-8">
                Si necesitas un presupuesto para una reforma integral o una instalación técnica a medida, nuestro equipo te asesorará para encontrar la mejor solución técnica y económica.
              </Text>
              <Button to="/contacto" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Solicitar valoración
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -mr-32 -mt-32 opacity-50" />
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
};
