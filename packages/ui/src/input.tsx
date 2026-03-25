import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, wrapperClassName = "", ...props }, ref) => {
    return (
      <div className={`vk-input-wrapper ${wrapperClassName}`.trim()}>
        {label ? (
          <label
            className="vk-label-sm"
            style={{ marginBottom: "var(--vk-spacing-8)" }}
          >
            {label}
          </label>
        ) : null}
        <input
          className={`vk-input ${className}`.trim()}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
