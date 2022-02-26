import React, { FC, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const FormDatePicker: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <DatePicker
      className="text-gray-100 rounded outline-none border border-zinc-700  flex-1 appearance-none py-2 px-4 bg-zinc-700 placeholder-gray-100 text-base focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      minDate={startDate}
      selectsRange
    />
  );
};

export default FormDatePicker;
