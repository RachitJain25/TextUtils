import React,{useState} from 'react'

export default function TextForm(props) {
    const handleOnchange=(event)=>{
       // console.log("onchange")
        setText(event.target.value);
    }
    const handleupclick=()=>{
        //console.log("upeercase clicked"+text);
       // setText("you have clicked handleupclick")
       let newtext=text.toUpperCase();
       setText(newtext); 
       props.showAlert("Converted to uppercase","success")

    }
    const handleloclick=()=>{
       let newtext=text.toLowerCase();
       setText(newtext); 
       props.showAlert("converted to lowercase","success")

    }
    const handleclearclick=()=>{
        let newtext="";
        setText(newtext); 
        props.showAlert("Text Cleared","success")

     }

    const[text,setText]=useState("");
  return (
    <>
    <div  style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
     <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white' ,color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
     </div>
     <button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleupclick}>Convert To uppercase</button>
     <button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleloclick}>Convert To lowercase</button>
     <button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleclearclick}>Clear</button>


    </div>
    <div className="container"style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} Words and  {text.length} Characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes Reading Time</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Nothing To Preview..."}</p>
    </div>
    </>
  )
}
