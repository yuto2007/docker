'use client'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const TitleText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.spacing(4)
}))

export default TitleText
