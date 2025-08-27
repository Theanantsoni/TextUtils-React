import React, {useState} from "react"

export default function Textform2(props) {
   
    const HandleUpperClick = ()=>{
        
        console.log("Uppercase was clicked! " +text);

        let newText = text.toUpperCase();

        setText(newText)

        props.showAlert("Converted to uppercase", "success");
    }
    
    const HandleLowerClick = ()=>{
        
        console.log("Lowercase was clicked! " +text);

        let newText = text.toLowerCase();

        setText(newText)

        props.showAlert("Converted to lowercase", "success");
    }

    const HandleClearClick = ()=>{
        
        console.log("Lowercase was clicked! " +text);

        let newText = '';

        setText(newText)

        props.showAlert("Clear the textbox. Write new something", "success");
    }

    const HandleOnChange = (event)=>{
        
        console.log("On Change");
        
        setText(event.target.value)
    }

    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

        props.showAlert("Text copied successfully. Paste anywhere", "success");
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

        props.showAlert("Extra spaces removed successfully", "success");
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{color: props.mode === 'dark' ? 'white' : 'black' ,backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={HandleUpperClick}>Convert To Uppercase</button> 
            <button className="btn btn-primary mx-3" onClick={HandleLowerClick}>Convert To Lowercase</button>   
            <button className="btn btn-primary mx-3" onClick={HandleClearClick}>Clear Text</button>   
            <button className="btn btn-primary mx-3" onClick={handleCopyClick}>Copy Text</button>   
            <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Extra Spaces</button>   
        </div>

        <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Your text summary</h1>
            <p> {text.split(" ").length} Total Words, {text.length} Total Characters </p>
            <p>{0.008 * text.split(" ").length} minutes for reading all words</p>

            <h2>Preview : </h2>
            <p>{text.length>0?text:"Write something in the textbox above to preview it here"}</p>
        </div>

        </>
  )
}
