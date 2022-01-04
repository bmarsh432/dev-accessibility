import React from "react";

export interface TextInputProps {
  type: string;
  labelText?: string;
  id?: string;
}

export const Input: React.FC<TextInputProps> = ({ type, labelText, id }: TextInputProps) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input type={type} id={id} name={id} />
    </>
  );
};
