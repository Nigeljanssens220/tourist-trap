import AddButton from "@/components/AddButton";
import SubtractButton from "@/components/SubtractButton";
import { FC, useState } from "react";

const FormNumberPicker: FC = () => {
  const [numberAdults, setNumberAdults] = useState(1);

  const handleAddNumberAdults = () => {
    setNumberAdults(numberAdults + 1);
  };

  const handleSubtractNumberAdults = () => {
    setNumberAdults(numberAdults - 1);
  };

  return (
    <div className="flex flex-grow items-center justify-evenly border-2">
      <button onClick={handleAddNumberAdults}>
        <AddButton />
      </button>
      <div>{numberAdults}</div>
      {numberAdults === 1 ? (
        <button disabled onClick={handleSubtractNumberAdults}>
          <SubtractButton />
        </button>
      ) : (
        <button onClick={handleSubtractNumberAdults}>
          <SubtractButton />
        </button>
      )}
    </div>
  );
};

export default FormNumberPicker;
