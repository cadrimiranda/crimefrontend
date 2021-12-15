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
        <RemoveMobileDesktop desktopOff>
          <CrimeMap />
        </RemoveMobileDesktop>
        <Grid className="main-grid" container spacing={1}>
          <Grid item sm={9}>
            <RemoveMobileDesktop mobileOff>
              <Grid item xs={12}>
                <CrimeMap />
              </Grid>
            </RemoveMobileDesktop>
            <Grid item xs={12}>
              <CrimeByCity />
            </Grid>
            <Grid item xs={12}>
              <CrimeByStreet />
            </Grid>
          </Grid>
          <Grid item sm={3}>
            <Grid
              container
              style={{ height: "100%" }}
              justifyContent="space-around"
              alignContent="space-between"
            >
              <Grid item xs={12}>
                <CrimeKpi />
              </Grid>
              <Grid item xs={12}>
                <CrimeByDayPeriod />
              </Grid>
              <Grid item xs={12}>
                <CrimeByVehicle />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={6}>
            <CrimeByLocal />
          </Grid>
          <Grid item sm={6}>
            <CrimeByNeighbourhood />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
