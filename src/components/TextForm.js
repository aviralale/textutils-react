import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Upcase clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
    document.title = "Uppercased - Text Utils";
  };
  const handleLowClick = () => {
    // console.log('Upcase clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
    document.title = "Lowercased - Text Utils"
  };

  const handleSymbols = () => {
    const symbolRegex = /[^a-zA-Z0-9\s]/g;
    let newText = text.replace(symbolRegex, "");
    setText(newText);
    document.title = "Desymboled - Text Utils"
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopyToClipboard = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.title = "Copied - Text Utils"
  }
  
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    document.title = "Prettified - Text Utils"
  }

  const handleOnChange = (event) => {
    // console.log('onChange Handled');
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  //   text = "dsdsfvs"; Wrong
  // setText("newText");
  return (
    <>
      <div className="relative my-6">
        <h1 className="text-2xl md:text-3xl font-bold">{props.heading}</h1>
        <textarea
          className={`text-${props.mode ==='zinc-900'?'light':'dark'} peer border-2 block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:border-neutral-600 focus:border-primary`}
          id="myBox"
          rows={16}
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button
          className={`btn ${props.mode ==='zinc-900'?'btn-outline':''} btn-${props.colorType} mx-1 my-2`}
          onClick={handleUpClick}
        >
          Uppercase
        </button>
        <button
          className={`btn ${props.mode ==='zinc-900'?'btn-outline':''} btn-${props.colorType} mx-1 my-2`}
          onClick={handleLowClick}
        >
          Lowercase
        </button>
        <button
          className={`btn ${props.mode ==='zinc-900'?'btn-outline':''} btn-${props.colorType} mx-1 my-2`}
          onClick={handleSymbols}
        >
          Remove Symbols
        </button>
        <button
          className={`btn ${props.mode ==='zinc-900'?'btn-outline':''} btn-${props.colorType} mx-1 my-2`}
          onClick={removeExtraSpaces}
        >
          Remove Extra spaces
        </button>
        <button
          className={`btn ${props.mode ==='zinc-900'?'btn-outline':''} btn-${props.colorType} mx-1 my-2`}
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div className="container my-2">
        <h2 className="text-xl md:text-2xl font-bold">Your text summary</h2>
        <p>
          <b>{text.split(" ").length}</b> words, <b>{text.length}</b> characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> Avg. minute read
        </p>
        <h3 className="mt-3 mb-1 font-bold text-xl">Preview:</h3>
        <div className={`mockup-code bg-${props.mode}`}>
          <pre data-prefix="">
            <code className={`text-${props.colorType}`}>{text}</code>
            
          </pre>
        </div>
          <button className={`btn ${props.mode ==='zinc-900'?'btn-outline':''} btn-${props.colorType} mx-1 my-2`}
        onClick={handleCopyToClipboard}
        >
            Copy to clipboard
        </button>
      </div>
    </>
  );
}
