import React from 'react';
// import { useState } from "preact/hooks";
import '../App.css';
import { audioButtons } from '../data.js';

function AudioButton ({name, text}) {
  const btnName = name;
  const btnText = text; 
  
  let audio = new Audio(btnName)

  const start = () => {
      audio.play()
  }

  return (
    < div >
    
      <button onClick={start} class="button-30" role="button">{btnText}</button>

    </div >
  );
}

export default AudioButton;
