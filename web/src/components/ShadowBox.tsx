import React from 'react'
import { Box } from '@mui/material'
import { WithChildren } from '../types'

const ShadowBox = ({ children }: WithChildren) => {
  return (
    <Box component='div' sx={{ boxShadow: 8 }}>
      {children}
    </Box>
  )
}

export default ShadowBox
