import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  full?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  full,
  ...other
}) => {
  return (
    <button
      {...other}
      onClick={onClick}
      className={[
        className,
        full ? "w-full" : "min-w-[130px]",
        "shadow-lg py-[0.5rem] px-5 rounded cursor-pointer select-none",
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
