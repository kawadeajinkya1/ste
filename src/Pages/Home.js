import Poster from "../Components/Home/Poster";
import Productscards from "../Components/Home/Productscards";
import Patronslider from "../Components/Home/Patronslider";
import Cpasm from "../Components/Home/Cpasm";
import Counter from "../Components/Home/Counter";
import Award from "../Components/Home/Award";
import Wwr from "../Components/Home/Wwr";

import { useEffect } from "react";




const Home = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return <div>
        <div>
        
        <Poster></Poster>
        <Wwr></Wwr>
        <Productscards></Productscards>
        <Counter end={10}></Counter>
        <Award></Award>
        <Patronslider></Patronslider>
        <Cpasm></Cpasm>
      
       
        
        </div>
    </div>
};

export default Home;