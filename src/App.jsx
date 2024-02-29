import { Box, Container, Grid, Link, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import InputAmount from './components/InputAmount'
import SelectCountry from './components/SelectCountry'
import SwitchCurrency from './components/SwitchCurrency'
import { CurrencyContext } from './context/CurrencyContext'

const exchangeRates = {
  BLUR: 0.20811525423728813,
  bNEO: 7.1282679,
  BUSD: 0.999183113,
  USD: 1,
  ETH: 1645.9337373737374,
  GMX: 36.345114372881355,
  STEVMOS: 0.07276706779661017,
  LUNA: 0.40955638983050846,
  RATOM: 10.250918915254237,
  STRD: 0.7386553389830508,
  EVMOS: 0.06246181355932203,
  IBCX: 41.26811355932203,
  IRIS: 0.0177095593220339,
  ampLUNA: 0.49548589830508477,
  KUJI: 0.675,
  STOSMO: 0.431318,
  USDC: 0.989832,
  axlUSDC: 0.989832,
  ATOM: 7.186657333333334,
  STATOM: 8.512162050847458,
  OSMO: 0.3772974333333333,
  rSWTH: 0.00408771,
  STLUNA: 0.44232210169491526,
  LSI: 67.69661525423729,
  OKB: 42.97562059322034,
  OKT: 13.561577966101694,
  SWTH: 0.004039850455012084,
  USC: 0.994,
  WBTC: 26002.82202020202,
  wstETH: 1872.2579742372882,
  YieldUSD: 1.0290847966101695,
  ZIL: 0.01651813559322034,
};

function App() {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
  } = useContext(CurrencyContext);

  const [resultCurrency, setResultCurrency] = useState(0);

  useEffect(() => {
    if (firstAmount && fromCurrency && toCurrency) {
      // Get the exchange rate from the hardcoded map
      const fromRate = exchangeRates[fromCurrency];
      const toRate = exchangeRates[toCurrency];
  
      if (fromRate !== undefined && toRate !== undefined) {
        // Calculate the exchange rate
        const exchangeRate = toRate / fromRate;
  
        // Calculate the converted amount
        const convertedAmount = firstAmount * exchangeRate;
  
        // Update state with the results
        setResultCurrency(convertedAmount);
      } else {
        console.error(`Exchange rate not found for ${fromCurrency} or ${toCurrency}`);
      }
    }
  }, [firstAmount, fromCurrency, toCurrency]);
  

  const boxStyles = {
    background: "#E2E5DE",
    margin: "10rem auto", // Centering horizontally
    marginLeft: "20rem", // Default left margin
    
    '@media (max-width: 900px)': {
      marginLeft: '4rem', // Adjusting left margin for screens smaller than 600px
    },
  
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "30px 40px 10px 9px rgba(0,0,0,0.1)"
  };
  
  
  
  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant='h5' sx={{ marginBottom: "2rem"}}>Crypto Exchange!</Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From" />
        <SwitchCurrency />
        <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" />
      </Grid>

      {firstAmount ? (
        <Box sx={{ textAlign: "left", marginTop: "1rem"}}>
          <Typography>{firstAmount} {fromCurrency} =</Typography>
          <Typography variant='h5' sx={{ marginTop: "5px", fontWeight: "bold"}}>{resultCurrency} {toCurrency}</Typography>
        </Box>
      ) : ""}
      <Typography fontSize="25px" sx={{ position: "absolute", bottom: "1rem", right: "1rem" }}>
        <Link target="_blank" rel="noopener" href="https://github.com/iJoyRide">Checkout my Github!</Link>
      </Typography>
    </Container>
  );
}

export default App;
