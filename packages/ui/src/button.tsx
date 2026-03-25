export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...other
}: ButtonProps): JSX.Element {
  const baseClass = "vk-btn";
  const variantClass = `vk-btn--${variant}`;

  return (
    <button
      type="button"
      className={`${baseClass} ${variantClass} ${className}`.trim()}
      {...other}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
