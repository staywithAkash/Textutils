// import React from 'react'
import React, { useState } from 'react';
export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("upper case button clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.alertFn("Converted to uppercase","success")
    }
    const handlelowClick = ()=>{
      console.log("upper case button clicked");
      let newtext=text.toLowerCase();
      setText(newtext);
      props.alertFn("Converted to lowercase","success");
  }
    const clear=()=>{
  //   let textclear=" ";
     setText(" ");
     props.alertFn("Text is cleared","success");
    }

    const handleOnChange = (event)=>{
        console.log("onChange");
        setText(event.target.value);
    }
    const [text ,setText]=useState("");
  return (
<>
<div className={`text-${props.mode1==='light'?'dark':'light'} bg-${props.mode1}`}>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" style={{backgroundColor:props.mode1==='dark'?'#666464':'white', color:props.mode1==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary " onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
<button className="btn btn-primary mx-2"  onClick={handlelowClick}>CONVERT TO lowercase</button>
<button onClick={clear} className="btn btn-primary">Clear Text</button>
</div>
<div className={`text-${props.mode1==='light'?'dark':'light'} bg-${props.mode1}`}>
  <h2>Text Summary</h2>
{/* <div>{text.split(" ").length} words </div> */}
<div>{text.split(" ").length} words</div>
<div>{text.length} characters</div>
<div>time required to read {text.split(" ").length*0.008} minutes</div>
<div className="container my-3 ">
<h5>Text Preview</h5>
<p>{text}</p>
</div>
    </div>
</>
  )
}
