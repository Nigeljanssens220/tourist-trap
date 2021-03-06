import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";
import { Controller, useFormContext } from "react-hook-form";

export interface FormDateRangePickerProps
  extends React.HTMLProps<HTMLInputElement> {
  name: string;
}

const FormDateRangePicker: FC<FormDateRangePickerProps> = ({ name }) => {
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
            startText="Departure date"
            endText="Return date"
            minDate={new Date()}
            value={value}
            onChange={(e) => {
              field.onChange(e);
              setValue(e);
            }}
            clearable
            inputFormat="dd/MM/yyyy"
            renderInput={(startProps, endProps) => (
              <div className="flex flex-grow justify-evenly items-center space-x-2 gap-2 lg:space-x-2">
                <div className="p-1 pl-4 w-full pt-3 outline-none rounded-sm bg-white shadow-md ">
                  <TextField
                    {...startProps}
                    variant="standard"
                    className="bg-transparent w-full"
                    InputLabelProps={{
                      shrink: true,
                      style: { color: "gray" },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: { color: "black" },
                    }}
                  />
                </div>
                <div className="p-1 pl-4 w-full pt-3 outline-none rounded-sm bg-white shadow-md max-w-md">
                  <TextField
                    {...endProps}
                    variant="standard"
                    className="bg-transparent w-full"
                    InputLabelProps={{
                      shrink: true,
                      style: { color: "gray" },
                    }}
                    InputProps={{
                      disableUnderline: true,
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
