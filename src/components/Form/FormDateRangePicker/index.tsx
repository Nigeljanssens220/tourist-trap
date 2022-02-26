import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";
import { Box } from "@mui/material";

const FormDateRangePicker: FC = () => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Departure date"
        endText="Arrival date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        inputFormat="dd/MM/yyyy"
        renderInput={(startProps, endProps) => (
          <>
            <div className="flex flex-grow max-w-screen-sm justify-evenly items-center space-x-6">
              <div className="p-1 pl-4 pt-2 outline-none rounded bg-zinc-700 border border-zinc-700 max-w-md">
                <TextField
                  variant="standard"
                  className="bg-zinc-700 "
                  {...startProps}
                  InputLabelProps={{ shrink: true, style: { color: "white" } }}
                  InputProps={{
                    disableUnderline: true,
                    style: { color: "white" },
                  }}
                />
              </div>
              <div className="p-1 pl-4 pt-2 outline-none rounded bg-zinc-700 border border-zinc-700 max-w-md">
                <TextField
                  variant="standard"
                  className="bg-zinc-700 "
                  {...endProps}
                  InputLabelProps={{ shrink: true, style: { color: "white" } }}
                  InputProps={{
                    disableUnderline: true,
                    style: { color: "white" },
                  }}
                />
              </div>
            </div>
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default FormDateRangePicker;
