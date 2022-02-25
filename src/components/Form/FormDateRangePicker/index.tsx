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
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <div className="flex items-center justify-evenly">
              <div className="p-2 rounded bg-gray-700 hover:border-2 ">
                <TextField
                  variant="standard"
                  className="bg-gray-700"
                  {...startProps}
                  InputLabelProps={{ shrink: true, style: { color: "white" } }}
                  InputProps={{
                    disableUnderline: true,
                    style: { color: "white" },
                  }}
                />
              </div>
              <Box className="mx-10 bg-black text-white">To</Box>
              <div className="p-2 rounded bg-gray-700 hover:border-2 ">
                <TextField
                  variant="standard"
                  className="bg-gray-700"
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
