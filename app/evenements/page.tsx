"use client";

import { motion } from 'framer-motion';
import { Navigation } from '@/components/ui/navigation';
import { Calendar, Music, Heart, Sun, Palmtree} from 'lucide-react';

export default function EventPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Événements à venir
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les moments festifs à ne pas manquer à La Réunion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 mx-auto bg-primary/10 rounded-full">
                  {event.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{event.title}</h3>
                <p className="text-primary font-medium mb-2 text-center">{event.date}</p>
                <p className="text-muted-foreground text-center">{event.description}</p>
                <div className="mt-4 text-sm text-center">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {event.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const events = [
  {
    title: "Saint-Valentin",
    date: "14 Février 2025",
    description: "Soirée spéciale en amoureux avec vue sur l'océan Indien",
    location: "Saint-Gilles-les-Bains",
    icon: <Heart className="w-6 h-6 text-primary" />
  },
  {
    title: "Fête de la Musique",
    date: "21 Juin 2025",
    description: "Concerts gratuits dans toute l'île avec des artistes locaux",
    location: "Toute l'île",
    icon: <Music className="w-6 h-6 text-primary" />
  },
  {
    title: "Sakifo Music Festival",
    date: "7-9 Juin 2025",
    description: "Le plus grand festival de musique de l'océan Indien",
    location: "Saint-Pierre",
  },
  {
    title: "Grand Boucan",
    date: "Juillet 2025",
    description: "Festival culturel et carnaval réunionnais",
    location: "Saint-Gilles",
    icon: <Palmtree className="w-6 h-6 text-primary" />
  },
  {
    title: "Fête du 14 Juillet",
    date: "14 Juillet 2025",
    description: "Feu d'artifice et animations sur toute l'île",
    location: "Toute l'île",
  },
  {
    title: "Festival Liberté Métisse",
    date: "20 Décembre 2025",
    description: "Célébration de l'abolition de l'esclavage",
    location: "Etang-Salé",
    icon: <Sun className="w-6 h-6 text-primary" />
  }
];