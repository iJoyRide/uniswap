import { useState } from 'react'
import './App.css'
import { Button, Container, Grid, Typography } from '@mui/material'
import SwitchCurrency from './components/SwitchCurrency'
import SelectCountry from './components/SelectCountry'
import InputAmount from './components/InputAmount'



function App() {
  const [count, setCount] = useState(0)
    const boxStyles = {
      background: "#E2E5DE",
      marginTop: "10rem",
      textAlign: "center",
      color: "#222",
      minHeight: "20rem",
      borderRadius: 2,
      padding: "4rem 2rem",
      boxShadow: "30px 40px 10px 9px rgba(0,0,0,0.1)"

    }
  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant='h5' sx={{ marginBottom: "2rem"}}>
        Stay Ahead With Accurate Conversion
      </Typography>
      <Grid container spacing={2}>
        <InputAmount/>
        <SelectCountry/>
        <SwitchCurrency/>
        <SelectCountry/>
      </Grid>
    </Container>
  )
}

export default App
