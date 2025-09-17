import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { DotGothic16 } from 'next/font/google'
import RainbowText from '@/components/ui/text/RainbowText'

const dotGothic16 = DotGothic16({ subsets: ['latin'], weight: '400' })
export default function Top() {
  return (
    <Box textAlign={'center'}>
      <Typography>
        <RainbowText className={dotGothic16.className}>
          デジタル&nbsp;交換&nbsp;日記
        </RainbowText>
      </Typography>
    </Box>
  )
}
