"use client";

import React from "react";
import { motion } from "framer-motion";

export const HeroBackgroundElements = () => {
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by only rendering particles on client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Fixed positions for particles (deterministic)
  const particlePositions = [
    { left: "10%", top: "20%" },
    { left: "25%", top: "80%" },
    { left: "40%", top: "15%" },
    { left: "55%", top: "70%" },
    { left: "70%", top: "25%" },
    { left: "85%", top: "60%" },
    { left: "15%", top: "45%" },
    { left: "90%", top: "35%" },
    { left: "30%", top: "90%" },
    { left: "60%", top: "10%" },
    { left: "45%", top: "55%" },
    { left: "75%", top: "85%" },
    { left: "20%", top: "65%" },
    { left: "80%", top: "40%" },
    { left: "50%", top: "75%" },
  ];

  // Strategic image positions
  const decorativeImages = [
    {
      src: "/notary-seal.png",
      alt: "Notary Seal",
      position: { left: "8%", top: "15%" },
      size: "w-20 h-20 md:w-28 md:h-28",
      animation: { duration: 25, delay: 0 },
      rotation: true
    },
    {
      src: "/notary-seal.png",
      alt: "Notary Seal",
      position: { right: "10%", top: "60%" },
      size: "w-16 h-16 md:w-24 md:h-24",
      animation: { duration: 30, delay: 2 },
      rotation: true
    },
    {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop",
      alt: "Document signing",
      position: { left: "5%", bottom: "10%" },
      size: "w-32 h-20 md:w-48 md:h-32",
      animation: { duration: 20, delay: 1 },
      rotation: false
    },
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop",
      alt: "Real Estate",
      position: { right: "8%", top: "20%" },
      size: "w-28 h-20 md:w-40 md:h-28",
      animation: { duration: 22, delay: 3 },
      rotation: false
    },
  ];

  return (
    <>
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-[#B8941F]/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-[#D4AF37] rounded-lg"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.08, 0.1, 0.05],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-24 h-24 border-2 border-[#FFD700] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.08, 0.1, 0.08, 0.04],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-40 h-40 border-2 border-[#B8941F]"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.1, 0.12, 0.1, 0.06],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Subtle Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Animated Lines/Connections */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.line
          x1="10%"
          y1="20%"
          x2="40%"
          y2="50%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 0.5, 1, 0.5, 0],
            opacity: [0, 0.3, 0.5, 0.3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
        <motion.line
          x1="90%"
          y1="30%"
          x2="60%"
          y2="60%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 0.5, 1, 0.5, 0],
            opacity: [0, 0.3, 0.5, 0.3, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
      </svg>

      {/* Floating Particles - Only render after mount to avoid hydration issues */}
      {mounted && particlePositions.map((position, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
          style={{
            left: position.left,
            top: position.top,
          }}
          animate={{
            y: [0, -30, -60, -90, -120],
            opacity: [0, 0.2, 0.4, 0.5, 0.4, 0.2, 0],
            scale: [0, 0.5, 1, 1.2, 1, 0.5, 0],
          }}
          transition={{
            duration: 6 + (i * 0.3),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
            times: [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1],
          }}
        />
      ))}

      {/* Strategic Decorative Images */}
      {mounted && decorativeImages.map((img, i) => (
        <motion.div
          key={`decorative-img-${i}`}
          className={`absolute ${img.size} opacity-0`}
          style={{
            ...img.position,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.15, 0.2, 0.15, 0],
            scale: [0.8, 1, 1.05, 1, 0.8],
            rotate: img.rotation ? [0, 360] : 0,
            y: [0, -20, 0, 20, 0],
          }}
          transition={{
            duration: img.animation.duration,
            delay: img.animation.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative w-full h-full">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-[#D4AF37]/20"
              style={{
                filter: "brightness(0.9) contrast(1.1) saturate(0.8)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-lg" />
          </div>
        </motion.div>
      ))}

      {/* Additional Floating Document Icons */}
      {mounted && (
        <>
          {/* Document Icon 1 */}
          <motion.div
            className="absolute left-[15%] top-[35%] opacity-0"
            animate={{
              opacity: [0, 0.1, 0.15, 0.1, 0],
              y: [0, -50, -100],
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <svg
              className="w-12 h-12 md:w-16 md:h-16 text-[#D4AF37]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>

          {/* Document Icon 2 */}
          <motion.div
            className="absolute right-[18%] top-[45%] opacity-0"
            animate={{
              opacity: [0, 0.08, 0.12, 0.08, 0],
              y: [0, 40, 80],
              rotate: [0, -15, 0, 15, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
          >
            <svg
              className="w-10 h-10 md:w-14 md:h-14 text-[#D4AF37]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
              <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
          </motion.div>

          {/* Pen Icon */}
          <motion.div
            className="absolute left-[70%] bottom-[20%] opacity-0"
            animate={{
              opacity: [0, 0.1, 0.15, 0.1, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          >
            <svg
              className="w-10 h-10 md:w-12 md:h-12 text-[#D4AF37]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </motion.div>

          {/* Stamp Icon */}
          <motion.div
            className="absolute right-[25%] bottom-[15%] opacity-0"
            animate={{
              opacity: [0, 0.12, 0.18, 0.12, 0],
              scale: [0.9, 1.1, 0.9],
              rotate: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          >
            <svg
              className="w-10 h-10 md:w-14 md:h-14 text-[#D4AF37]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        </>
      )}
    </>
  );
};

