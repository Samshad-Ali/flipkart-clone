import React from "react";
import SingleItem from "./SingleItem";
import TitleBox from "./TitleBox";

const ItemBox = ({Item,title}) => {
 
  return (
    <section className="container">
      <TitleBox title={title} />
      <div className="mini-container">

      {
        Item.map((item,i)=>{
          return <SingleItem name={item.name} price={item.price} brand={item.brand} imgScr={item.image} key={i} />
        })
      }
          </div>
    </section>
  );
};

export default ItemBox;
