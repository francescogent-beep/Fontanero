import React from 'react';
import { SEO } from '../components/SEO';
import { Container, Section, H1, H2, Text, Grid, Card, Badge, Button } from '../components/UI';
import { BUSINESS_DETAILS } from '../data';
import { MapPin, Phone, MessageCircle, Mail, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulario enviado (simulación). Nos pondremos en contacto pronto.');
  };

  return (
    <>
      <SEO 
        title="Solicita Presupuesto para tu Proyecto"
        description={`Contacta con ${BUSINESS_DETAILS.name} en ${BUSINESS_DETAILS.address.city}. Especialistas en reformas e instalaciones de fontanería. Solicita tu valoración técnica.`}
      />

      <section className="pt-24 pb-16">
        <Container>
          <Badge>Contacto</Badge>
          <H1 className="mt-4 mb-6">Cuéntanos tu proyecto</H1>
          <Text className="max-w-2xl">
            ¿Estás planificando una reforma o necesitas una instalación técnica? Contacta con nosotros para una valoración profesional en {BUSINESS_DETAILS.address.city} y alrededores.
          </Text>
        </Container>
      </section>

      <Section>
        <Container>
          <Grid cols={2} className="gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-8">
                <H2 className="text-2xl mb-8">Información de contacto</H2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Dirección</p>
                      <p className="text-zinc-600">{BUSINESS_DETAILS.address.street}</p>
                      <p className="text-zinc-600">{BUSINESS_DETAILS.address.postalCode} {BUSINESS_DETAILS.address.city}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Teléfono y WhatsApp</p>
                      <a href={`tel:${BUSINESS_DETAILS.contact.phone}`} className="text-zinc-600 hover:text-blue-600 block">{BUSINESS_DETAILS.contact.phoneDisplay}</a>
                      <a href={BUSINESS_DETAILS.contact.whatsapp} className="text-emerald-600 font-medium hover:underline flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" /> Enviar WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-zinc-100 text-zinc-600 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Horario de atención</p>
                      {BUSINESS_DETAILS.openingHours.map((oh, i) => (
                        <p key={i} className="text-zinc-600 text-sm">{oh.day}: {oh.hours}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <div className="rounded-3xl overflow-hidden shadow-lg border border-zinc-100 h-[400px]">
                <iframe 
                  src={BUSINESS_DETAILS.googleMapsEmbed}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Ubicación de ${BUSINESS_DETAILS.name}`}
                />
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 md:p-12">
              <H2 className="text-2xl mb-8">Envíanos un mensaje</H2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700" htmlFor="name">Nombre</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700" htmlFor="phone">Teléfono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="Tu teléfono"
                    />
                  </div>
                </div>
                  <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700" htmlFor="service">Tipo de proyecto</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none bg-white"
                  >
                    <option>Reforma Integral de Vivienda</option>
                    <option>Instalación en Local Comercial</option>
                    <option>Sustitución de Tuberías / Bajantes</option>
                    <option>Climatización / Conductos</option>
                    <option>Tratamiento de Agua / Osmosis</option>
                    <option>Otro proyecto</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700" htmlFor="message">Mensaje</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Cuéntanos qué necesitas..."
                  />
                </div>
                <Button variant="primary" className="w-full py-4">
                  <Send className="mr-2 w-4 h-4" /> Enviar Mensaje
                </Button>
                <p className="text-center text-xs text-zinc-400">
                  Al enviar este formulario, aceptas nuestra política de privacidad.
                </p>
              </form>
            </Card>
          </Grid>
        </Container>
      </Section>
    </>
  );
};
