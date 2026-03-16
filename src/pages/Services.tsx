import React from 'react';
import { SEO } from '../components/SEO';
import { Container, Section, H1, H2, Text, Grid, Card, Badge, CTASection, Button } from '../components/UI';
import { BUSINESS_DETAILS, SERVICES } from '../data';
import { Link } from 'react-router-dom';
import { ArrowRight, PenTool as Tool } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <>
      <SEO 
        title="Servicios de Fontanería y Reparaciones"
        description={`Catálogo completo de servicios: Fontanería, Calentadores, Aire Acondicionado y Reparación de Electrodomésticos en ${BUSINESS_DETAILS.address.city}.`}
      />

      <section className="bg-zinc-950 text-white pt-32 pb-20">
        <Container>
          <Badge className="bg-white/10 text-zinc-400 border-white/10">Nuestras Soluciones</Badge>
          <H1 className="mt-8 mb-8">Servicios Técnicos Profesionales</H1>
          <Text className="text-zinc-400 max-w-2xl">
            Ofrecemos un servicio integral para el mantenimiento y reparación de tu hogar. Desde una pequeña fuga hasta la instalación completa de climatización.
          </Text>
        </Container>
      </section>

      <Section>
        <Container>
          <Grid cols={2} className="gap-8">
            {SERVICES.map((service) => (
              <Card key={service.slug} className="p-8 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Tool className="w-8 h-8" />
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
                    Detalles del servicio
                  </Button>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
            <div className="relative z-10 max-w-2xl">
              <H2 className="text-white">¿No encuentras lo que buscas?</H2>
              <Text className="text-blue-100 mb-8">
                Si tienes una avería específica o necesitas un presupuesto para una reforma, no dudes en consultarnos. Atendemos todo tipo de trabajos de fontanería y climatización.
              </Text>
              <Button href="tel:+34663168231" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Consultar ahora
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
