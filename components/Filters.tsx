import { DatePicker, Input, Select } from "antd";
import Grid from "@mui/material/Grid";
const { RangePicker } = DatePicker;
const { Option } = Select;
const { Search } = Input;

const Filters = () => {
  return (
    <Grid className="crime-filter-container" container spacing={1}>
      <Grid item xs={12} md={4}>
        <Search placeholder="Endereço" allowClear />
      </Grid>
      <Grid item xs={12} md={4}>
        <Select className="crime-is-fullwidth" placeholder="Cidade">
          <Option value="time">Time</Option>
          <Option value="date">Date</Option>
          <Option value="week">Week</Option>
          <Option value="month">Month</Option>
          <Option value="quarter">Quarter</Option>
          <Option value="year">Year</Option>
        </Select>
      </Grid>
      <Grid item xs={12} md={2}>
        <RangePicker format="D/MM/YYYY" className="crime-is-fullwidth" />
      </Grid>
      <Grid item xs={12} md={2}>
        <RangePicker
          placeholder={["Hora inicial", "Hora final"]}
          format="HH:mm"
          picker="time"
          className="crime-is-fullwidth"
        />
      </Grid>
    </Grid>
  );
};

export { Filters };
