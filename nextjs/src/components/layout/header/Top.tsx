'use client'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Image from 'next/image'

const RainbowText = styled('span')({
  background:
    'linear-gradient(to right,#e60000,#f39800,#fff100,#009944,#0068b7,#1d2088,#920783,#e60000) 0 / 200%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  fontWeight: 700,
  display: 'inline-block',
  fontSize: 'clamp(2rem, 10vw, 3.5rem)',
  animation: '5s rainbow linear infinite',
  '@keyframes rainbow': {
    '100%': { backgroundPosition: '200%' }
  },
  fontFamily: 'monospace'
})

export default function Top() {
  return (
    <Box textAlign={'center'}>
      <Typography>
        <RainbowText>デジタル&nbsp;交換&nbsp;日記</RainbowText>
      </Typography>
      <Stack 
        direction="column" 
        spacing={2} 
        alignItems="center"
        sx={{ mt: 3, maxWidth: 300, mx: 'auto' }}
      >
        <Button
          variant='contained'
          color='primary'
          component={Link}
          href='/create'
          fullWidth
        >
          新たな物語を創る
        </Button>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          href='/write'
          fullWidth
        >
          物語を記録する
        </Button>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          href='/aboutus'
          fullWidth
        >
          デジタル交換日記とは
        </Button>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          href='/settings'
          fullWidth
        >
          🔑
        </Button>
      </Stack>
      
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <Image
          src="/images/book_yoko.png"
          alt="サンプル画像"
          width={300}
          height={200}
        />
      </Box>
    </Box>
  )
}
