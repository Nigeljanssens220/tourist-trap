import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";
import { Controller, useFormContext } from "react-hook-form";

export interface FormDateRangePickerProps
  extends React.HTMLProps<HTMLInputElement> {
  name: string;
  placeholder?: string;
}

const FormDateRangePicker: FC<FormDateRangePickerProps> = ({
  name,
  placeholder,
}) => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  const { control, register } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            {...field}
            startText='Departure date'
            endText='Arrival date'
            minDate={new Date()}
            value={value}
            onChange={(e) => {
              field.onChange(e);
              setValue(e);
            }}
            clearable
            inputFormat='dd/MM/yyyy'
            renderInput={(startProps, endProps) => (
              <div className='flex flex-grow  justify-evenly items-center space-x-2 lg:space-x-5'>
                <div className='p-1 pl-4 w-full pt-2 outline-none rounded-sm bg-white shadow-md max-w-md'>
                  <TextField
                    variant='standard'
                    className='bg-transparent w-full'
                    {...startProps}
                    InputLabelProps={{
                      shrink: true,
                      style: { color: "gray" },
                    }}
                    InputProps={{
                      // disableUnderline: true,
                      style: { color: "black" },
                    }}
                  />
                </div>
                <div className='p-1 pl-4 w-full pt-2 outline-none rounded-sm bg-white shadow-md max-w-md'>
                  <TextField
                    variant='standard'
                    className='bg-transparent w-full'
                    {...endProps}
                    InputLabelProps={{
                      shrink: true,
                      style: { color: "gray" },
                    }}
                    InputProps={{
                      // disableUnderline: true,
                      style: { color: "black" },
                    }}
                  />
                </div>
              </div>
            )}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default FormDateRangePicker;
