import './App.css';
import React from 'react';
import {Welcome} from "./exx";



function hello() {
  return (
      <div className="App">
        <h1>HELLO</h1>
        <Welcome name='Akwasi'></Welcome>
      </div>

  );
}

export function message(){
    return <div>
        <p>It's time to learn React!!! </p>
    </div>
}




export default hello;

