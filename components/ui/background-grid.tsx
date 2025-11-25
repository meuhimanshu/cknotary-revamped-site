import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundGrid = ({
  className,
  containerClassName,
}: {
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
          className
        )}
      >
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px]" />
      </div>
    </div>
  );
};

