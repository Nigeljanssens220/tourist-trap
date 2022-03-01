import AddButton from "@/components/Button/AddButton";
import SubtractButton from "@/components/Button/SubtractButton";
import { FC, useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export interface FormNumberPickerProps
  extends React.HTMLProps<HTMLInputElement> {
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
  const [showTooltip, setShowTooltip] = useState(false);
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
        <div className='flex flex-grow items-center justify-between '>
          {tooltipText ? (
            <div className='flex'>
              <h2 className='font-semibold text-md'>{label}</h2>
              <Tooltip
                title={tooltipText}
                arrow
                open={showTooltip}
                onOpen={() => setShowTooltip(true)}
                onClose={() => setShowTooltip(false)}
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 400 }}
              >
                <button onClick={() => setShowTooltip(!showTooltip)}>
                  <HelpOutlineIcon className='text-xs sm:text-sm pb-1 text-zinc-500 ml-1' />
                </button>
              </Tooltip>
            </div>
          ) : (
            <h2 className='font-semibold text-md'>{label}</h2>
          )}

          <div className='flex flex-col'>
            <div className='flex items-center space-x-3'>
              {number === defaultNumber ? (
                <button disabled onClick={handleSubtractNumber}>
                  <SubtractButton className='text-zinc-200  text-3xl' />
                </button>
              ) : (
                <button onClick={handleSubtractNumber}>
                  <SubtractButton className='text-zinc-700 text-3xl' />
                </button>
              )}
              <div className='text-xl font-medium'>{number}</div>
              {number === 9 ? (
                <button disabled onClick={handleAddNumber}>
                  <AddButton className='text-zinc-200  text-3xl' />
                </button>
              ) : (
                <button onClick={handleAddNumber}>
                  <AddButton className='text-zinc-700  text-3xl' />
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
