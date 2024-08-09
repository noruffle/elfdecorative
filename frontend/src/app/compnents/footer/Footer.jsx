import React from 'react'
import css from './Footer.module.css'
import { Box, Typography } from '@mui/joy'
import Sheet from '@mui/joy/Sheet'
import Link, { linkClasses } from '@mui/joy/Link'

function SocialBox({href, svg}) {
  return (
    <Link
      sx={{
        width: "35px",
        height: "35px",

        display:'flex',
        bgcolor:"rgba(0,0,0,.5)",
        justifyContent:'center',
        alignItems:'center',
        border:'1px solid black',
        transition: '.5s',
        ':hover': {
          bgcolor: 'black'
        }
      }}
      href={href}
    >
      {svg}
    </Link>
  )
}

function ContactBox() {
  return (
    <Box>
      <Typography level='h3' sx={{margin:0, fontSize:'medium',fontFamily:'Open Sans', color:'black', paddingBottom:'5px'}}>Contact</Typography>
      <Phone 
        country={'Poland'}
        number={'+48 888 000 888'}
      />
      <Phone 
        country={'Spain'}
        number={'+34 444 000 444'}
      />
    </Box>
  )
}

function Phone({country, number}) {
  return (
    <Box component='p' sx={{margin:0,fontSize:'12px',color:'rgb(36,36,36)'}}>
      {country}: <Box component='a' sx={{margin:0,textDecoration:'none', color: 'rgb(36,36,36)'}}
        >{number}</Box>
    </Box>
  )
}

function CopyrightBox({text}) {
  return (
    <Box component={'copyright'} sx={{margin:0,color:'dark',paddingTop:'22px',fontSize:'10px'}}>
      {text}
    </Box>
  )
}

export default function Footer () {
  
  const svg = {
    gmail:  <svg className={css.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"/></svg>,
    facebook: <svg className={css.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592c.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1"/></svg>,
    youtube: <svg className={css.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765c1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831M9.996 15.005l.005-6l5.207 3.005z"/></svg>,
    instagram: <svg className={css.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008"/><circle cx="16.806" cy="7.207" r="1.078" fill="white"/><path fill="white" d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71c0 2.442 0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419a4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217m-1.218 9.532a5.043 5.043 0 0 1-.311 1.688a2.987 2.987 0 0 1-1.712 1.711a4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311a2.985 2.985 0 0 1-1.719-1.711a5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654c0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311a2.991 2.991 0 0 1 1.712 1.712a5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655c0 2.436 0 2.698-.043 3.654z"/></svg>,
    telegram: <svg className={css.svg}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="m20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434"/></svg>,
    discord: <svg className={css.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1a14.66 14.66 0 0 0-4.58 0a10.14 10.14 0 0 0-.53-1.1a16 16 0 0 0-4.13 1.3a17.33 17.33 0 0 0-3 11.59a16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83a3.39 3.39 0 0 0 .42-.33a11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84a12.41 12.41 0 0 0 1.08 1.78a16.44 16.44 0 0 0 5.06-2.59a17.22 17.22 0 0 0-3-11.59a16.09 16.09 0 0 0-4.09-1.35M8.68 14.81a1.94 1.94 0 0 1-1.8-2a1.93 1.93 0 0 1 1.8-2a1.93 1.93 0 0 1 1.8 2a1.93 1.93 0 0 1-1.8 2m6.64 0a1.94 1.94 0 0 1-1.8-2a1.93 1.93 0 0 1 1.8-2a1.92 1.92 0 0 1 1.8 2a1.92 1.92 0 0 1-1.8 2"/></svg>,
    github: <svg className={css.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white"  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2"/></svg>,

  };

  return (

    <Box sx={{margin: 0, minWidth:'400px', width: '-webkit-fill-available', padding: "22px", display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(0deg, rgba(107,107,107,0.7368892381171219) 0%, rgba(255,0,0,0) 100%, rgba(255,255,255,0) 100%);', gap: '20px', fontSize: 10, fontFamily: 'Open Sans'}}>
      <Sheet sx={{background:'rgba(0,0,0,0)',width:'-webkit-fill-available', height: '35px', display: 'flex', flexDirection: 'row', justifyContent:'center', gap: '7px', borderTop: '1pz solid black', paddingTop: '22pz'}}>
        <SocialBox href="" svg={svg.gmail}/>
        <SocialBox href="" svg={svg.facebook}/>
        <SocialBox href="" svg={svg.youtube}/>
        <SocialBox href="" svg={svg.instagram}/>
        <SocialBox href="" svg={svg.telegram}/>
        <SocialBox href="" svg={svg.discord}/>
        <SocialBox href="" svg={svg.github}/>  
      </Sheet>

      <Sheet sx={{margon:0, maxWidth:'400px', position:'relative',bottom:0, display:'flex',flexDirection:'column', bgcolor:'rgba(0,0,0,0)', alignItems:'start', fontFamily:'Open Sans', fontWeight:600}}>
        <ContactBox/>
      </Sheet>
        <CopyrightBox text={'Copyright © 2024 - present. Made by noruffle'}/>

    </Box>

  )
}

