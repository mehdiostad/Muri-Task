import React from 'react'
import "./Card.css"

const Card = ({productInfo}) => {
   console.log(productInfo);
  return (
    <div className='card'>
      <a href={productInfo.link} target="_blank">
        <img src={productInfo.img}/>
      </a>
        <div className="detail">
            <div className="price">
            <span>{productInfo.price} تومان</span>
            <span>امتیاز{productInfo.rate}</span>
            </div>
            <a href={productInfo.link} target="_blank">
            <span>{productInfo.title}</span>
            </a>
            
        </div>
    
    </div>
  )
}

export default Card