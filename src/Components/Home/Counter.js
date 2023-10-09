import React from 'react';
import { useEffect, useRef, useState } from 'react';
import classes from './Counter.module.css';



const Num = ({ end = 10 }) => {
    const [state, setState] = useState(null);
    const ref = useRef(0);

    const accumulator = end / 200;

    const updatecounterState = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current + accumulator);

            if (result > end) return setState(end);
            setState(result);
            ref.current = result;
        }
        setTimeout(updatecounterState, 1000)
    };

    useEffect(() => {
        let isMounted = true;
        if (isMounted) { updatecounterState() };

        return () => isMounted = false;
    }, [end]);



    return <div>
        <div className={classes.container}>
            <div className={classes.hold}>
            
                <div><span className={classes.num}>{state+15}+</span></div>
                <div><span className={classes.k}>Years Of Experience</span></div>
            
            </div>
            <div className={classes.hold1}>
            
                <div><span className={classes.num}>{state+45}+</span></div>
                <div><span className={classes.k}>Number of Clients</span></div>
                
            </div>
    <div className={classes.hold1}>
     
    <div><span className={classes.num}>{state+5}+</span></div>
    <div><span className={classes.k}>Number of Employees</span></div>
    
</div>

        </div >
 
    </div>
};

export default Num;