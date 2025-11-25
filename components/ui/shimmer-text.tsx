"use client";

import { CSSProperties, FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ShimmerTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
  as?: React.ElementType;
}

export const ShimmerText: FC<ShimmerTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  as: Component = "span",
}) => {
  return (
    <Component
      className={cn(
        "inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-[length:200%_100%] animate-shimmer",
        className
      )}
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
    >
      {children}
    </Component>
  );
};

