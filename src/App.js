import './App.css';
import React from 'react';
import {Welcome} from "./welcome";
import {Counter} from "./welcome";


function hello() {
  return (
      <div className="App">
        <h1>HELLO</h1>
          {message()}
          <Welcome name={<strong>John</strong>} age={16}></Welcome>
          <Counter></Counter>

      </div>

  );
}

export function message(){
    return <div>
        <p>It's time to learn React!!! </p>
    </div>
}




export default hello;

