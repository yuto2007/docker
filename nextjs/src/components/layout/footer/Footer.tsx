import { Box, Container, Link, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box component='footer'>
      <Container maxWidth='lg'>
        <Typography
          variant='body2'
          color='text.primary'
          align='center'
          fontFamily={'monospace'}
        >
          &copy;&nbsp;
          {'2025-2026 '}
          <Link color='inherit' href='/'>
            OWARI LAB
          </Link>
          {' All Rights Reserved.'}
        </Typography>
      </Container>
    </Box>
  )
}
