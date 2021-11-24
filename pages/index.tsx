import Head from "next/head";
import Grid from "@mui/material/Grid";
// import 'mapbox-gl/dist/mapbox-gl.css';

import { CrimeByCity } from "../components/CrimeByCity";
import { CrimeByLocal } from "../components/CrimeByLocal";
import { CrimeByNeighbourhood } from "../components/CrimeByNeighbourhood";
import { CrimeByStreet } from "../components/CrimeByStreet";
import { CrimeByVehicle } from "../components/CrimeByVehicle";
import { CrimeByDayPeriod } from "../components/CrimeByDayPeriod";
import { CrimeKpis } from "../components/CrimeKpis";
import { Filters } from "../components/Filters";
import { CrimeMap } from "../components/CrimeMap";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Crimes e furtos na sua região</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <main id="main" className="main">
        <Filters />
        <CrimeMap />
        <Grid container className="crime-content-data">
          <Grid item xs={12} md={6}>
            <CrimeKpis />
          </Grid>
          <Grid item xs={12} md={6}>
            <CrimeByDayPeriod />
          </Grid>
          <Grid item xs={12} md={6}>
            <CrimeByCity />
          </Grid>
          <Grid item xs={12} md={6}>
            <CrimeByNeighbourhood />
          </Grid>
          <Grid item xs={12} md={6}>
            <CrimeByStreet />
          </Grid>
          <Grid item xs={12} md={6}>
            <CrimeByLocal />
          </Grid>
          <Grid item xs={12}>
            <CrimeByVehicle />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
