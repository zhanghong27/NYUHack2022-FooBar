import React from 'react'
import { Container, Typography } from '@mui/material'
import { WithChildren } from '../types'
import NavButton from '../components/NavButton'

export type TitlePageProps = WithChildren<{
  title: string
  subTitle?: string
  parentPage?: string
}>

const TitlePage = ({
  title,
  subTitle,
  parentPage,
  children,
}: TitlePageProps) => {
  return (
    <Container>
      <Typography variant='h1' color='primary' sx={{ margin: '1rem 0 1rem' }}>
        {title}
      </Typography>
      {subTitle && (
        <Typography variant='h2' color='black' sx={{ margin: '1rem 0 1rem' }}>
          {subTitle}
        </Typography>
      )}
      <Container>{children}</Container>
      {parentPage && (
        <NavButton to={parentPage}>Back to Previous Page</NavButton>
      )}
    </Container>
  )
}

export default TitlePage
