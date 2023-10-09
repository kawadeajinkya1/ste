import { Outlet } from "react-router-dom";
import Nav from '../Components/Home/Nav';
import { Footer } from "../Components/Home/Footer";


const RootLayout = () => {
    return <div>
        <Nav></Nav>
         
        <Outlet></Outlet>

         <Footer></Footer>
         
    </div>
};

export default RootLayout;