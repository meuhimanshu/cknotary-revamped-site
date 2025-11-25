"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5,
    text: "Chelsea made the entire estate planning process so simple and stress-free. Her professionalism and attention to detail gave us complete peace of mind.",
    service: "Estate Planning"
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
    text: "Outstanding service for our real estate transaction. Everything was handled efficiently and we closed on time. Highly recommend!",
    service: "Real Estate"
  },
  {
    id: 3,
    name: "Jennifer Thompson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5,
    text: "Very professional and knowledgeable. Chelsea explained everything clearly and made sure all our documents were in order.",
    service: "Notarization"
  },
  {
    id: 4,
    name: "David Martinez",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 5,
    text: "Excellent experience with power of attorney documents. Quick turnaround and very thorough. Thank you!",
    service: "Personal Planning"
  },
  {
    id: 5,
    name: "Emily Roberts",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    rating: 5,
    text: "Chelsea helped us with our will preparation. She was patient, professional, and made sure we understood every detail.",
    service: "Estate Planning"
  },
  {
    id: 6,
    name: "Robert Johnson",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    rating: 5,
    text: "Great service for our property transfer. Everything was explained clearly and completed on schedule. Highly professional!",
    service: "Real Estate"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials-section" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-muted/30 w-full">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <FadeIn>
          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <p className="text-[#D4AF37] font-semibold text-base sm:text-lg">
              500+ Happy Clients in Vernon & Surrounding Areas
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-[family-name:var(--font-playfair)]">
              Don&apos;t just take our word
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base leading-relaxed">
              See what our clients have to say about their experience with Chelsea Kramer Notary Public
            </p>
          </div>
        </FadeIn>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-card border-2 border-border hover:border-primary/50 rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl">
                {/* Header with Image and Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-white fill-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-xs text-muted-foreground">{testimonial.service}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Service Badge */}
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <FadeIn delay={0.3}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24hr</div>
              <div className="text-sm text-muted-foreground">Average Response</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

