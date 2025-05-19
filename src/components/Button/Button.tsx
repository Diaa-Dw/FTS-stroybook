import { Spinner } from "../";
import { ButtonContent, StyledButton } from "./Button.style";
import type { ButtonProps } from "./Button.type";

const Button = ({
  children,
  variant = "solid",
  size = "md",
  color = "primary",
  loading = false,
  disabled,
  startDecorator,
  endDecorator,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <StyledButton
      variant={variant}
      size={size}
      color={color}
      disabled={isDisabled}
      {...props}
    >
      <ButtonContent>
        {loading ? <Spinner /> : startDecorator}
        <span>{children}</span>
        {endDecorator}
      </ButtonContent>
    </StyledButton>
  );
};

export default Button;
