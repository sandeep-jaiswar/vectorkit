import type { ElementType, HTMLAttributes, ReactNode } from "react";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: "headline" | "body" | "label";
  size?: "lg" | "md" | "sm";
  as?: ElementType;
  color?: "default" | "primary" | "secondary" | "neutral" | "muted" | "danger";
}

export function Typography({
  children,
  className = "",
  variant = "body",
  size = "lg",
  as,
  color = "default",
  ...other
}: TypographyProps): JSX.Element {
  // Determine default element type based on variant
  let defaultElement: ElementType = "span";
  if (variant === "headline") defaultElement = "h1";
  if (variant === "body") defaultElement = "p";

  const Component = as || defaultElement;

  return (
    <Component
      className={`vk-typography ${className}`.trim()}
      data-color={color}
      data-size={size}
      data-variant={variant}
      {...other}
    >
      {children}
    </Component>
  );
}

Typography.displayName = "Typography";
