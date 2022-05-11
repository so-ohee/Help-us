import { FC, useState } from "react";
import { TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

const datePicker = () => {
  const [value, setValue] =useState<Date | null>(null);
  // console.log(value)
  
  return(
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="날짜"
          value={value}
          inputFormat={"yyyy-MM-dd"}
          mask={"____-__-__"}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  )
}

export default datePicker;