import React, {useState} from "react"

export default function Textform(props) {
   
    const HandleUpClick = ()=>{
        
        console.log("Uppercase was clicked! " +text);

        let newText = text.toUpperCase();

        setText(newText)
    }

    const HandleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here : ');

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={HandleUpClick}>Convert To Uppercase</button>    
        </div>
  )
}
