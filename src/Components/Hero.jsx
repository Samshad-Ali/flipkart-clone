import React from "react";
import { FaAngleDown } from "react-icons/fa";
import Item from "./Item";

const array = [
  {
    name: "Grocery",
    imgSrc:
      "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
  },
  {
    name:'Mobiles',
    imgSrc:'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100'
  }
  ,
  {
    name:'Fashions',
    imgSrc:'https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100',
    icon :<FaAngleDown/>
  },
  {
    name:'Electronics',
    imgSrc:'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
    icon :<FaAngleDown/>
  },
  {
    name:'Home',
    imgSrc:'https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100',
    icon :<FaAngleDown/>
  },
  {
    name:'Appliances',
    imgSrc:'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100',
 
  },
  {
    name:'Travel',
    imgSrc:'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100',
  },
  {
    name:'Top Offers',
    imgSrc:'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100',
  },
  {
    name:'Beauty, Toys & more',
    imgSrc:'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100',
    icon :<FaAngleDown/>


  },
  {
    name:'Two Wheelers',
    imgSrc:'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100',
    icon :<FaAngleDown/>

  },

];

const Hero = () => {
  return (
    <div className="item-box">
           {
            array.map((item,i)=><Item name={item.name} imgSrc={item.imgSrc} icon={item.icon} key={i}  />)
           }
    </div>
  );
};

export default Hero;
