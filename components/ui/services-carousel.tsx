"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

export const ServicesCarousel = ({ children, className }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={cn("relative w-full", className)}>
      {/* Carousel Container with proper overflow handling */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex items-stretch gap-4 md:gap-5 touch-pan-y px-2 sm:px-4">{children}</div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 px-4">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className="rounded-full h-10 w-10 sm:h-12 sm:w-12 border-2 hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-30 flex-shrink-0"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex gap-2 flex-wrap justify-center">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0",
                index === selectedIndex
                  ? "bg-primary w-6 sm:w-8"
                  : "bg-primary/30 hover:bg-primary/50"
              )}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className="rounded-full h-10 w-10 sm:h-12 sm:w-12 border-2 hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-30 flex-shrink-0"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </div>
    </div>
  );
};

export const CarouselItem = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("flex-[0_0_calc(100%-16px)] min-w-0 md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-16px)] flex", className)}>
      {children}
    </div>
  );
};

