import React,{useState} from 'react'


export default function Textform(){

  const handleUpClick = ()=>{
    console.log("uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
  }
  const handleLightTheme = () => {
    document.querySelector('body').style.backgroundColor = "white"
  }
  const handleDarkTheme = () => {
    document.querySelector('body').style.backgroundColor = "black" 
   // showAlert("Dark mode has been enabled","success");
  }

  const handleOnChange= (event)=>{
    console.log("0n change");
    setText(event.target.value);

  }
  const handlelowClick = ()=>{
    console.log("uppercase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const [text,setText]= useState('');
// setText("new text");
  return (
    <div>
      <div className="container">
<div className="form-floating">
  <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter your text " id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea"></label>
  <br></br>
  </div>
  <button className="btn-primary mx-2" onClick={handleUpClick}>convert to Uppercase</button>
  <button className="btn-primary" onClick={handlelowClick}>convert to Lowercase</button>
  <button className="btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn-primary mx-2" onClick={handleLightTheme}>Convert Theme into Light</button>
  <button className="btn-primary mx-2" onClick={handleDarkTheme}>Convert Theme into Dark</button>
</div>
<div className="container">
  <div className="container my-3"> </div>  <h2>
    your text Summary
  </h2>
  <p>{text.split(" ").length}words and {text.length} charcters</p>
  <p>{0.008* text.split(" ").length }Minutes read</p>
  <h3>Preview</h3>
  <p>{text}</p>
</div>
    </div>
  )
}
