import React from 'react'
import Bar from './bar/Bar'
import css from './Section.module.css'


export default function Section() {

  const array = {
    1: {
      src:'/img/1.jpg',
      description: '1 image'
    },
    2: {
      src:'/img/2.jpg',
      description: '2 image'
    },
    3: {
      src:'/img/3.jpg',
      description: '3 image'
    },
    4: {
      src:'/img/4.jpg',
      description: '4 image'
    },
    5: {
      src:'/img/5.jpg',
      description: '5 image'
    },
  }

  const pictures = Object.values(array)

  return (
    <div className={css.sectionbar}>
      {
        pictures.map(
          (picture, index) => (
            <Bar key={index} src={picture.src} description={picture.description}/>
          )
        )
      }
    </div>
  )
}