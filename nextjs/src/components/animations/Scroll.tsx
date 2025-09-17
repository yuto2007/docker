'use client'
import { Fade, useScrollTrigger } from '@mui/material'
import * as React from 'react'
export default function Scroll() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  })
  console.log(trigger)
  return (
    <>
      <div>test</div>
      <Fade in={trigger}>
        <div>テスト</div>
      </Fade>
    </>
  )
}
