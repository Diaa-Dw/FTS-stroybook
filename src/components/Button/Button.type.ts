import type { ButtonHTMLAttributes, ReactNode } from "react";

export type Variant = "solid" | "outlined" | "soft" | "plain";
export type Size = "sm" | "md" | "lg";
export type Color = "primary" | "neutral" | "danger" | "success" | "warning";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  color?: Color;
  loading?: boolean;
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
}
