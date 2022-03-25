import React, { FC, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import { AutoCompleteProps } from "@/utils/iataLocations";

export interface FormComboBoxProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  name: string;
  placeholder: string;
  autoCompleteOptions: AutoCompleteProps[];
  className?: string;
}

const FormComboBox: FC<FormComboBoxProps> = ({
  id,
  name,
  placeholder,
  autoCompleteOptions,
  className,
  ...rest
}) => {
  const [selected, setSelected] = useState(undefined);
  const [query, setQuery] = useState("");
  const {
    control,
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    register(name);
    setValue(name, "");
  }, [name, register, setValue]);

  const filteredOptions =
    query === ""
      ? autoCompleteOptions
      : autoCompleteOptions.filter((option) =>
          option.label
            .toLowerCase()
            .replace(/\s+/g, "")
            // .includes(query.toLowerCase().replace(/\s+/g, ""))
            .startsWith(query.toLowerCase().replace(/\s+/g, ""))
        );

  const selectedHandler = (event: any) => {
    setSelected(event);
    setValue(name, event?.value);
  };

  return (
    <Controller
      name={name}
      control={control}
      required={true}
      render={({ field }) => (
        <div className="w-full z-50 ">
          <Combobox {...field} value={selected} onChange={selectedHandler}>
            <div className="relative bg-white items-center">
              <div className="relative w-full h-16 text-left bg-white rounded-sm shadow-md cursor-default sm:text-sm overflow-hidden">
                <Combobox.Input
                  as="input"
                  placeholder={placeholder}
                  className="w-full focus:ring-0 h-full active:ring-0 py-2 outline-none pl-4 pr-10 text-sm leading-5  text-gray-900"
                  displayValue={(option: AutoCompleteProps) => option.label}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto no-scrollbar z-50 text-base bg-white  shadow-lg max-h-60 ring-1 ring-black  sm:text-sm">
                  {filteredOptions.length === 0 && query !== "" ? (
                    <div className="cursor-default select-none relative py-2 px-4 text-zinc-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredOptions.map((option) => (
                      <Combobox.Option
                        key={option.value}
                        className={({ active }) =>
                          `cursor-default select-none relative py-2 pl-10 pr-4 ${
                            active ? "text-white bg-zinc-800" : "text-gray-900"
                          }`
                        }
                        value={option}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {option.label}
                            </span>
                            <span
                              className={`block truncate ${
                                selected
                                  ? "font-medium text-zinc-300 "
                                  : "font-normal text-zinc-700 "
                              }`}
                            >
                              {option.value}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-zinc-900"
                                }`}
                              >
                                <CheckIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
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
