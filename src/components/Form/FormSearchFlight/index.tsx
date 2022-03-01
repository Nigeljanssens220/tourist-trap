import React, { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormDateRangePicker from "../FormDateRangePicker";
import FormNumberPicker from "../FormNumberPicker";
import FormComboBox from "../FormComboBox";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormSubmit from "../FormSubmit";

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
              <FormComboBox name='origin' placeholder='Origin' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormComboBox name='destination' placeholder='Destination' />
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
                tooltip='Children aged 0-15 years. Age limits and policies for travelling with children may vary so please check with the airline before booking.'
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
