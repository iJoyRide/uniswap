import { Autocomplete, Grid, Skeleton, TextField } from '@mui/material';
import React from 'react';
import useAxios from '../hooks/useAxios';

const SelectCountry = (props) => {
  const {value, setValue, label} = props;
  const [data, loaded, error] = useAxios("https://interview.switcheo.com/prices.json");
  
  if(loaded) {
    return (
      <Grid item xs={12} md={3}>
        <Skeleton variant="rounded" height={60}/>
      </Grid>
    )
  }

  if(error) {
    return "Something went wrong"
  }
  
  const currencies = data.map(item => item.currency);

  console.log(currencies);  // Corrected variable name

  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
      value={value}
      disableClearable
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
        options={currencies}
        renderInput={(params) => <TextField {...params} label= {label} />}
      />
    </Grid>
  );
}

export default SelectCountry;
