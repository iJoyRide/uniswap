import { Grid, InputAdornment, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const InputAmount = () => {
  const { firstAmount, setFirstAmount } = useContext(CurrencyContext);

  const handleAmountChange = (e) => {
    const inputValue = e.target.value;

    // Check if the input value is a valid number and non-negative
    if (!isNaN(inputValue) && inputValue >= 0) {
      setFirstAmount(inputValue);
    }
    // Optionally, you can provide feedback or handle the case when the input is not valid.
  };

  return (
    <Grid item xs={12} md>
      <TextField
        value={firstAmount}
        onChange={handleAmountChange}
        label="Amount"
        fullWidth
        InputProps={{
          type: 'number',
          startAdornment: <InputAdornment position='start'></InputAdornment>,
        }}
      />
    </Grid>
  );
};

export default InputAmount;
