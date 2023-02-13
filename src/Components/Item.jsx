import React from 'react'

const Item = ({name,imgSrc,icon}) => {
  return (
    <div className='item'>
        <img src={imgSrc} alt={name}/>
        <div>
        <p> {name} </p>
        <span> {icon?icon:''} </span>
        </div>
    </div>
  )
}

export default Item;