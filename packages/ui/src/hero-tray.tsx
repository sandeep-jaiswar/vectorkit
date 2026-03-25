import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export interface HeroTrayProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const HeroTray = forwardRef<HTMLDivElement, HeroTrayProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <div className={`vk-hero-tray ${className}`.trim()} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);

HeroTray.displayName = "HeroTray";
