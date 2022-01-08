import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  name?: string;
};

function Button({ name = "", ...props }: ButtonProps) {
  return <button {...props}>{name}</button>;
}
export { Button };
