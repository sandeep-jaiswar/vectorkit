import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  wrapperClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, wrapperClassName = "", ...props }, ref) => {
    return (
      <div className={`vk-input-wrapper ${wrapperClassName}`.trim()}>
        {label && (
          <label
            className="vk-label-sm"
            style={{ marginBottom: "var(--vk-spacing-8)" }}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`vk-input ${className}`.trim()}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
