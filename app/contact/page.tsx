"use client";

import { motion } from 'framer-motion';
import { Navigation } from '@/components/ui/navigation';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Contactez-nous
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Notre équipe est là pour vous répondre
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-primary" />
                <p>contact@vitanuit.fr</p>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-primary" />
                <p>01 23 45 67 89</p>
              </div>

            </motion.div>

            {/* Formulaire de contact */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block mb-2">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md bg-card"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md bg-card"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md bg-card"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 border rounded-md bg-card"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Envoyer le message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
}