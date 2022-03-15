import React, { FC, ReactElement } from "react";
import classNames from "classnames";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  className: string;
  name?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<ButtonProps> = ({
  name,
  className,
  type,
  onClick,
  children,
}) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={classNames(
          className,
          "py-2 px-4 hover:bg-zinc-800 mb-1 mr-4 transition ease-in duration-100 text-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded-md"
        )}
      >
        {name}
      </button>
      {children}
    </div>
  );
};

export default Button;
