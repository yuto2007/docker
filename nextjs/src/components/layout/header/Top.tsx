import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import RainbowText from '@/components/ui/text/RainbowText'

export default function Top() {
  return (
    <Box textAlign={'center'}>
      <Typography>
        <RainbowText>デジタル&nbsp;交換&nbsp;日記</RainbowText>
      </Typography>
    </Box>
  )
}
