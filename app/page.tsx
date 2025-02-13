"use client";

import { motion } from 'framer-motion';
import { Navigation } from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { PartyPopper, Calendar, Star } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?q=80&w=2070')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 neon-text">
              VITANUIT
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Vivez une expérience festive unique à bord de notre bus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white neon-border"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Réserver maintenant
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                <PartyPopper className="mr-2 h-5 w-5" />
                Voir les événements
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Une expérience inoubliable
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez pourquoi VITANUIT est le choix parfait pour vos soirées
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-lg"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "Ambiance Unique",
    description: "Un décor festif et une ambiance électrique pour des soirées mémorables",
    icon: PartyPopper
  },
  {
    title: "Service Premium",
    description: "Une équipe dédiée pour assurer votre confort et votre sécurité",
    icon: Star
  },
  {
    title: "Réservation Flexible",
    description: "Réservez facilement en ligne et personnalisez votre expérience",
    icon: Calendar
  }
];