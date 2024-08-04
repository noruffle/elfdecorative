import React from 'react'
import css from './Profile.module.css'
import Column from './column/Column'
export default function Profile() {

  const photo = {
    "album_1": [
      "../../../../photo/room_11.jpg",
      "../../../../photo/room_2.jpg",
      "../../../../photo/room_3.jpg",
      "../../../../photo/room_4.jpg",
    ],

    "album_2": [
      "../../../../photo/room_5.jpg",
      "../../../../photo/room_6.jpg",
      "../../../../photo/room_7.jpg",
      "../../../../photo/room_8.jpg",
    ],

    "album_3": [
      "../../../../photo/room_9.jpg",
      "../../../../photo/room_10.jpg",
      "../../../../photo/room_13.jpg",
      "../../../../photo/room_12.jpg",
    ],
}; 

  return (
    <div className={css.profile}>
      <div className={css.wrap}>
        <Column id={''} src={photo.album_1}/>
        <Column id={''} src={photo.album_2}/>
        <Column id={''} src={photo.album_3}/>
      </div>
    </div>
  )
}