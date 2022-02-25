import React, { FC } from "react";
import classNames from "classnames";
import TextField from "@mui/material/TextField";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";

export interface FormDateFieldProps extends React.HTMLProps<HTMLInputElement> {
  today: Date;
  tomorrow: Date;
}

const FormDateRangePicker: FC<FormDateFieldProps> = ({ today, tomorrow }) => {
  const [dateRange, setDateRange] = React.useState<DateRange<Date>>([
    today,
    tomorrow,
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        disablePast
        startText=''
        endText=''
        value={dateRange}
        onChange={(newValue) => {
          setDateRange(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <div className='flex space-x-4 items-center'>
              <TextField
                {...startProps}
                disableAnimation={true}
                InputProps={{
                  className:
                    "text-gray-100 border border-zinc-700 bg-zinc-700 hover:border-zinc-700 hover:outline-none focus:border-zinc-600 focus:border-white",
                }}
                InputLabelProps={{ shrink: true }}
              />
              <Box className='text-gray-100 text-lg'>To</Box>
              <TextField {...endProps} InputLabelProps={{ shrink: true }} />
            </div>
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
};

export default FormDateRangePicker;
