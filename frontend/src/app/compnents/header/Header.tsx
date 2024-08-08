import React from 'react'
import Navigation from './nav/Navigation'

import css from './Header.module.css'
import { Box } from '@mui/joy'

export default function Header() {
  return (
    <Box sx={{zIndex:1, position:'-webkit-sticky', width:'-webkit-fill-available', top: 0, minHeight:'35px', display:'grid', alignContent:'center',justifyContent:'center',justifyItems:'center',gap:'10px',padding:0, fontFamily:'Open Sans',fontWeight: 1000, color:'#616161', bgcolor:'white', borderBottom: '1px solid var(--light-color-border)'}}>
      <Navigation/>
    </Box>

  )
}

