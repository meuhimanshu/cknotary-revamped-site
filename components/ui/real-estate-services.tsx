"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Home, TrendingUp, Repeat, Users as UsersIcon, Building, FileSignature, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  extraInfo?: {
    title: string;
    content: string;
  };
  image: string;
  link: string;
}

const services: Service[] = [
  {
    id: "property-purchases",
    title: "Property Purchases",
    description: "Complete handling for buying property",
    icon: <Home className="h-6 w-6" />,
    details: [
      "Review and explain all purchase documents",
      "Title search and property verification",
      "Handle all registration with Land Title Office",
      "Coordinate with lenders and realtors",
      "Ensure smooth closing on possession date",
      "Expert guidance for first-time buyers",
    ],
    extraInfo: {
      title: "First-time buyer?",
      content: "We'll walk you through every step of the process and ensure you understand all documents before signing. Your home purchase should be exciting, not stressful.",
    },
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
    link: "/contact",
  },
  {
    id: "property-sales",
    title: "Property Sales",
    description: "Smooth transfer when selling property",
    icon: <TrendingUp className="h-6 w-6" />,
    details: [
      "Prepare all required legal documents",
      "Calculate and arrange property transfer tax",
      "Clear any charges or encumbrances",
      "Coordinate with buyers' lawyers/notaries",
      "Ensure timely completion of sale",
      "Handle all funds disbursement",
    ],
    extraInfo: {
      title: "Selling your home?",
      content: "We ensure all legal requirements are met and your sale proceeds smoothly. Contact us as soon as you have an accepted offer.",
    },
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop",
    link: "/contact",
  },
  {
    id: "mortgage-refinancing",
    title: "Mortgage Refinancing",
    description: "Documentation for refinancing mortgages",
    icon: <Repeat className="h-6 w-6" />,
    details: [
      "Prepare new mortgage documents",
      "Discharge existing mortgages",
      "Register new charges with Land Title",
      "Coordinate with lenders",
      "Review terms and obligations",
      "Quick turnaround times",
    ],
    extraInfo: {
      title: "Better rates available?",
      content: "Refinancing can save you thousands. We'll handle all the legal paperwork efficiently so you can take advantage of lower rates.",
    },
    image: "https://images.unsplash.com/photo-1554224311-beee4c91c3f3?w=800&auto=format&fit=crop",
    link: "/contact",
  },
  {
    id: "property-transfers",
    title: "Property Transfers",
    description: "Transfers between family or to executors",
    icon: <UsersIcon className="h-6 w-6" />,
    details: [
      "Transfers to surviving joint tenants",
      "Transfers from estates to beneficiaries",
      "Family transfers and gifting",
      "Remove or add names to title",
      "Minimize transfer costs where possible",
      "Clear title for all parties",
    ],
    extraInfo: {
      title: "Family matters:",
      content: "Whether transferring property after a death or gifting to family members, we ensure the process is handled with care and efficiency.",
    },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
    link: "/contact",
  },
  {
    id: "manufactured-homes",
    title: "Manufactured Homes",
    description: "Specialized mobile home transactions",
    icon: <Building className="h-6 w-6" />,
    details: [
      "Sales and purchases of manufactured homes",
      "Registration with BC Registry Services",
      "Pad tenancy agreements",
      "Title verification and searches",
      "Lien checks and clearances",
      "Expert knowledge of manufactured home law",
    ],
    extraInfo: {
      title: "Manufactured homes are different:",
      content: "These properties require specialized knowledge and different registration processes. We have the expertise to handle your transaction correctly.",
    },
    image: "https://images.unsplash.com/photo-1584622781867-8789f7946a96?w=800&auto=format&fit=crop",
    link: "/contact",
  },
  {
    id: "covenants-easements",
    title: "Covenants & Easements",
    description: "Registration of property restrictions",
    icon: <FileSignature className="h-6 w-6" />,
    details: [
      "Restrictive covenants registration",
      "Easements and rights of way",
      "Statutory building schemes",
      "Review and interpretation",
      "Ensure compliance with regulations",
      "Protect your property interests",
    ],
    extraInfo: {
      title: "Know your rights:",
      content: "Understanding covenants and easements is crucial. We'll explain how they affect your property and ensure proper registration.",
    },
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop",
    link: "/contact",
  },
];

