import React from 'react'
import css from './Bar.module.css';
import Description from './description/Description';
import Picture from './image/Img';

export default function Bar({src, description}: BarProps) {
  return (
      <div className={css.sectionbar_image} id="image_1">
        <Picture src={src} alt='Unique'/>
        <Description description={description} />
      </div>
  )
}

interface BarProps {
  src: string;
  description: string;

}