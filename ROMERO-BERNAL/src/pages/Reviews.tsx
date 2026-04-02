import React from 'react';
import { SEO } from '../components/SEO';
import { Container, Section, H1, H2, Text, Grid, Card, Badge, CTASection, Button } from '../components/UI';
import { REVIEWS, BUSINESS_DETAILS } from '../data';
import { Star, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <>
      <SEO 
        title="Reseñas y Opiniones de Clientes"
        description={`Descubre lo que nuestros clientes en ${BUSINESS_DETAILS.address.city} opinan sobre ${BUSINESS_DETAILS.name}. Fontanería, reparaciones y servicio técnico de confianza.`}
      />

      <section className="pt-24 pb-16">
        <Container className="text-center">
          <Badge>Social Proof</Badge>
          <H1 className="mt-4 mb-6">Opiniones de nuestros clientes</H1>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex text-amber-500">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
            <span className="text-2xl font-bold text-zinc-900">5.0 / 5</span>
          </div>
          <Text className="max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra prioridad. Trabajamos cada día para ofrecer el mejor servicio técnico en {BUSINESS_DETAILS.address.city}.
          </Text>
        </Container>
      </section>

      <Section>
        <Container>
          <Grid cols={2} className="gap-8">
            {REVIEWS.map((review, i) => (
              <Card key={i} className="p-8 relative">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-zinc-50 opacity-10" />
                <div className="flex text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-zinc-700 text-lg italic mb-8 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900">{review.author}</p>
                    <p className="text-sm text-zinc-400">{review.date} • Reseña de Google</p>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>

          <div className="mt-20 bg-zinc-900 rounded-3xl p-8 md:p-12 text-center text-white">
            <H2 className="text-white mb-6">¿Has trabajado con nosotros?</H2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Tu opinión nos ayuda a mejorar y a que otros clientes confíen en nuestro trabajo. ¡Déjanos tu reseña en Google!
            </p>
            <Button href={BUSINESS_DETAILS.social.google} variant="primary">
              Dejar una reseña
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
};
