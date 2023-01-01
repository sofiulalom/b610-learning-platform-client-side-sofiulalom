import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Catagory = () => {
     const  catagoris= useLoaderData();
    
    return (
        <div>
            <h4>this is catagrory: {catagoris.length}</h4>
          
          
     </div>
    );
};

export default Catagory;