// /* eslint-disable react-hooks/rules-of-hooks */
// import React, { useCallback, useState } from "react";
// import { useForm, NestedValue, Controller } from "react-hook-form";
// import { TextField, Select, Button } from "@material-ui/core";
// import Autocomplete from "@mui/material/Autocomplete";
// import { MenuItem } from "@mui/material";

// type Option = {
//   label: string;
//   value: string;
// };

// const options = [
//   { label: "Chocolate", value: "chocolate" },
//   { label: "Strawberry", value: "strawberry" },
//   { label: "Vanilla", value: "vanilla" },
// ];

// const FormSearchFlight = () => {
//   const [textValue, setTextValue] = useState("");
//   const {
//     handleSubmit,
//     reset,
//     control,
//     formState: { errors },
//   } = useForm();

//   const onChangeHandler = (e: any) => setTextValue(e.target.value);
//   const onSubmit = (data: any) => console.log(data);

//   return (
//     <form>
//       <Controller
//         name={"textValue"}
//         control={control}
//         render={({ field: { onChangeHandler, value } }) => (
//           <Autocomplete
//             autoHighlight
//             clearOnEscape
//             autoSelect
//             options={options}
//             getOptionLabel={(option: Option) => option.label}
//             renderInput={(params) => (
//               <TextField
//                 variant="filled"
//                 onChange={onChangeHandler}
//                 value={value}
//                 {...params}
//                 error={Boolean(errors?.autocomplete)}
//                 helperText={errors?.autocomplete?.message}
//               />
//             )}
//           />
//         )}
//       />

//       <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
//     </form>
//   );
// };

// export default FormSearchFlight;
