'use client'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'

const TitleText = styled(Typography)(({ theme }) => ({
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: theme.spacing(4),
}))

export default function AboutUsPage() {
    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Box>
                <TitleText variant="h3">
                    TODO:設定画面を作る！
                </TitleText>
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