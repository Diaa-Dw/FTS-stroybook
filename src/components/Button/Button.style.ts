import styled, { css } from "styled-components";
import type { Variant, Size, Color } from "./Button.type";

const colorMap: Record<Color, string> = {
  primary: "#13407a",
  neutral: "#3e4042",
  danger: "#7a0000",
  success: "#1f4d1f",
  warning: "#7a4700",
};

const variantStyles = {
  solid: css`
    background-color: var(--color);
    color: white;
    border: 1px solid var(--color);
  `,
  outlined: css`
    background: transparent;
    border: 2px solid var(--color);
    color: var(--color);
  `,
  soft: css`
    background-color: color-mix(in srgb, var(--color) 80%, transparent);
    color: rgb(255, 255, 255);
    border: none;
  `,
  plain: css`
    background: transparent;
    color: var(--color);
    border: none;

    &:hover {
      span {
        border-bottom: 1px solid var(--color);
      }
    }
  `,
};

const sizeStyles = {
  sm: css`
    padding: 4px 12px;
    font-size: 1.2rem;
  `,

  md: css`
    padding: 6px 16px;
    font-size: 1.4rem;
  `,

  lg: css`
    padding: 8px 20px;
    font-size: 1.6rem;
  `,
};

export const StyledButton = styled.button<{
  variant: Variant;
  size: Size;
  color: Color;
}>`
  --color: ${({ color }) => colorMap[color]};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${({ variant }) => variantStyles[variant]}

  ${({ size }) => sizeStyles[size]}

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ variant }) =>
    variant !== "plain" &&
    `
    &:hover {
      transform: translateY(-1px);
    }
    &:active {
      transform: translateY(1px);
    }
    `}
`;

export const ButtonContent = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid transparent;
  transition: border 0.3s ease-in-out;
`;
