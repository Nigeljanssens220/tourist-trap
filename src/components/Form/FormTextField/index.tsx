import React, { FC, ReactElement } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export interface FormAutocompleteOptionsProps {
  city: string;
  country: string;
}

export interface FormTextFieldProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  type: string;
  className?: string;
  placeholder?: string;
  children?: ReactElement<HTMLInputElement>;
  error?: string;
  helperText?: string;
  options?: FormAutocompleteOptionsProps[];
}
const FormTextField: FC<FormTextFieldProps> = ({
  id,
  type,
  className,
  placeholder,
  children,
  error,
  helperText,
  options,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className='bg-zinc-800, my-3 rounded p-2 text-xl flex justify-between border border-zinc-700 hover:border-zinc-600'>

      {options && 
      <Autocomplete
        id={id}
        {...register(id)}
        {...rest}
        freeSolo
        autoHighlight
        clearOnEscape
        autoSelect
        options={options.map((option) => option.city}
        renderInput={() => (
          <TextField
          type={type}
          InputProps={{
            className: "text-gray-100 rounded outline-none border flex-1 appearance-none w-full py-2 px-4 bg-zinc-700 placeholder-gray-100 text-base focus:outline-none focus:ring-2 focus:ring-zinc-600 "
          }}
          />
        )}
      />
        }
    </div>
  );
};

export default FormTextField;
// <input
// {...register(id)}
// {...rest}
// type={type}
// className={classNames(
//   className,
//   "text-gray-100 rounded outline-none border flex-1 appearance-none w-full py-2 px-4 bg-zinc-700 placeholder-gray-100 text-base focus:outline-none focus:ring-2 focus:ring-zinc-600 "
// )}
// placeholder={placeholder}
// />