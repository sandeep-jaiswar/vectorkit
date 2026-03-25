"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  createContext,
  useContext,
  type ReactNode,
  type KeyboardEvent,
} from "react";

export interface DropdownProps {
  children: ReactNode;
}

export interface DropdownTriggerProps {
  children: ReactNode;
}

export interface DropdownMenuProps {
  align?: "left" | "right";
  children: ReactNode;
}

export interface DropdownItemProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const DropdownContext = createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLDivElement>;
} | null>(null);

export function Dropdown({ children }: DropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, triggerRef }}>
      <div className="vk-dropdown" ref={triggerRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownTrigger({
  children,
}: DropdownTriggerProps): JSX.Element {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownTrigger must be used within Dropdown");

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      context.setIsOpen(!context.isOpen);
    }
  };

  return (
    <div
      className="vk-dropdown-trigger"
      data-state={context.isOpen ? "open" : "closed"}
      onClick={(): void => {
        context.setIsOpen(!context.isOpen);
      }}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export function DropdownMenu({
  align = "left",
  children,
}: DropdownMenuProps): JSX.Element | null {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownMenu must be used within Dropdown");

  if (!context.isOpen) return null;

  return (
    <div
      className="vk-dropdown-menu"
      data-align={align}
      data-state="open"
      role="menu"
    >
      {children}
    </div>
  );
}

export function DropdownItem({
  children,
  disabled,
  onClick,
}: DropdownItemProps): JSX.Element {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownItem must be used within Dropdown");

  const handleClick = useCallback((): void => {
    if (disabled) return;
    onClick?.();
    context.setIsOpen(false);
  }, [onClick, disabled, context]);

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className="vk-dropdown-item"
      data-disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
    >
      {children}
    </div>
  );
}

Dropdown.displayName = "Dropdown";
DropdownTrigger.displayName = "DropdownTrigger";
DropdownMenu.displayName = "DropdownMenu";
DropdownItem.displayName = "DropdownItem";
