import React from 'react'
import { CardActionArea, Card, CardActions, CardMedia } from '@mui/material'
import { WithChildren } from '../types'
import { Link } from 'react-router-dom'

export type ImgCardProps = WithChildren<{
  img: string
  to: string
}>

const ImgCard = ({ children, img, to }: ImgCardProps) => {
  return (
    <Card>
      <CardActionArea component={Link} to={to}>
        <CardMedia component="img" image={img} />
        {children && <CardActions>{children}</CardActions>}
      </CardActionArea>
    </Card>
  )
}

export default ImgCard
