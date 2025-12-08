import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import TitleText from '@/components/ui/text/TitleText'
import ProcessButton from '@/components/ui/button/ProcessButton'
import KeyIcon from '@mui/icons-material/Key';

export default function AboutUsPage() {
  return (
    <Container maxWidth='md' sx={{ py: 6 }}>
      <Box
      // すべての要素を真ん中に揃えたい
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <TitleText variant='h3'>TODO:設定画面を作る！</TitleText>

        <ProcessButton
          text="自分の秘密鍵のインポート"
          startIcon={<KeyIcon />}
          gradient="linear-gradient(90deg, #2196F3 0%, #4CAF50 50%, #8BC34A 100%)"
          shadowColor="rgba(76, 175, 80, 0.4)"
        />
        <Box sx={{ height: 16 }} />

        <ProcessButton
          text="自分の秘密鍵をエクスポート"
          startIcon={<KeyIcon />}
          gradient="linear-gradient(90deg, #FF5722 0%, #FFC107 50%, #FFEB3B 100%)"
          shadowColor="rgba(255, 152, 0, 0.4)"
        />
        <Box sx={{ height: 16 }} />

        <ProcessButton
          text="他の人の公開鍵のインポート"
          startIcon={<KeyIcon />}
          gradient="linear-gradient(90deg, #2196F3 0%, #4CAF50 50%, #8BC34A 100%)"
          shadowColor="rgba(76, 175, 80, 0.4)"
        />
        <Box sx={{ height: 16 }} />

        <ProcessButton
          text="他の人の公開鍵をエクスポート"
          startIcon={<KeyIcon />}
          gradient="linear-gradient(90deg, #FF5722 0%, #FFC107 50%, #FFEB3B 100%)"
          shadowColor="rgba(255, 152, 0, 0.4)"
        />
        <Box sx={{ height: 16 }} />

        <ProcessButton
          text="自分の公開鍵のインポート"
          startIcon={<KeyIcon />}
          gradient="linear-gradient(90deg, #2196F3 0%, #4CAF50 50%, #8BC34A 100%)"
          shadowColor="rgba(76, 175, 80, 0.4)"
        />
        <Box sx={{ height: 16 }} />

        <ProcessButton
          text="自分の公開鍵をエクスポート"
          startIcon={<KeyIcon />}
          gradient="linear-gradient(90deg, #FF5722 0%, #FFC107 50%, #FFEB3B 100%)"
          shadowColor="rgba(255, 152, 0, 0.4)"
        />

        <Box sx={{ height: 32 }} />

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
