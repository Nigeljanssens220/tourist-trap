import React, { FC, ReactElement } from "react";
import classNames from "classnames";
import { signIn, signOut } from "next-auth/react";

export interface LoginButtonProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  className: string;
  loginState: boolean;
  children?: ReactElement<HTMLInputElement>;
}

const LoginButton: FC<LoginButtonProps> = ({
  name,
  className,
  loginState,
  children,
}) => {
  return (
    <div>
      <button
        onClick={() => {
          loginState ? signOut() : signIn();
        }}
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

export default LoginButton;
