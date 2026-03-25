import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <div className={`vk-card ${className}`.trim()} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export const CardGroup = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <div className={`vk-card-group ${className}`.trim()} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);

CardGroup.displayName = "CardGroup";
