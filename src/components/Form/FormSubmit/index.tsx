import React, { FC } from "react";
import FlightIcon from "@mui/icons-material/Flight";

export interface FormSubmitProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

const FormSubmit: FC<FormSubmitProps> = ({ label }) => {
  return (
    <div className='flex rounded bg-black items-center hover:bg-zinc-800 active:ring active:ring-zinc-500'>
      <button
        type='submit'
        className='flex items-center justify-center rounded  text-white w-full cursor-pointer '
      >
        <h2 className='font-medium'>{label}</h2>
        <FlightIcon className='text-white w-8 h-8 ml-4 my-2' />
      </button>
    </div>
  );
};

export default FormSubmit;
