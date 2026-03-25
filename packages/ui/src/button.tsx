import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
}

export function Button({
  children,
  className = "",
  variant = "primary",
  ...other
}: ButtonProps): JSX.Element {
  const baseClass = "vk-btn";
  const variantClass = `vk-btn--${variant}`;

  return (
    <button
      className={`${baseClass} ${variantClass} ${className}`.trim()}
      type="button"
      {...other}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
