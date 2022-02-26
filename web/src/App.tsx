import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import Routes from './routes/Router'
import { QueryClient, QueryClientProvider } from 'react-query'
import Navbar from './Navbar/Navbar'

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
    h3: {
      fontSize: '1.2rem',
    },
    h4: {
      fontSize: '1rem',
    },
  },
})

const client = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
