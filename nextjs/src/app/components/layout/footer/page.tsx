import { Box, Container, Link, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box component='footer'>
      <Container maxWidth='lg'>
        <Typography
          variant='body2'
          color='text.secondary'
          align='center'
          fontFamily={'monospace'}
        >
          <span>&copy; </span>
          {'2025-2026 '}
          <Link color='inherit' href='https://nextjs/'>
            OWARI LAB
          </Link>
          {' All Rights Reserved.'}
        </Typography>
      </Container>
    </Box>
  )
}
