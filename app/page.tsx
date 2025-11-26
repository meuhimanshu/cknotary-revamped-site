"use client";

import Link from "next/link";
import { ArrowRight, FileText, Home, Heart, CheckCircle, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { ServicesCarousel, CarouselItem } from "@/components/ui/services-carousel";
import { HeroBackgroundElements } from "@/components/ui/hero-background-elements";
import { ExpandableServices } from "@/components/ui/expandable-services";
import { Testimonials } from "@/components/ui/testimonials";
import { ShimmerText } from "@/components/ui/shimmer-text";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 dark:from-gray-950 dark:via-gray-900 dark:to-black text-primary-foreground dark:text-foreground overflow-hidden w-full antialiased">
        {/* Subtle Background Image */}
        <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.05]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&auto=format&fit=crop')",
              filter: "grayscale(50%)",
            }}
          />
        </div>

        {/* Spotlight Effect */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#D4AF37" />

        {/* Background Grid */}
        <BackgroundGrid />

        {/* Animated Beams */}
        <BackgroundBeams />

        {/* Hero Background Elements - Documents, Icons, Shapes */}
        <HeroBackgroundElements />

        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent dark:from-black/80 opacity-60 dark:opacity-40" />

        <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[family-name:var(--font-playfair)] px-4 text-primary-foreground dark:text-white leading-tight pb-2">
                  We&apos;re here for{" "}
                  <span className="relative inline-block pb-2">
                    you
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-4 sm:h-5 md:h-6"
                      viewBox="0 0 200 20"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        d="M3,15 Q50,8 100,12 T197,10"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          pathLength: { duration: 1, delay: 0.5, ease: "easeInOut" },
                          opacity: { duration: 0.2, delay: 0.5 },
                        }}
                        style={{
                          filter: "url(#crayon-texture)",
                        }}
                      />
                      <defs>
                        <filter id="crayon-texture">
                          <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.9"
                            numOctaves="3"
                            result="noise"
                          />
                          <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="1.5"
                            xChannelSelector="R"
                            yChannelSelector="G"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-xl sm:text-2xl md:text-3xl text-primary-foreground/90 dark:text-gray-200 px-4 font-light leading-relaxed">
                  Your trusted partner for all legal <ShimmerText className="font-semibold">documentation</ShimmerText>
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto px-4 sm:px-0 mt-4">
                <Button size="lg" asChild className="bg-[#D4AF37] hover:bg-[#B8941F] text-primary shadow-lg shadow-[#D4AF37]/20 w-full sm:w-auto text-base sm:text-lg h-12 sm:h-14 transition-all hover:scale-105">
                  <Link href="/contact" className="flex items-center justify-center">
                    <ShimmerText className="text-primary font-medium">Book an Appointment</ShimmerText>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-primary-foreground dark:border-gray-300 text-primary-foreground dark:text-gray-300 hover:bg-primary-foreground/20 dark:hover:bg-gray-300/20 w-full sm:w-auto text-base sm:text-lg h-12 sm:h-14 backdrop-blur-sm transition-all hover:scale-105">
                  <a href="tel:555-123-4567">
                    Call Today: 555-123-4567
                  </a>
                </Button>
              </div>

              {/* Happy Clients Preview */}
              <motion.div
                className="mt-8 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                onClick={() => {
                  const testimonialsSection = document.getElementById('testimonials-section');
                  testimonialsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="flex flex-col items-center">
                  <h2 className="text-lg sm:text-xl font-medium mb-0.5 text-primary-foreground dark:text-gray-200">
                    Happy{" "}
                    <ShimmerText className="font-bold">
                      Clients
                    </ShimmerText>
                  </h2>
                  <div className="flex items-center -space-x-2">
                    <div className="relative group flex flex-col items-center">
                      <p className="opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 mb-2 px-2 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-md text-foreground">
                        Michael
                      </p>
                      <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                        alt="Michael - Happy Client"
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-3 border-primary-foreground dark:border-gray-300 hover:-translate-y-1 transition hover:scale-110"
                      />
                    </div>
                    <div className="relative group flex flex-col items-center">
                      <p className="opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 mb-2 px-2 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-md text-foreground">
                        James
                      </p>
                      <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                        alt="James - Happy Client"
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-3 border-primary-foreground dark:border-gray-300 hover:-translate-y-1 transition hover:scale-110"
                      />
                    </div>
                    <div className="relative group flex flex-col items-center">
                      <p className="opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 mb-2 px-2 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-md text-foreground">
                        Emily
                      </p>
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                        alt="Emily - Happy Client"
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-3 border-primary-foreground dark:border-gray-300 hover:-translate-y-1 transition hover:scale-110"
                      />
                    </div>
                    <div className="relative group flex flex-col items-center">
                      <p className="opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 mb-2 px-2 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-md text-foreground">
                        John
                      </p>
                      <img
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="John - Happy Client"
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-3 border-primary-foreground dark:border-gray-300 hover:-translate-y-1 transition hover:scale-110"
                      />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-primary-foreground/70 dark:text-gray-400 mt-3 italic">Click to see what our clients say</p>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Overview - Expandable with 3D Carousel */}
      <section className="py-12 sm:py-16 md:py-20 bg-background w-full overflow-visible">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <FadeIn>
            <div className="text-center space-y-3 mb-10 sm:mb-12 px-2 sm:px-0">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl font-[family-name:var(--font-playfair)]">
                Our Services
              </h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-sm md:text-base leading-relaxed">
                As a dedicated Notary Public, I provide precise, reliable, and efficient legal services. My focus is on ensuring your documents are handled with the utmost care and professionalism.
              </p>
            </div>
          </FadeIn>

          <ExpandableServices />
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Why Choose Us Section - Bento Grid Style */}
      <section className="relative py-8 sm:py-12 md:py-16 bg-gradient-to-b from-muted/30 to-muted/50 w-full overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <FadeIn>
            <div className="text-center space-y-2 mb-6 sm:mb-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl font-[family-name:var(--font-playfair)]">
                Why Choose a Notary Public?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base">
                Trusted professionals providing comprehensive legal services
              </p>
            </div>
          </FadeIn>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">

            {/* Member Badge Card - Large */}
            <FadeIn delay={0.1} className="md:col-span-2 lg:col-span-1 lg:row-span-2">
              <Card className="h-full bg-gradient-to-br from-background to-muted/20 border-2 flex flex-col items-center justify-center p-4 md:p-6">
                <div className="w-32 h-32 md:w-40 md:h-40 mb-3 relative">
                  {/* Light mode logo */}
                  <img
                    src="/notary-seal.png"
                    alt="The Society of Notaries Public of British Columbia Member Seal"
                    className="w-full h-full object-contain dark:hidden"
                  />
                  {/* Dark mode logo */}
                  <img
                    src="/colored-logo.png"
                    alt="The Society of Notaries Public of British Columbia Member Seal"
                    className="w-full h-full object-contain hidden dark:block"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-center mb-2 font-[family-name:var(--font-playfair)] text-primary">
                  MEMBER
                </h3>
                <p className="text-center text-xs md:text-sm text-muted-foreground leading-relaxed">
                  The Notary Society of British Columbia takes great care to ensure its members are insured against errors and omissions and that the membership meets the high standards of responsibility expected of them. The combination of integrity, business experience and specialized legal education means that your Notary Public stands proudly among all legal professionals.
                </p>
              </Card>
            </FadeIn>

            {/* Estate Planning Card */}
            <FadeIn delay={0.2} className="md:col-span-1">
              <div className="h-full overflow-hidden rounded-xl border group hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-28 md:h-32 overflow-hidden flex-shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=800&auto=format&fit=crop')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
                  <h3 className="absolute inset-0 flex items-center justify-center text-lg md:text-xl font-bold text-white font-[family-name:var(--font-playfair)]">
                    ESTATE PLANNING
                  </h3>
                </div>
                <div className="bg-[#8B1538] dark:bg-gradient-to-br dark:from-background dark:to-muted/20 text-white dark:text-muted-foreground p-3 md:p-4 flex-1">
                  <p className="text-xs md:text-sm leading-relaxed">
                    End of life planning will be easier than you imagined with the help of your Notary Public. Concise legally documented instructions will save costly and time consuming legal intervention in the future.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Real Estate Card */}
            <FadeIn delay={0.3} className="md:col-span-1">
              <div className="h-full overflow-hidden rounded-xl border group hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-28 md:h-32 overflow-hidden flex-shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
                  <h3 className="absolute inset-0 flex items-center justify-center text-lg md:text-xl font-bold text-white font-[family-name:var(--font-playfair)]">
                    REAL ESTATE
                  </h3>
                </div>
                <div className="bg-[#8B1538] dark:bg-gradient-to-br dark:from-background dark:to-muted/20 text-white dark:text-muted-foreground p-3 md:p-4 flex-1">
                  <p className="text-xs md:text-sm leading-relaxed">
                    Real Estate is one of the primary areas of business for a Notary Public. Our goal is to smoothly navigate you through the process, giving you peace of mind that everything will be completed correctly, and on time.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Notaries Public Card */}
            <FadeIn delay={0.4} className="md:col-span-1">
              <div className="h-full overflow-hidden rounded-xl border group hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-28 md:h-32 overflow-hidden flex-shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&auto=format&fit=crop')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
                  <h3 className="absolute inset-0 flex items-center justify-center text-lg md:text-xl font-bold text-white font-[family-name:var(--font-playfair)] text-center px-4">
                    NOTARIES PUBLIC
                  </h3>
                </div>
                <div className="bg-[#8B1538] dark:bg-gradient-to-br dark:from-background dark:to-muted/20 text-white dark:text-muted-foreground p-3 md:p-4 flex-1">
                  <p className="text-xs md:text-sm leading-relaxed">
                    The tradition of Notaries goes back over 2000 years – to the dawn of recorded history. BC Notaries are unique in North America, providing non-contentious legal services to the public.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Contact Us Card */}
            <FadeIn delay={0.5} className="md:col-span-1">
              <div className="h-full overflow-hidden rounded-xl border group hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-28 md:h-32 overflow-hidden flex-shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
                  <h3 className="absolute inset-0 flex items-center justify-center text-lg md:text-xl font-bold text-white font-[family-name:var(--font-playfair)]">
                    CONTACT US
                  </h3>
                </div>
                <div className="bg-[#8B1538] dark:bg-gradient-to-br dark:from-background dark:to-muted/20 text-white dark:text-muted-foreground p-3 md:p-4 flex-1">
                  <p className="text-xs md:text-sm leading-relaxed mb-2">
                    We would love to hear from you regarding any questions or needs you may have about our services.
                  </p>
                  <p className="text-xs md:text-sm leading-relaxed font-semibold">
                    We are open Monday – Friday<br />8:30am – 4:30pm
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary text-primary-foreground w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] px-4">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[600px] text-base sm:text-lg text-primary-foreground/90 px-4">
                For every milestone, Sarah Jenkins Notary Public is here to assist. Contact us today to book your appointment.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto px-4 sm:px-0">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                  <Link href="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                  <a href="tel:555-123-4567">
                    Call 555-123-4567
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
