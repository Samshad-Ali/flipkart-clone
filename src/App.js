import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Slider from "./Components/Slider";
import ItemBox from "./Components/ItemBox";
import {Item,itemNo2} from './Components/data'
const App = () => {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <Slider/> 
      <ItemBox title={'Best of Electronics'} Item={Item} />
      <ItemBox title={'Best of Sports'}  Item={itemNo2} />
    </>
  );
};

export default App;
