import React from 'react'
import classes from './New.module.css';

import image from '../../Assets/corepnproduct.webp';


const New = () => {
  return (
    <section className={classes.aka1}>
          
                    <div className={classes.image}> 
                    <img src={image} className={classes.img}></img>
                    </div>

                   <div>
                    <table>
                                       <tr>
                                       <td>Alfreds Futterkiste</td>
                                       <td>Maria Anders</td>
                                     
                                    </tr>

                                   <tr>
                                     <td>Centro comercial Moctezuma</td>
                                     <td>Francisco Chang</td>
                                     
                                    </tr>

                                         <tr>
                                          <td>Ernst Handel</td>
                                         <td>Roland Mendel</td>
                                         
                                         </tr>
                                        
                                        <tr>
                                        <td>Island Trading</td>
                                        <td>Helen Bennett</td>
                                         
                                        </tr>
  
                                          <tr>
                                       <td>Laughing Bacchus Winecellars</td>
                                       <td>Yoshi Tannamuri</td>
                                       
                                       </tr>
  
                                          
                    </table>
                       <p></p>

                   </div>























    </section>
  )
}

export default New