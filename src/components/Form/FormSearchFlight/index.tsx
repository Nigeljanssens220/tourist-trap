//@ts-nocheck
import React, { FC, FormEvent, useCallback } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormDateRangePicker from "../FormDateRangePicker";
import FormNumberPicker from "../FormNumberPicker";
import iatalocations from "@/utils/iataLocations";
import FormComboBox from "../FormComboBox";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormSubmit from "../FormSubmit";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";

interface SubmitResults {
  origin: string;
  destination: string;
  searchDateRange: Date[];
  numberAdults: number;
  numberChildren: number;
}

const FormSearchFlight: FC = () => {
  const router = useRouter();
  const { client } = trpc.useContext();
  const methods = useForm();

  const onSubmitHandler = async (data: SubmitResults) => {
    const passengers = Array(data.numberAdults).fill({
      type: "adult",
    });
    console.log(data);

    // const locations = await client.query("duffel.get-flight-offers", {
    //   cabin_class: "economy",
    //   return_offers: true,
    //   passengers: passengers,
    //   slices: [
    //     { origin: "LHR", destination: "JFK", departure_date: "2022-03-15" },
    //   ],
    // });

    // console.log(locations);
  };

  return (
    <FormProvider {...methods}>
      <Paper
        elevation={5}
        square
        className='w-screen max-w-screen-md bg-zinc-200'
      >
        <form
          onSubmit={methods.handleSubmit(onSubmitHandler)}
          noValidate
          className=''
        >
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
