import { FC, useState } from "react";
import { TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const datePicker = () => {
  const [value, setValue] =useState<Date | null>(null);

  return(
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="날짜"
          value={value}
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