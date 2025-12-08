'use client'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Button } from '@mui/material'

export default function UpLoadButton() {
  return (
    <Button
      component='label'
      variant='contained'
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <input type='file' hidden onChange={(e) => console.log(e.target.files)} />
    </Button>
  )
}
