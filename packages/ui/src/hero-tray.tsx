import React from "react";

export interface HeroTrayProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const HeroTray = React.forwardRef<HTMLDivElement, HeroTrayProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <div ref={ref} className={`vk-hero-tray ${className}`.trim()} {...props}>
        {children}
      </div>
    );
  },
);

HeroTray.displayName = "HeroTray";
