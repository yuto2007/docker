'use client'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import RainbowText from '@/components/ui/text/RainbowText'
import { useState } from 'react'

export default function CreatePage() {
  const [title, setTitle] = useState('')

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  return (
    <Box textAlign={'center'}>
      <Typography>
        <RainbowText>新たな物語を創る</RainbowText>
      </Typography>
      <Stack
        direction='column'
        spacing={2}
        alignItems='center'
        sx={{ mt: 3, maxWidth: 300, mx: 'auto' }}
      >
        <TextField
          id='outlined-basic'
          label='物語のタイトルを入力'
          variant='outlined'
          fullWidth
          value={title}
          onChange={handleTitleChange}
        />
        <Button
          variant='contained'
          color='primary'
          component={Link}
          href='/write' //TODO:ボタンを押したら、データベースから、新たなTeamId(データベースのテーブル名？)を取得して、チーム名と紐づける。
          fullWidth
          disabled={title.trim() === ''}
        >
          新規作成
        </Button>
      </Stack>
    </Box>
  )
}
