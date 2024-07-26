import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Corepins from './Components/Product/Corepins';
import Cdc from './Components/Product/Cdc';
import Gradingw from './Components/Product/Gradingw';
import Hfa from './Components/Product/Hfa';
import Industrialc from './Components/Product/Industrialc';
import Pc from './Components/Product/Pc';
import Dr from './Components/Product/Dr';
import Restpad from './Components/Product/Restpad';
import Ttc from './Components/Product/Ttc';
import Vsa from './Components/Product/Vsa';

import RootLayout from './Pages/RootLayout';

const router = createHashRouter([{
  path: '/',
  element: <RootLayout></RootLayout>,
  children: [
    { path: '/', element: <Home></Home> },
    { path: '/about', element: <About></About> },
    { path: '/product', element: <Product></Product> },
    { path: '/contact', element: <Contact></Contact> },
    { path: '/corepin', element: <Corepins></Corepins> },
    { path: '/cdc', element: <Cdc></Cdc> },
    { path: '/grading', element: <Gradingw></Gradingw> },
    { path: '/hfa', element: <Hfa></Hfa> },
    { path: '/industrialc', element: <Industrialc></Industrialc> },
    { path: '/pc', element: <Pc></Pc> },
    { path: '/dr', element: <Dr></Dr> },
    { path: '/restpad', element: <Restpad></Restpad> },
    { path: '/ttc', element: <Ttc></Ttc> },
    { path: '/vsa', element: <Vsa></Vsa> },
  ]
}]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;



// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';


// import Home from './Pages/Home';
// import About from './Pages/About';
// import Product from './Pages/Product';
// import Contact from './Pages/Contact';
// import Corepins from './Components/Product/Corepins';
// import Cdc from './Components/Product/Cdc';
// import Gradingw from './Components/Product/Gradingw';
// import Hfa from './Components/Product/Hfa';
// import Industrialc from './Components/Product/Industrialc';
// import Pc from './Components/Product/Pc';
// import Dr from './Components/Product/Dr';
// import Restpad from './Components/Product/Restpad';
// import Ttc from './Components/Product/Ttc';
// import Vsa from './Components/Product/Vsa';

// import RootLayout from './Pages/RootLayout';





// const router = createBrowserRouter([{
//   path: '/',
//   element: <RootLayout></RootLayout>,

//   children: [
    
//     { path: '/', element: <Home></Home> },
//     { path: '/about', element: <About></About> },
//     { path:'/product', element:<Product></Product>},
//     { path:'/Contact', element:<Contact></Contact>},
//     { path:'/Corepin', element:<Corepins></Corepins>},
//     { path:'/Cdc', element:<Cdc></Cdc>},
//     { path:'/Grading', element:<Gradingw></Gradingw>},
//     { path:'/Hfa', element:<Hfa></Hfa>},
//     { path:'/Industrialc', element:<Industrialc></Industrialc>},
//     { path:'/Pc', element:<Pc></Pc>},
//     { path:'/Dr', element:<Dr></Dr>},
//     { path:'/Restpad', element:<Restpad></Restpad>},
//     { path:'/Ttc', element:<Ttc></Ttc>},
//     { path:'/Vsa', element:<Vsa></Vsa>},



    
    


//   ]
// }]);  





// const App = () => {
//   return <RouterProvider router={router}></RouterProvider>

// };

// export default App
