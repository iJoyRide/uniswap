import { useState } from 'react'
import './App.css'
import { Button, Container, Grid, Typography } from '@mui/material'
import SwitchCurrency from './components/SwitchCurrency'
import SelectCountry from './components/SelectCountry'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="md" sx={{background: "#fdfdfd"}}>
      <Typography variant='h5' sx={{ marginTop: "2rem", marginBottom: 0 }}>
        Stay Ahead With Accurate Conversion
      </Typography>
      <Grid container>
      
        <SelectCountry/>
        <SwitchCurrency/>
        <SelectCountry/>
      </Grid>
    </Container>
  )
}

export default App
