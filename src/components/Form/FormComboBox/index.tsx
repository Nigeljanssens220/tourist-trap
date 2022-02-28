import React, { FC, useEffect } from "react";
import { useFormContext, Controller, useForm } from "react-hook-form";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

interface Location {
  id: number;
  name: string;
}

const locations = [
  { id: 1, name: "Amsterdam" },
  { id: 2, name: "London" },
  { id: 3, name: "New York" },
  { id: 4, name: "Denpasar" },
  { id: 5, name: "Stockholm" },
  { id: 7, name: "Auckland" },
  { id: 8, name: "Jakarta" },
  { id: 9, name: "Paris" },
  { id: 10, name: "Berlin" },
  { id: 11, name: "Barcelona" },
  { id: 12, name: "Lisbon" },
];

export interface FormComboBoxProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  className?: string;
}

const FormComboBox: FC<FormComboBoxProps> = ({ name, className, ...rest }) => {
  const [selected, setSelected] = useState(locations[0]);
  const [query, setQuery] = useState("");
  const {
    control,
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    register(name);
    setValue(name, locations[0].name);
  }, [name, register, setValue]);

  const filteredLocation =
    query === ""
      ? locations
      : locations.filter((location) =>
          location.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const selectedHandler = (event: any) => {
    setSelected(event);
    setValue(name, event?.name);
  };

  return (
    <Controller
      name={name}
      control={control}
      required={true}
      render={({ field }) => (
        <div className='w-full z-50 '>
          <Combobox {...field} value={selected} onChange={selectedHandler}>
            <div className='relative mt-1 bg-white '>
              <div className='relative w-full text-left bg-white rounded-sm shadow-md cursor-default sm:text-sm overflow-hidden'>
                <Combobox.Input
                  className='w-full focus:ring-0 active:ring-0 py-2 outline-none pl-3 pr-10 text-sm leading-5 text-gray-900'
                  displayValue={(location: Location) => location.name}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className='absolute w-full py-1 mt-1 overflow-auto no-scrollbar text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black  sm:text-sm'>
                  {filteredLocation.length === 0 && query !== "" ? (
                    <div className='cursor-default select-none relative py-2 px-4 text-gray-700'>
                      Nothing found.
                    </div>
                  ) : (
                    filteredLocation.map((location) => (
                      <Combobox.Option
                        key={location.id}
                        className={({ active }) =>
                          `cursor-default select-none relative py-2 pl-10 pr-4 ${
                            active ? "text-white bg-zinc-700" : "text-gray-900"
                          }`
                        }
                        value={location}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {location.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-zinc-900"
                                }`}
                              >
                                <CheckIcon
                                  className='w-5 h-5'
                                  aria-hidden='true'
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
      )}
      {...rest}
    />
  );
};

export default FormComboBox;