import CustomTooltip from "@/components/Tooltip";
import React, { FC, useCallback, useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import SubtractIcon from "@/components/Icon/SubtractIcon";
import AddIcon from "@/components/Icon/AddIcon";

export interface FormNumberPickerProps {
  name: string;
  defaultNumber: number;
  label?: string;
  tooltipText?: string;
}

const FormNumberPicker: FC<FormNumberPickerProps> = ({
  name,
  label,
  defaultNumber,
  tooltipText,
}) => {
  const [number, setNumber] = useState(defaultNumber);
  const { control, register, setValue } = useFormContext();

  useEffect(() => {
    register(name);
    setValue(name, defaultNumber);
  }, [defaultNumber, name, register, setValue]);

  const handleAddNumber = useCallback(
    async (event: React.FormEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setNumber(number + 1);
      setValue(name, number + 1);
    },
    [setNumber, setValue, name, number]
  );

  const handleSubtractNumber = useCallback(
    (event: React.FormEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setNumber(number - 1);
      setValue(name, number - 1);
    },
    [setNumber, setValue, name, number]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <div className="flex flex-grow items-center justify-between ">
          {tooltipText ? (
            <div className="flex">
              <h2 className="font-semibold text-md">{label}</h2>
              <CustomTooltip tooltipText={tooltipText} />
            </div>
          ) : (
            <h2 className="font-semibold text-md">{label}</h2>
          )}

          <div className="flex flex-col">
            <div className="flex items-center space-x-3">
              {number === defaultNumber ? (
                <button disabled onClick={handleSubtractNumber}>
                  <SubtractIcon className="text-zinc-200  text-3xl" />
                </button>
              ) : (
                <button onClick={handleSubtractNumber}>
                  <SubtractIcon className="text-zinc-700 text-3xl" />
                </button>
              )}
              <div className="text-xl font-medium">{number}</div>
              {number === 9 ? (
                <button disabled onClick={handleAddNumber}>
                  <AddIcon className="text-zinc-200  text-3xl" />
                </button>
              ) : (
                <button onClick={handleAddNumber}>
                  <AddIcon className="text-zinc-700  text-3xl" />
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
