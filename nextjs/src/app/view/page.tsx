'use client'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Image from 'next/image'
import { useState } from 'react'

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

export default function CreatePage() {
  const [title, setTitle] = useState('')

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography>
          <RainbowText>チーム名を表示</RainbowText>
        </Typography>
        <Stack 
          direction="column" 
          spacing={2} 
          alignItems="center"
          sx={{ mt: 3, maxWidth: 300, mx: 'auto' }}
        >
          {/*TODO:過去の投稿をデータベースから取得して、表示する機能を実装*/}
        </Stack>
      </Box>
      
      <Box sx={{ p: 2 }}>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          href='/write'
          fullWidth
          sx={{ maxWidth: 300, mx: 'auto' }}
        >
          新しい投稿を作成
        </Button>
      </Box>
    </Box>
  )
}