import React, { FC, ReactElement } from "react";
import classNames from "classnames";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  className: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<ButtonProps> = ({ className, type, onClick, children }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={classNames(
          className,
          "py-2 px-4 hover:bg-zinc-800 transition ease-in duration-100 text-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded-md"
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
