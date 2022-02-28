import React, { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";

export interface FormTextFieldProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  className?: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
}
const FormTextFieldAutoComplete: FC<FormTextFieldProps> = ({
  name,
  className,
  placeholder,
  error,
  helperText,
  ...rest
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const style = {
    control: (base: any) => ({
      ...base,
      border: 0,
      // This line disables the blue border
      boxShadow: "none",
    }),
  };

  return (
    <Controller
      name={name}
      control={control}
      required={true}
      render={({ field }) => (
        <div className='flex border  border-black rounded items-center md:w-56'>
          <Select
            {...field}
            className='flex-grow py-2 px-1'
            styles={style}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: "black",
                primary50: "lightgray",
                primary25: "lightgray",
              },
              color: {
                primary: "black",
                primary50: "white",
                primary25: "white",
              },
            })}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            isClearable={true}
            placeholder={placeholder}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
              { value: "vanilla", label: "Vanilla" },
              { value: "vanilla", label: "Vanilla" },
              { value: "vanilla", label: "Vanilla" },
              { value: "vanilla", label: "Vanilla" },
              { value: "vanilla", label: "Vanilla" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        </div>
      )}
      {...rest}
    />
  );
};

export default FormTextFieldAutoComplete;
