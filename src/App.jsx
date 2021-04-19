import React, { useState } from 'react';

const App = () => {

    const state = useState();
    const [count, setCount] = useState(0);
    const IncNum = () => {
        setCount(count + 1);
    };
    const IncNumdec = () => {
        // if (count>0) {
        //     setCount(count - 1);
        // }
        // else{
        //     setCount(count);
        // };

        {(count>0)? setCount(count - 1): setCount(count) };
       
    };
    

    return (
        <>
        <div className="addToCart">
            <h1 className="heading_style"> <span className="heading_style_changed" > {count} </span>Product </h1>
            <button className="button button1" onClick={IncNumdec}>Remove</button>
            <button className="button" onClick={IncNum}>Add</button>
            </div>
        </>
    );
};

export default App;