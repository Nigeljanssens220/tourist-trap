import React, { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormDateRangePicker from "./FormDateRangePicker";
import FormNumberPicker from "./FormNumberPicker";
import FormTextFieldAutoComplete from "./FormTextFieldAutoComplete";
import FlightIcon from "@mui/icons-material/Flight";
import FormComboBox from "./FormComboBox";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormSubmit from "./FormSubmit";

const FormSearchFlight: FC = () => {
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Paper
        elevation={5}
        square
        className='w-screen max-w-screen-md bg-zinc-200'
      >
        <form onSubmit={methods.handleSubmit(onSubmit)} className=''>
          <Grid
            container
            spacing={2}
            paddingX={10}
            paddingY={5}
            alignItems='center'
            justifyContent='center'
          >
            <Grid item xs={12} sm={6}>
              <FormComboBox name='origin' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormComboBox name='destination' />
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormDateRangePicker name='search-date-range' />
            </Grid>
            <Grid item xs={12} sm={8}>
              <FormNumberPicker
                name='number-adults'
                defaultNumber={1}
                label='Number of adults'
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <FormNumberPicker
                name='number-children'
                defaultNumber={0}
                label='Number of children'
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <FormSubmit label='Search flights' />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </FormProvider>
  );
};

export default FormSearchFlight;
//           <div className='flex flex-col px-10 pt-5 space-y-2 md:flex-row md:space-x-5 md:space-y-0'>
//             <FormTextFieldAutoComplete name='origin' placeholder='Origin' />
//             <FormTextFieldAutoComplete
//               name='destination'
//               placeholder='Destination'
//             />
//             <FormComboBox name='origin' />
//             <FormComboBox name='destination' />
//           </div>

//           <FormDateRangePicker name='search-date-range' />

//           <div className='flex items-center pt-1 md:pt-0'>
//             <FormNumberPicker
//               name='number-adults'
//               defaultNumber={1}
//               label='Number of adults'
//             />
//           </div>
//           <div className='flex items-center pb-3 md:pb-0'>
//             <FormNumberPicker
//               name='number-children'
//               label='Number of children'
//               defaultNumber={0}
//             />
//           </div>
//           <div className='flex rounded bg-black items-center hover:bg-zinc-800 active:ring active:ring-zinc-500'>
//             <button
//               type='submit'
//               className='flex items-center justify-center rounded  text-white w-full cursor-pointer '
//             >
//               <h2 className='font-medium'>Search flights</h2>
//               <FlightIcon className='text-white w-8 h-8 mx-4 my-2' />
//             </button>
//           </div>
