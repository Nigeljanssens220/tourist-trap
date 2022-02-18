import React, { FC, useEffect } from "react";
import { useFormContext, useForm } from "react-hook-form";
import Typography from "@/components/Typography";
import classNames from "classnames";

export interface FormTextFieldProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  helperText?: any;
  type?: string;
  placeholder?: string;
  className?: string;
}

const FormTextField: FC<FormTextFieldProps> = ({
  name,
  label,
  error,
  helperText,
  type,
  placeholder,
  className,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  // Pass unregister here if needed.
  // Maybe one-way flight versus return flight checkbox.
  // useEffect(() => {
  //   return () => {
  //     unregister(name);
  //   };
  // }, [unregister, name]);

  const inputClassName = classNames(
    className,
    "bg-[#363636] placeholder-white hover:border-skobeloff outline-none ml-6 w-full text-2xl"
  );

  console.log(
    classNames(
      className,
      "bg-[#363636] placeholder-transparent text-white outline-none ml-6 w-full text-2xl"
    )
  );
  return (
    <>
      <Typography weight="bold" variant="h1" className="text-red">
        {label}
        test
      </Typography>
      <div
        className={classNames(
          "bg-[#20242A] my-3 rounded-2xl p-2 text-3xl flex justify-between border border-red",
          errors[name]
            ? "border-liver hover:border-liver focus:border-liver active:focus:border-liver"
            : "border-space-secondary hover:border-skobeloff"
        )}
      >
        <input
          {...register(name)}
          {...rest}
          type={type}
          className={inputClassName}
          placeholder={placeholder}
        />
        <div className={inputClassName}>{inputClassName}</div>
      </div>
      {/* {!!errors[name] ? (
        <FormFieldHelperText className='!text-red'>
          {errors[name].message}
        </FormFieldHelperText>
      ) : error ? (
        <FormFieldHelperText className='!text-red'>{error}</FormFieldHelperText>
      ) : typeof helperText === "string" ? (
        <FormFieldHelperText>{helperText}</FormFieldHelperText>
      ) : (
        helperText
      )} */}
    </>
  );
};

export default FormTextField;
