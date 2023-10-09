import Banner from "../Components/About/Banner";
import Aboutp from "../Components/About/Aboutp"
import Ab from "../Components/About/Ab";
import { useEffect } from "react";




const About = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
    return <div>
        <div>
          <Banner></Banner>
          <Aboutp></Aboutp>
          <Ab></Ab>
            
        </div>
    </div>
};

export default About;