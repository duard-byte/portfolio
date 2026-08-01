import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
};

export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={cn("marquee", className)}>
      <div className="marquee-track">
        {/* Original */}
        <div className="marquee-group">{children}</div>

        {/* Duplicate for seamless loop */}
        <div className="marquee-group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
