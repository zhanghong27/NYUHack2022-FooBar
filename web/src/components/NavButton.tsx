import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'
import { WithChildren } from '../types'

export type BackButtonProps = WithChildren<{
  to: string
}>

const NavButton = ({ to, children }: BackButtonProps) => {
  const navigate = useNavigate()

  return (
    <Button
      onClick={() => {
        navigate(to)
      }}
    >
      {children}
    </Button>
  )
}

export default NavButton
