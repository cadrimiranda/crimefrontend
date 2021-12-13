import { useMemo } from "react";
import Grid from "@mui/material/Grid";
import Skeleton from "antd/lib/skeleton";

export type CrimeType =
  | "morning"
  | "afternoon"
  | "night"
  | "dawn"
  | "unknow"
  | "uncertain";

const CrimeByDayTime = ({
  dayTime,
  crimeCount,
  percentage,
  period,
  loading,
}: {
  period: string;
  dayTime: CrimeType;
  crimeCount: number;
  percentage: number;
  loading: boolean;
}) => {
  const getCrimeIcon = useMemo(() => {
    if (dayTime === "morning") {
      return "bi bi-sun-fill";
    }

    if (dayTime === "afternoon") {
      return "bi bi-sunset-fill";
    }

    if (dayTime === "dawn") {
      return "bi bi-sunrise-fill";
    }

    if (dayTime === "uncertain") {
      return "bi bi-slash-circle-fill";
    }

    return "bi bi-moon-fill";
  }, [dayTime]);

  const getColorIcon = useMemo(() => {

    if (dayTime === "dawn") {
      return "#ffdb00";
    }

    if (dayTime === "morning") {
      return "#ffc922";
    }

    if (dayTime === "afternoon") {
      return "#F4D772";
    }

    if (dayTime === "uncertain") {
      return "rgba(59, 113, 120, 0.4)";
    }

    return "#F7EAC6";
  }, [dayTime]);

  return (
    <div
      title={period}
      className="crime-bydaytime crime-pos-flex crime-pos-center-center crime-pos-column"
    >
      {loading ? (
        <div className="crime-pos-flex crime-pos-center-around crime-pos-column">
          <Skeleton.Avatar active size="large" />
          <Skeleton.Input
            style={{ borderRadius: "8px", marginTop: "4px", width: "150px" }}
            size="small"
            active
          />
          <Skeleton.Input
            style={{ borderRadius: "8px", marginTop: "4px", width: "150px" }}
            size="small"
            active
          />
          <Skeleton.Input
            style={{ borderRadius: "8px", marginTop: "4px", width: "150px" }}
            size="small"
            active
          />
        </div>
      ) : (
        <Grid container className="crime-bydaytime-grid">
          <Grid item sm={5}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <i
                style={{
                  color: getColorIcon,
                }}
                className={`${getCrimeIcon} icon-day-time`}
              />
            </Grid>
          </Grid>
          <Grid item sm={7}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
              style={{ height: "100%" }}
            >
              <span className="crime-daytime-period">{period}</span>
              <span>{`${crimeCount && crimeCount.toLocaleString('pt-BR')} crimes (${percentage}%)`}</span>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export { CrimeByDayTime };
