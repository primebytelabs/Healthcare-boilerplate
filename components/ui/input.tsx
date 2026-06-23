"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  label?: string;
  hint?: string;
  clearable?: boolean;
  onClear?: () => void;
  wrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, error, label, hint, clearable, onClear, wrapperClassName, id, value, onChange, ...props }, ref) => {
    const [focused, setFocused] = React.useState(false);
    const inputId = id || React.useId();

    const handleClear = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (onChange) {
        const fakeEvent = { target: { value: "" } } as React.ChangeEvent<HTMLInputElement>;
        onChange(fakeEvent);
      }
      onClear?.();
    };

    return (
      <div className={cn("w-full", wrapperClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            "relative flex items-center rounded-lg border transition-all duration-150",
            error
              ? "border-destructive"
              : focused
              ? "border-primary ring-1 ring-primary/20"
              : "border-input hover:border-foreground/20",
            "bg-background"
          )}
        >
          {leftIcon && (
            <span className="ml-3 text-muted-foreground shrink-0">
              {leftIcon}
            </span>
          )}
          <input
            id={inputId}
            type={type}
            className={cn(
              "flex h-10 w-full bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground/60 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              leftIcon && "pl-0",
              (rightIcon || clearable) && "pr-0",
              className
            )}
            ref={ref}
            onFocus={(e) => {
              setFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              props.onBlur?.(e);
            }}
            value={value}
            onChange={onChange}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            {...props}
          />
          {clearable && value && (
            <button
              type="button"
              onClick={handleClear}
              className="mr-2 p-0.5 rounded text-muted-foreground hover:text-foreground transition-colors"
              tabIndex={-1}
            >
              <X className="h-4 w-4" />
            </button>
          )}
          {rightIcon && (
            <span className="mr-3 text-muted-foreground shrink-0">
              {rightIcon}
            </span>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="mt-1 text-xs text-destructive" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="mt-1 text-xs text-muted-foreground">
            {hint}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

function SearchInput({
  className,
  ...props
}: Omit<InputProps, "leftIcon">) {
  return (
    <Input
      leftIcon={<Search className="h-4 w-4" />}
      className={cn("pl-0", className)}
      {...props}
    />
  );
}

export { Input, SearchInput };
