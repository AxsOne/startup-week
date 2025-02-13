"use client";

import { motion } from 'framer-motion';
import { Navigation } from '@/components/ui/navigation';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function TeamPage() {
  const [showAll, setShowAll] = useState(false);
  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, 3);
  const hasMoreMembers = teamMembers.length > 3;

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
              Notre Équipe
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez les visages derrière VITANUIT
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-lg text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image || '/default-avatar.png'} // Assurez-vous d'ajouter une image default-avatar.png dans le dossier public
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              </motion.div>
            ))}
          </div>

          {hasMoreMembers && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setShowAll(!showAll)}
              className="mt-8 mx-auto flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              {showAll ? (
                <>
                  Voir moins <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Voir plus <ChevronDown className="w-4 h-4" />
                </>
              )}
            </motion.button>
          )}
        </div>
      </section>
    </main>
  );
}

const teamMembers = [
    {
        name: "Coralie COLLAS",
        image: "/coralie.png",
    },
    {
        name: "Lylia BOUJOU",
        image: "/lylia.jpg",
    },
    {
        name: "Tamîm GANGAT",
        image: "/Tamîm.jpg",
    },
    {
      name: "Romain NACAOUELE",
      image: "/romain.jpg",
    },
  {
    name: "Nathan FIROAGUER",
    image: "",
  },
  {
    name: "Dany DEURVILHER",
    image: "",
  }
];