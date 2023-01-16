import React from 'react';
import '../App.css';
import AudioButton from './AudioButton.js';
import { audioButtons } from '../data.js';

function Grid () {

    console.log(audioButtons[0])

    const rows = [];
    for(let i=0; i < audioButtons.length; i+=1){
        rows.push(<AudioButton name={audioButtons[i].fileName} text={audioButtons[i].text} />);
    }

    return (
        <div class="grid">
            {rows}
        </div >
    );
}

export default Grid;
