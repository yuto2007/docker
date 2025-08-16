import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import RainbowText from '@/components/ui/text/RainbowText'

export default function CreatePage() {
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
          direction='column'
          spacing={2}
          alignItems='center'
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
