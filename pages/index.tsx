import Head from "next/head";
import Grid from "@mui/material/Grid";
import { CrimeByCity } from "../components/CrimeByCity";
import { CrimeByLocal } from "../components/CrimeByLocal";
import { CrimeByNeighbourhood } from "../components/CrimeByNeighbourhood";
import { CrimeByStreet } from "../components/CrimeByStreet";
import { CrimeByVehicle } from "../components/CrimeByVehicle";
import { CrimeByDayPeriod } from "../components/CrimeByDayPeriod";
import { Filters } from "../components/Filters";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { CrimeKpi } from "../components/CrimeKpi";
import { RemoveMobileDesktop } from "../components/RemoveMobileDesktop";

const CrimeMap = dynamic(
  () => import("../components/CrimeMap").then((res) => res) as any,
  {
    ssr: false,
  }
);

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
        <Grid container spacing={1}>
          <Grid item sm={9}>
            <Grid item xs={12}>
              <RemoveMobileDesktop desktopOff>
                <CrimeKpi />
              </RemoveMobileDesktop>
            </Grid>
            <Grid item xs={12}>
              <RemoveMobileDesktop desktopOff>
                <CrimeByDayPeriod />
              </RemoveMobileDesktop>
            </Grid>
            <Grid item xs={12}>
              <CrimeByCity />
            </Grid>
            <Grid item xs={12}>
              <CrimeByStreet />
            </Grid>
            <Grid item xs={12}>
              <CrimeByLocal />
            </Grid>
            <Grid item xs={12}>
              <CrimeByNeighbourhood />
            </Grid>
          </Grid>
          <Grid item sm={3}>
            <Grid item xs={12}>
              <RemoveMobileDesktop mobileOff>
                <CrimeKpi />
              </RemoveMobileDesktop>
            </Grid>
            <Grid item xs={12}>
              <RemoveMobileDesktop mobileOff>
                <CrimeByDayPeriod />
              </RemoveMobileDesktop>
            </Grid>
            <Grid item xs={12}>
              <CrimeByVehicle />
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
