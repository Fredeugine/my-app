import './App.css';
import React from 'react';
import {Welcome} from "./exx";



function hello() {
  return (
      <div className="App">
        <h1>HELLO</h1>
          {message()}
          <Welcome name={<strong>John</strong>} age={60}></Welcome>

      </div>

  );
}

export function message(){
    return <div>
        <p>It's time to learn React!!! </p>
    </div>
}




export default hello;

