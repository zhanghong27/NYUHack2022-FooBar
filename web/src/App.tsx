import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import Routes from './routes/Router'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f8efc',
    },
    secondary: {
      main: '#add7f6',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.2rem',
    },
  },
})

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  )
}

export default App
