import './App.css';
import React from 'react';
import {Welcome} from "./welcome";
import {Counter} from "./welcome";
import Counters from "./counters";
import {ClickCounter} from "./counters";


function hello() {
  return (
      <div className="App">
        <h1>HELLO</h1>
          {message()}
          <Welcome name={<strong>John</strong>} age={16}></Welcome>
          <Counter initVal={0} incInv={1000} incAm={1}></Counter>
          <Counters incAm={1} initVal={0} incInv={1000} ></Counters>
          <ClickCounter></ClickCounter>

      </div>

  );
}

export function message(){
    return <div>
        <p>It's time to learn React!!! </p>
    </div>
}




export default hello;

