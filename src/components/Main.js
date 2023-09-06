import React, { useState } from 'react'
import TextForm from './TextForm';

export default function Main() {
    const [colorType, setColorType] = useState('error');
    const handleColorChange = (color) => {
        setColorType(color);
    }
    const [mode,setMode] = useState('zinc-900');
    const toggleMode = ()=> {
      if (mode === 'slate-200') {
        
        setMode('zinc-900');
        document.body.style.backgroundColor = 'rgb(39 39 42)';
        document.body.style.color = 'rgb(203 213 225)';
      }
      else{
        setMode('slate-200');
        document.body.style.backgroundColor = 'rgb(203 213 225)';
        document.body.style.color = 'rgb(55 65 81)';
      }
    }
  return (
    <div>
      <button className="btn btn-circle btn-info mx-1" onClick={ ()=> handleColorChange("info")}></button>
      <button className="btn btn-circle btn-success mx-1" onClick={ ()=> handleColorChange("success")}></button>
      <button className="btn btn-circle btn-primary mx-1" onClick={ ()=> handleColorChange("primary")}></button>
      <button className="btn btn-circle btn-error mx-1 " onClick={ ()=> handleColorChange("error")}></button>
      <button className="btn btn-circle btn-warning mx-1" onClick={ ()=> handleColorChange("warning")}></button>
      <button className="btn btn-circle btn-accent mx-1 " onClick={ ()=> handleColorChange("accent")}></button>
    
      <TextForm colorType={colorType} heading="Enter the text to analyse:" mode={mode} />
    </div> 
  )
}
