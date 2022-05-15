import { useState } from 'react';
import { TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

const dateTimePicker = ({startValue, getData}) => {
  // const [value, setValue] = useState<Date | null>(null);
  const [value, setValue] = useState<Date | null>(
    null
  );

  
  return(
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
          label="시작 시간&#38;날짜 선택"
          value={value}
          mask={"____-__-__ __:__"}
          onChange={(newValue) => {setValue(newValue)}}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  )
}
export default dateTimePicker;