import { useState } from 'react'
import { ThemeProvider } from "@mui/material/styles";
// import './App.css'
import AppRoutes from './router/AppRoutes'
import { CssBaseline } from '@mui/material';
import { careerSyncTheme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={careerSyncTheme}>
      <CssBaseline/>
    <AppRoutes/>
    </ThemeProvider>
  )
}

export default App
