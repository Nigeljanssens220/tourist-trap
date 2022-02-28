import AddButton from "@/components/AddButton";
import SubtractButton from "@/components/SubtractButton";
import { FC, useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export interface FormNumberPickerProps
  extends React.HTMLProps<HTMLInputElement> {
  name: string;
  defaultNumber: number;
  label?: string;
}

const FormNumberPicker: FC<FormNumberPickerProps> = ({
  name,
  label,
  defaultNumber,
}) => {
  const [number, setNumber] = useState(defaultNumber);
  const { control, register, setValue } = useFormContext();

  useEffect(() => {
    register(name);
    setValue(name, defaultNumber);
  }, [defaultNumber, name, register, setValue]);

  const handleAddNumber = () => {
    setNumber(number + 1);
    setValue(name, number + 1);
  };

  const handleSubtractNumber = () => {
    setNumber(number - 1);
    setValue(name, number - 1);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <div className='flex flex-grow items-center justify-between space-x-2 space-y-2'>
          <h2 className='font-semibold text-md'>{label}</h2>
          <div className='flex flex-col'>
            <div className='flex items-center space-x-3'>
              {number === 9 ? (
                <button disabled onClick={handleAddNumber}>
                  <AddButton className='text-zinc-200  text-3xl' />
                </button>
              ) : (
                <button onClick={handleAddNumber}>
                  <AddButton className='text-zinc-700  text-3xl' />
                </button>
              )}
              <div className='text-xl font-medium'>{number}</div>
              {number === defaultNumber ? (
                <button disabled onClick={handleSubtractNumber}>
                  <SubtractButton className='text-zinc-200  text-3xl' />
                </button>
              ) : (
                <button onClick={handleSubtractNumber}>
                  <SubtractButton className='text-zinc-700 text-3xl' />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default FormNumberPicker;
