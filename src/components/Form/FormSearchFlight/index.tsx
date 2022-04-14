//@ts-nocheck
import React, { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormDateRangePicker from "../FormDateRangePicker";
import FormNumberPicker from "../FormNumberPicker";
import iatalocations from "@/utils/iataLocations";
import FormComboBox from "../FormComboBox";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormSubmit from "../FormSubmit";
import { useRouter } from "next/router";
import format from "date-fns/format";

interface SubmitResults {
  origin: string;
  destination: string;
  searchDateRange: Date[];
  numberAdults: number;
  numberChildren: number;
}

interface FormSearchFlightProps {
  id?: string;
  href?: string;
}

const FormSearchFlight: FC<FormSearchFlightProps> = ({ id, href }) => {
  const router = useRouter();
  const methods = useForm();

  const onSubmitHandler = async (data: SubmitResults) => {
    router.push(
      {
        pathname: href,
        query: {
          // cabin_class: "economy", // TODO: Add cabin_class options in form
          numberAdults: data.numberAdults,
          numberChildren: data.numberChildren,
          origin: data.origin,
          destination: data.destination,
          departure_date: format(data.searchDateRange[0], "yyyy-MM-dd"), // 0 is departure date
          return_date: format(data.searchDateRange[1], "yyyy-MM-dd"), // 1 is return date
        },
      }
      // href
    );
  };

  return (
    <FormProvider {...methods}>
      <Paper
        id={id}
        elevation={5}
        square
        className='w-screen max-w-screen-md bg-zinc-200'
      >
        <form onSubmit={methods.handleSubmit(onSubmitHandler)} className=''>
          <Grid
            container
            spacing={2}
            paddingX={10}
            paddingY={5}
            alignItems='center'
            justifyContent='center'
          >
            <Grid item xs={12} sm={6}>
              <FormComboBox
                name='origin'
                placeholder='Origin'
                autoCompleteOptions={iatalocations}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormComboBox
                name='destination'
                placeholder='Destination'
                autoCompleteOptions={iatalocations}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormDateRangePicker name='searchDateRange' />
            </Grid>
            <Grid item xs={12} sm={8}>
              <FormNumberPicker
                name='numberAdults'
                defaultNumber={1}
                label='Number of adults'
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <FormNumberPicker
                name='numberChildren'
                defaultNumber={0}
                label='Number of children'
                tooltipText='Children aged 0-15 years. Age limits and policies for travelling with children may vary so please check with the airline before booking.'
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
