import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import TitleText from '@/components/ui/text/TitleText'
export default function AboutUsPage() {
  return (
    <Container maxWidth='md' sx={{ py: 6 }}>
      <Box>
        <TitleText variant='h3'>TODO:設定画面を作る！</TitleText>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          href='/'
          fullWidth
          sx={{ maxWidth: 300, mx: 'auto' }}
        >
          ホームに戻る
        </Button>
      </Box>
    </Container>
  )
}
