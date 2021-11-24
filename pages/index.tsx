import Head from "next/head";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

import { CrimeByBrand } from "../components/CrimeByBrand";
import { CrimeByCity } from "../components/CrimeByCity";
import { CrimeByLocal } from "../components/CrimeByLocal";
import { CrimeByNeighbourhood } from "../components/CrimeByNeighbourhood";
import { CrimeByStreet } from "../components/CrimeByStreet";
import { CrimeByVehicle } from "../components/CrimeByVehicle";
import { initializeMap } from "../map/initializeMap";
import { CrimeByDayPeriod } from "../components/CrimeByDayPeriod";
import { CrimeKpis } from "../components/CrimeKpis";
import { Filters } from "../components/Filters";
import { addDataLayer } from "../map/addDataLayer";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

interface IMyPosition {
  long: Number;
  lat: number;
}

export default function Home() {
  const [myPosition, setMyPosition] = useState<IMyPosition>({
    long: 0,
    lat: 0,
  });
  const [Map, setMap] = useState<any>();
  mapboxgl.accessToken =
    "pk.eyJ1IjoiY2FkcmltaXJhbmRhIiwiYSI6ImNrdmhhZzU1bDF6ZHgyd255cmlkNHVsMHMifQ.r1Z9ANLeXJXyCvpzQ8wHPA";

  useEffect(() => {
    function mountMap(pos: IMyPosition) {
      let map = new mapboxgl.Map({
        container: "my-map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [pos.long, pos.lat],
        zoom: 12,
      });

      initializeMap(mapboxgl, map);
      setMap(map);
    }

    let pos = { long: 0, lat: 0 };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log({ position });
        pos = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        };
        setMyPosition({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        mountMap(pos);
      });
    } else {
      mountMap(pos);
    }
  }, []);

  useEffect(() => {
    if (Map) {
      fetch("/api/data")
        .then((res) => res.json())
        .then((res) => addDataLayer(Map, res));
    }
  }, [Map]);

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
        <div className="mymap" id="my-map" />
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
