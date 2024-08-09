import React from 'react'
import css from './Info.module.css'
import Card from '@mui/joy/Card'
import Typography from '@mui/joy/Typography'
import CardContent from '@mui/joy/CardContent'
import Box from '@mui/joy/Box'

export default function Info () {
  return (
    <div className={css.info}>
      <h1 className={css.info_h1}>ElfDecorative</h1>
      <div className={css.info_block}>
        <p className={css.info_block_description}>
        According to La Varenne Practique (a timeless masterwork you should consider owning if learning more about classic French cooking appeals), there are only a few critical points to perfecting a souffle: a base of the right consistency, stiff egg whites, and the careful folding of the base and the beaten whites.
        </p>
      </div>
    </div>
  )
}


function A () {
  return (
    <Card>
      <CardContent >
        <Typography>Elf Decorative</Typography>
        <Box component='p' sx={{}}>
          Text
        </Box>
      </CardContent>
    </Card>
  )
}