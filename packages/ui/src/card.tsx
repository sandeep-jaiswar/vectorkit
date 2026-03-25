import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <div ref={ref} className={`vk-card ${className}`.trim()} {...props}>
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export const CardGroup = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <div ref={ref} className={`vk-card-group ${className}`.trim()} {...props}>
        {children}
      </div>
    );
  },
);

CardGroup.displayName = "CardGroup";
