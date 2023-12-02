import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = () => {
        setText('');
    }

    return (
        <>

            <div className="container my-3">
                <h1 style={props.textStyle}>{props.message}</h1>
                <div className="mb-3">

                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={handleClear}>Clear</button>
            </div>
            <div className="container my-5">
                <h1 style={props.textStyle}>Your text summary</h1>
                <p style={props.textStyle}>{text.split(" ").length - 1} Words  {text.length} Characters</p>

                <p style={props.textStyle}>{0.008 * (text.split(" ").length - 1)} Minutes read</p>
                <h2 className="my-2" style={props.textStyle}>Preview</h2>
                <p style={props.textStyle}>{text}</p>
            </div>
        </>
    )
}
