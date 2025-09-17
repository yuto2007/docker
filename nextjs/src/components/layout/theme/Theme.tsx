'use client'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    background: {
      default: '#F3F2FF'
    },
    primary: {
      main: '#090f2e',
      contrastText: '#F3F2FF'
    },
    secondary: {
      main: '#2a79adff',
      contrastText: '#000000'
    },
    text: { primary: '#C2C4CC', secondary: '#090F2E' }
  },
  typography: {
    fontFamily: 'monospace'
  }
})

export default theme
