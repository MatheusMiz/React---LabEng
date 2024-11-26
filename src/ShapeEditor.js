import { useState } from "react";

let initiaShapes = [
    {id: 0, type:'Circle', x:200, y: 2200 },
    {id: 1, type:'Square', x:250, y: 2200 },
    {id: 2, type:'Circle', x:350, y: 2200 },
]

export default function ShapeEditor(){
    const [shapes, setShapes] = useState(initiaShapes);
    function handleClick(){
        const nextShapes = shapes.map(shape => {
            if(shape.type === 'Square'){
                return shape;
            } else{
                return{
                    ...shape,
                    y: shape.y+50,
                };
            }
        });
        setShapes(nextShapes);
    }
    return(
        <>
        <button onClick={handleClick}>Move Circle Down</button>
        {shapes.map(shape =>(
            <div key={shape.id}
                    style={{
                    background: 'purple',
                    position:'absolute',
                    left: shape.x,
                    top: shape.y,
                    borderRadius:
                        shape.type ==='Circle'
                        ? '50%': '',
                    width: 20,
                    height: 20,

                 }}
            ></div>
        ))}
        </>
    )
}

