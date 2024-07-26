import { Outlet } from "react-router-dom";
import Nav from '../Components/Home/Nav';
import Navi from '../Components/Nav/Nb';
import { Footer } from "../Components/Home/Footer";
import Wpp from "../Components/Home/Wpp"; 

const RootLayout = () => {
    return <div>
 
        <Navi></Navi>
         
        <Outlet></Outlet>
        <Wpp></Wpp>
         <Footer></Footer>
         
    </div>
};

export default RootLayout;