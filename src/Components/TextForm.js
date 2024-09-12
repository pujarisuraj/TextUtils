import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');

    const Uppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Uppercase !", "success");
    }
    const LowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase !", "success");
    }
    const ClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared !", "success");
    }
    const CopyText = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard ! ", "success");
    }
    const RemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed !", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heding}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id='mybox' style={{ backgroundColor: props.mode === 'dark' ? '#12477b' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} placeholder='Enter the Text ...' value={text} onChange={handleOnChange} rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={Uppercase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={LowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={ClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={CopyText}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <h3>Your Text Summary</h3>
                <table className="table table-bordered text-center">
                    <thead >
                        <tr>
                            <th style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'light' ? 'black' : 'white' }}>Word</th>
                            <th style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'light' ? 'black' : 'white' }}>Characters</th>
                            <th style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'light' ? 'black' : 'white' }}>Minutes to Read</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} >
                                {text.split(/\s/).filter((element) => { return element.length !== 0 }).length}
                            </td>
                            <td style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'light' ? 'black' : 'white' }}>
                                {text.length}
                            </td>
                            <td style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'light' ? 'black' : 'white' }}>
                                {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="container">
                    <h3>Your Text Preview</h3>
                    <p> {text.length > 0 ? text : "Nothing to Preview! "}</p>
                </div>
            </div>
        </>
    )
}
