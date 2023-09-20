import { PropsWithChildren } from "react";

export interface ButtonProps {
  variant?: "primary" | "accent" | "success" | "danger";
  onClick?: () => void;
}

export function Button({
  children,
  variant,
  onClick,
}: PropsWithChildren<ButtonProps>) {
  const buttonVariant = () => {
    switch (variant) {
      case "primary":
        return "bg-primaryColor";
      case "accent":
        return "bg-accentColor";
      case "success":
        return "bg-successColor";
      case "danger":
        return "bg-dangerColor";
    }
  };

  return (
    <button
      className={`${buttonVariant()} py-2 px-4 rounded-md shadow-md text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
