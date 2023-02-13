import React from 'react'

const SingleItem = ({name,brand,imgScr,price}) => {
    const tempprice = price>1?`From ₹${price}`:'Shop Now!'
  return (
    <div className="single-item">
        <div className="imgae">
        <img src={imgScr} alt={name} />
        </div>
        <div className='details'>
            <h2>{name}</h2>
            <p>{tempprice}</p>
            <span>{brand}</span>
        </div>
    </div>
  )
}

export default SingleItem;