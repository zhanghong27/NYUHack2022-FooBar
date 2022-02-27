import React from 'react'
import { Grow } from '@mui/material'
import { WithChildren } from '../types'
import { Box } from '@mui/system'

const GrowBox = ({
  children,
  duration,
  maxDuration,
}: WithChildren<{ duration: number; maxDuration: number }>) => {
  return (
    <Grow timeout={Math.min(duration, maxDuration)} in>
      <Box>{children}</Box>
    </Grow>
  )
}

export default GrowBox
