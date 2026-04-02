import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Container, Section, H1, H2, Text, Button, Grid, Card, Badge, CTASection } from '../components/UI';
import { SERVICES, BUSINESS_DETAILS } from '../data';
import { CheckCircle2, HelpCircle, ArrowLeft, Phone } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": BUSINESS_DETAILS.social.google }, // Simplified
      { "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${window.location.origin}/servicios` },
      { "@type": "ListItem", "position": 3, "name": service.title }
    ]
  };

  // FAQ Schema
  const faqSchema = service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  const jsonLd: any[] = [breadcrumbSchema];
  if (faqSchema) jsonLd.push(faqSchema);

  return (
    <>
      <SEO 
        title={service.title}
        description={service.summary}
        jsonLd={jsonLd}
      />

      <section className="bg-zinc-50 pt-12 pb-24">
        <Container>
          <Link to="/servicios" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" /> Volver a servicios
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Badge className="mb-4">{service.category}</Badge>
              <H1 className="mb-6">{service.title}</H1>
              <Text size="lg" className="mb-12">
                {service.summary}
              </Text>

              <div className="mb-16">
                <H2 className="text-2xl mb-6">Beneficios del servicio</H2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-zinc-100 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="font-medium text-zinc-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <H2 className="text-2xl mb-6">¿Qué puedes esperar?</H2>
                <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
                  <p className="text-zinc-600 leading-relaxed italic">
                    "{service.whatToExpect}"
                  </p>
                </div>
              </div>

              {service.faqs.length > 0 && (
                <div className="mb-16">
                  <H2 className="text-2xl mb-6">Preguntas Frecuentes</H2>
                  <div className="space-y-4">
                    {service.faqs.map((faq, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm">
                        <div className="flex gap-4">
                          <HelpCircle className="w-6 h-6 text-blue-600 shrink-0" />
                          <div>
                            <h4 className="font-bold text-zinc-900 mb-2">{faq.q}</h4>
                            <p className="text-zinc-600 text-sm">{faq.a}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <Card className="bg-zinc-900 text-white border-none p-8">
                  <h3 className="text-xl font-bold mb-4">Solicitar Valoración</h3>
                  <p className="text-zinc-400 text-sm mb-8">
                    Llámanos o escríbenos por WhatsApp para obtener una valoración técnica detallada para tu proyecto de {service.title.toLowerCase()}.
                  </p>
                  <div className="space-y-4">
                    <Button to="/contacto" variant="primary" className="w-full">
                      Pedir Presupuesto
                    </Button>
                    <Button href={BUSINESS_DETAILS.contact.whatsapp} variant="whatsapp" className="w-full">
                      WhatsApp
                    </Button>
                  </div>
                </Card>

                <Card className="bg-blue-50 border-blue-100 p-8">
                  <h3 className="text-lg font-bold mb-4 text-blue-900">¿Por qué elegirnos?</h3>
                  <ul className="space-y-3 text-sm text-blue-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" /> Especialistas en {BUSINESS_DETAILS.address.city}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" /> Ejecución técnica impecable
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" /> Materiales de alta gama
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
};
