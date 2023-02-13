import React from 'react'
import Button from './Button';

const TitleBox = ({title}) => {
  return (
    <div className='title-box'>
        <h2>{title}</h2>
        <Button name='View All'/>
    </div>
  )
}

export default TitleBox;