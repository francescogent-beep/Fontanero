import React from 'react';
import { SEO } from '../components/SEO';
import { Container, Section, H1, Text, Grid, Card, Badge, CTASection, Button } from '../components/UI';
import { BUSINESS_DETAILS, BLOG_POSTS } from '../data';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog: React.FC = () => {
  return (
    <>
      <SEO 
        title="Blog de Fontanería y Consejos"
        description="Aprende a mantener las tuberías de tu hogar, ahorrar agua y solucionar pequeñas averías con nuestros consejos profesionales."
      />

      <section className="bg-zinc-950 text-white pt-32 pb-20">
        <Container>
          <Badge className="bg-white/10 text-zinc-400 border-white/10">Consejos de Expertos</Badge>
          <H1 className="mt-8 mb-8">Blog de {BUSINESS_DETAILS.name}</H1>
          <Text className="text-zinc-400 max-w-2xl">
            Compartimos nuestra experiencia para ayudarte a cuidar de tu hogar y prevenir averías costosas.
          </Text>
        </Container>
      </section>

      <Section>
        <Container>
          <Grid cols={2} className="gap-8">
            {BLOG_POSTS.map((post) => (
              <Card key={post.id} className="p-0 overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/blog-${post.id}/800/450`} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-zinc-400 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-zinc-600 mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`} className="text-blue-600 font-bold flex items-center hover:underline">
                    Leer artículo completo <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <CTASection />
    </>
  );
};
