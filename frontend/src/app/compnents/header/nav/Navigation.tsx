import * as React from 'react';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import { Box, Link } from '@mui/joy';

export default function Navigation() {

  const navmenu = {
    home: 'Home',
    gallery: 'Gallery',
    faq: 'FAQ',
    order: 'Order'
  }

  return (
    <Box 
      sx={{
        minWidth: "100px",
        maxWidth: 1,
        display: "flex",
        gap: "5px",
        paddingTop: "5px",
        paddingBottom: "5px"

      }}
    >
      <NavLink href="/" title={navmenu.home}/>
      <NavLink href="/" title={navmenu.gallery}/>
      <NavLink href="/" title={navmenu.faq}/>
      <NavLink href="/" title={navmenu.order}/>
      <NavFlyout/>
    </Box>
  )
}

function NavLink({href, title}) {
  return (
    <Link component="a" sx={{
      color: 'inherit',
      textDecoration: "none",
      padding: "5px 9px",
      border: "1px solid black",
      transition: ".4s",
      fontFamily: "Open Sans",
      fontWeight: 500,
      ":hover": {
        color: "white",
        bgcolor: "black",
        textDecoration: "none",
      }
    }} href={href}>{title}</Link>
  )
}

function NavFlyout() {
  return (
    <Dropdown>
      <MenuButton
        sx={{
          padding: "5px 9px",
          border: "1px solid black",
          transition: ".4s",
          borderRadius: "0",
          display: "flex",
          justifyContent: "space-between",
          ":hover": {
            bgcolor: "#2e2e2e",
            fill: "white"
          }
        }}  
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><g><path d="M4.545 6.714L4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"/><path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292c.178.217.451.635.555.867c1.125-.359 2.08-.844 2.886-1.494c.777.665 1.739 1.165 2.93 1.472c.133-.254.414-.673.629-.89c-1.125-.253-2.057-.694-2.82-1.284c.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492a2 2 0 0 1-.94.31"/></g></svg>
      </MenuButton>
      <Menu
        sx={{
          borderRadius: "0",
        }}
        variant='plain'
      >
        <MenuItem
          sx={{color:"black"}}
        >English</MenuItem>
        <MenuItem>Polsih</MenuItem>
        <MenuItem>Russian</MenuItem>
      </Menu>
    </Dropdown>
  );
}
