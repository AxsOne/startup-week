"use client";

import { motion } from 'framer-motion';
import { Navigation } from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Crown, Users, Clock } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Réservez votre soirée</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Choisissez votre formule et vivez une expérience inoubliable
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Normal Ticket */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Formule Standard</h2>
                <p className="text-3xl font-bold mb-6">20€ <span className="text-sm text-muted-foreground">/personne</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center"><Users className="mr-2 h-5 w-5" /> Accès à la soirée</li>
                  <li className="flex items-center"><Clock className="mr-2 h-5 w-5" /> Transport assuré aux bar, restaurant et boîtes de nuit</li>
                </ul>
                <Button className="w-full" size="lg">
                  Réserver Standard
                </Button>
              </Card>
            </motion.div>

            {/* VIP Ticket */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 border-2 border-primary">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Formule VIP</h2>
                  <Crown className="h-6 w-6 text-primary" />
                </div>
                <p className="text-3xl font-bold mb-6">35€ <span className="text-sm text-muted-foreground">/personne</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center"><Users className="mr-2 h-5 w-5" /> Accès VIP à la soirée</li>
                  <li className="flex items-center"><Clock className="mr-2 h-5 w-5" /> Transport assuré aux bar, restaurant et boîtes de nuit</li>
                  <li className="flex items-center">🍾 Boisson offerte</li>
                  <li className="flex items-center">🎯 Accès privilégié à la boite de nuit</li>
                  <li className="flex items-center">👔 Priorité à l'entrée du bus</li>
                </ul>
                <Button className="w-full bg-primary" size="lg">
                  Réserver VIP
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-6">Détails de la réservation</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input type="date" id="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Nombre de personnes</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'personne' : 'personnes'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" placeholder="Votre nom" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" type="tel" placeholder="Votre numéro" />
              </div>

              <Button className="w-full" size="lg">
                Confirmer la réservation
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}