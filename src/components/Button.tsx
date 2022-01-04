import React from "react";

export interface ButtonProps {
  children?: any;
}

export const Button: React.FC<ButtonProps> = ({ children }: ButtonProps) => {
  return <button type="button">{children}</button>;
};
