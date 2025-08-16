import Top from '@/components/layout/header/Top'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
export default function Page() {
  return (
    <div>
      <Top />
      <Stack
        direction='column'
        spacing={2}
        alignItems='center'
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
          href='/view' //TODO:viewに移動する前に、NFCを読み取り、TeamIDを取得し、共通鍵を復号する必要あり。もしくは、view内で実装。
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
    </div>
  )
}
