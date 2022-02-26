import React, { FC, ReactElement } from "react";
import classNames from "classnames";

export interface FormTextFieldProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  className?: string;
  placeholder?: string;
  children?: ReactElement<HTMLInputElement>;
}
const FormTextField: FC<FormTextFieldProps> = ({
  id,
  className,
  placeholder = "",
  children,
}) => {
  return (
    <div>
      <input
        type="text"
        id={id}
        className={classNames(
          className,
          "text-gray-100 rounded outline-none border border-zinc-700  flex-1 appearance-none w-full py-2 px-4 bg-zinc-700 placeholder-gray-100 text-base focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        )}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormTextField;
