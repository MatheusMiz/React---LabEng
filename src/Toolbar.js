import React from 'react';

export default function Toolbar(){
    return(
        <div className='Toolbar' onClick={()=>{
            alert('You clicked on the Toolbar')
        }}>
            <button onClick={()=> alert('Playing')}>
                Play Movie
            </button>
            <button onClick={()=> alert('Uploading')}>
                Upload Image
            </button>

        </div>
    )
}
