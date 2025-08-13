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
    <Box textAlign={'center'}>
      <Typography>
        <RainbowText>TODO:新規投稿作成画面を作る！</RainbowText>
      </Typography>
    </Box>
  )
}