const carouselImages = [
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554224311-beee4c91c3f3?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
];

export function RealEstateServices() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate carousel when nothing is expanded
  useEffect(() => {
    if (expandedId === null) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [expandedId]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getDisplayImage = () => {
    if (expandedId) {
      const service = services.find((s) => s.id === expandedId);
      return service?.image || carouselImages[0];
    }
    return carouselImages[currentImageIndex];
  };

  return (
    <div className="w-full">
      {/* Desktop Layout */}
      <div className="hidden lg:flex gap-4 min-h-[600px]">
        {/* Left Side - Services */}
        <div className="flex-shrink-0 space-y-3 relative" style={{ width: expandedId ? '730px' : '280px' }}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative"
            >
              {/* Service Card - Fixed Position */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border-2 rounded-lg cursor-pointer transition-all duration-300 w-[280px] relative z-10 ${
                  expandedId === service.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50 bg-background"
                }`}
                onClick={() => toggleExpand(service.id)}
              >
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm truncate">{service.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === service.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-2"
                  >
                    <ChevronRight className="h-5 w-5 text-primary" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Expanded Content - Absolute positioned to not affect other cards */}
              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 450, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute left-[280px] top-0 overflow-hidden z-20"
                    style={{ height: 'auto' }}
                  >
                    <div className="w-[450px] pl-4">
                      <div className="bg-background/95 backdrop-blur-sm border-2 border-primary rounded-lg p-4 shadow-xl">
                        <h4 className="font-semibold text-lg mb-3 text-primary">
                          {service.title}
                        </h4>
                        <div className="max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                          <ul className="space-y-2 mb-4">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                          {service.extraInfo && (
                            <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                              <p className="text-sm font-semibold text-primary mb-1">
                                {service.extraInfo.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {service.extraInfo.content}
                              </p>
                            </div>
                          )}
                          <Button asChild size="sm" className="w-full">
                            <Link href={service.link}>Contact Us →</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right Side - Carousel - Dynamically resizes */}
        <motion.div 
          className="flex-1 relative min-w-0"
          animate={{ 
            marginLeft: expandedId ? '0px' : '0px'
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="sticky top-8">
            <motion.div
              className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={getDisplayImage()}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="absolute inset-0"
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700"
                    style={{
                      backgroundImage: `url('${getDisplayImage()}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Image indicators */}
              {expandedId === null && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {carouselImages.map((_, idx) => (
                    <motion.div
                      key={idx}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === currentImageIndex
                          ? "w-8 bg-white"
                          : "w-2 bg-white/50"
                      }`}
                      onClick={() => setCurrentImageIndex(idx)}
                    />
                  ))}
                </div>
              )}

              {/* Service name overlay when expanded */}
              {expandedId && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute bottom-6 left-6 right-6 text-white z-10"
                >
                  <h3 className="text-3xl font-bold mb-2">
                    {services.find((s) => s.id === expandedId)?.title}
                  </h3>
                  <p className="text-lg opacity-90">
                    {services.find((s) => s.id === expandedId)?.description}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-2 rounded-lg overflow-hidden"
          >
            {/* Service Header */}
            <div
              className="flex items-center justify-between p-4 cursor-pointer bg-background hover:bg-muted/50 transition-colors"
              onClick={() => toggleExpand(service.id)}
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base">{service.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {service.description}
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedId === service.id ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 ml-2"
              >
                <ChevronRight className="h-5 w-5 text-primary" />
              </motion.div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedId === service.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${service.image}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Details */}
                  <div className="p-4 bg-muted/30">
                    <ul className="space-y-2 mb-4">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    {service.extraInfo && (
                      <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                        <p className="text-sm font-semibold text-primary mb-1">
                          {service.extraInfo.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {service.extraInfo.content}
                        </p>
                      </div>
                    )}
                    <Button asChild size="sm" className="w-full">
                      <Link href={service.link}>Contact Us →</Link>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

