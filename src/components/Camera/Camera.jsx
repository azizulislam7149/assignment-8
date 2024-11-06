import React, { useEffect, useState } from 'react';
import Show from '../Show/Show';

const Camera = () => {

    const [cameras, setCamera]= useState([]);

    useEffect( ()=>{
fetch('../../../public/camera.json')
.then(res=>res.json())
.then(data=>setCamera(data));

    },[])
    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>camera</h1>
           
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-2xl'>
            {
                cameras.map(camera => <Show camera={camera} key={camera.id}></Show>)
            }
           </div>
        </div>
    );
};

export default Camera;