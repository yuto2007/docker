import CalendarTodayIcon from '@mui/icons-material/CalendarTodayOutlined'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import SettingsIcon from '@mui/icons-material/SettingsOutlined'
import { Button, Link, Stack, Tooltip } from '@mui/material'
import Scroll from '@/components/animations/Scroll'
import Top from '@/components/layout/header/Top'
import BasicModal from '@/components/ui/button/BasicModal'
import CardButton from '@/components/ui/button/CardButton'
export default function Page() {
  return (
    <div
      style={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Top />
      <Stack
        direction='row'
        spacing={1}
        sx={{ mt: 3, width: 400, mx: 'auto', margin: '0 auto' }}
      >
        <CardButton
          href='/create'
          icon={<CalendarTodayIcon htmlColor='#090F2E' fontSize='medium' />}
          text='物語を始める&nbsp;&nbsp;'
          iconBackgroundColor='#8488E5'
        />
        <CardButton
          href='/view'
          icon={<EditNoteOutlinedIcon htmlColor='#8488E5' fontSize='medium' />}
          text='物語を記録する'
          iconBackgroundColor='#F3F2FF'
        />
      </Stack>
      <Stack
        direction='row'
        spacing={2}
        sx={{ maxWidth: 200, mx: 'auto', margin: '0 auto' }}
      >
        <Button
          variant='text'
          color='primary'
          component={Link}
          href='/settings'
          fullWidth
          sx={{
            mt: 3,
            mx: 'auto',
            margin: '0 auto'
          }}
        >
          <SettingsIcon />
        </Button>
        <Tooltip title='デジタル交換日記について知る' arrow>
          {/* <Button
            variant='text'
            color='primary'
            component={Link}
            href='/aboutus'
            fullWidth
            sx={{ mt: 3, mx: 'auto', margin: '0 auto' }}
          >
            <HelpOutlineIcon />
          </Button> */}
          <BasicModal />
        </Tooltip>
      </Stack>
      {/* <Scroll /> */}
    </div>
  )
}
