import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: "primary" | "secondary" | "neutral" | "danger";
  shape?: "default" | "square" | "circle";
  variant?: "solid" | "outlined" | "ghost";
}

export function Button({
  children,
  className = "",
  color = "primary",
  shape = "default",
  variant = "solid",
  ...other
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`vk-btn ${className}`.trim()}
      data-color={color}
      data-shape={shape}
      data-variant={variant}
      type="button"
      {...other}
    >
      {typeof children === "string" || typeof children === "number" ? (
        <span>{children}</span>
      ) : (
        children
      )}
    </button>
  );
}

Button.displayName = "Button";
