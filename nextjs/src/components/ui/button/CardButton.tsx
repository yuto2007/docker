import {
  Card,
  CardActionArea,
  CardContent,
  Link,
  Stack,
  Typography
} from '@mui/material'

type Props = {
  href: string
  icon: React.ReactNode
  text: string
  iconBackgroundColor?: string
}

export default function CardButton(props: Props) {
  const { href, icon, text, iconBackgroundColor } = props
  return (
    <Card
      sx={{
        width: 200,
        mx: 'auto',
        margin: '0 auto',
        borderColor: '#B4B6BF',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4,
        boxShadow: 'shadow'
      }}
    >
      <CardActionArea
        component={Link}
        href={href}
        sx={{ textDecoration: 'none' }}
      >
        <Stack direction='row' justifyContent='center' alignItems='center'>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: iconBackgroundColor
            }}
          >
            {icon}
          </div>
          <CardContent>
            <Typography
              gutterBottom
              fontSize='20'
              component='div'
              sx={{ textAlign: 'center' }}
            >
              {text}
            </Typography>
          </CardContent>
        </Stack>
      </CardActionArea>
    </Card>
  )
}
