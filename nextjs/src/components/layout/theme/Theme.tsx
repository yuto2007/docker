'use client'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    background: {
      default: 'rgba(188, 208, 226, 0.95)'
    },
    primary: {
      main: '#090f2eff',
      contrastText: '#8690b0ff'
    },
    text: { primary: '#f2ededff' }
  }
})

export default theme
