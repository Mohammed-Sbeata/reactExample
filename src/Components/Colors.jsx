import React from "react";

export const Color = () => {
    const colors = ['red','yellow','green','blue','white'];
    const [currentColor, setColor] = React.useState(colors[0]);
    const handleClick = ((color)=>{
        setColor(color)
    })
    return (
        <>
        <div style={{ width:100, height:50, background: currentColor}}></div>
        <br />
        <div>
            {
                colors.map((color,index) => {
                   return <button key = {index} onClick = {()=>handleClick(color)} > {color}</button>
                })
            }
        </div>
        </>
    )
}

