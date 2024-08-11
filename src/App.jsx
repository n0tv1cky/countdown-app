import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar';
import { Banner } from './components/Banner';


function App() {
  const [countdownTime, setCountdownTime] = useState("");

  const fetchTime = () => {
    
  }

  return (
    <>
      <Box>
        <Navbar />
        <Banner />
      </Box>
    </>
  )
}

export default App
