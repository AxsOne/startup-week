"use client";

import { motion } from 'framer-motion';
import { Navigation } from '@/components/ui/navigation';
import Image from 'next/image';

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Notre Galerie
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez l'ambiance VITANUIT en images
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{image.title}</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{image.title}</h3>
                  <p className="text-muted-foreground">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const images = [
  {
    title: "Notre Bus",
    description: "Découvrez notre bus aménagé pour vos soirées",
    src: "/bus.png"
  },
  {
    title: "L'Ambiance",
    description: "Une atmosphère unique pour des moments inoubliables",
    src: "/ambiance.jpg"
  }
];