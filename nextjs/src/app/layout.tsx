import Footer from '@/components/layout/footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/components/layout/theme/Theme'
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
