import React from 'react'
import {
  CardActionArea,
  Card,
  CardActions,
  CardMedia,
  Grid,
} from '@mui/material'
import { WithChildren } from '../types'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'

export type ImgCardProps = WithChildren<{
  img: string
  to: string
}>

const ImgCard = ({ children, img, to }: ImgCardProps) => {
  return (
    <Card square variant='outlined'>
      <CardActionArea component={Link} to={to}>
        <Grid container>
          <Grid item xs={2} sm={12}>
            <CardMedia component='img' image={img} />
          </Grid>
          <Grid item xs={10} sm={12}>
            <Box sx={{ minHeight: '20px' }}>
              {children && <CardActions>{children}</CardActions>}
            </Box>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  )
}

export default ImgCard
