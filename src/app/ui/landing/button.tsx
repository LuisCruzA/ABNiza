'use client'
import { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonProps = {
    children: ReactNode;
    className?:string;
  } & ButtonHTMLAttributes<HTMLButtonElement>;

  export default function Button({ children,className="", ...props }: ButtonProps) {
    return (
      <button type="button"className={`cursor-pointer  px-4 py-2 rounded ${className}`} {...props}>
        {children}
      </button>
    );
  }