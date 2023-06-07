import './App.css';
import React from 'react';
import {Welcome} from "./welcome";
import {Counter} from "./welcome";
import Counters from "./counters";
import {ClickCounter} from "./counters";
import {ClickTracker} from "./counters";
import {InteractiveWelcome} from "./welcome";
import {Login} from "./similar files";
import {Todo} from "./Todo";
import {ClickCounters} from "./counters";
import {Login2} from "./similar files";

function hello() {
  return (
      <div className="App">
        <h1>HELLO</h1>
          {message()}
          <Welcome name={<strong>John</strong>} age={16}></Welcome>
          <Counter initVal={0} incInv={1000} incAm={1}></Counter>
          <Counters incAm={1} initVal={0} incInv={1000} ></Counters>
          <ClickCounter></ClickCounter>
          <ClickTracker></ClickTracker>
          <InteractiveWelcome></InteractiveWelcome>
          <Login></Login>
          <Todo></Todo>
          <ClickCounters></ClickCounters>
          <Login2></Login2>
      </div>

  );
}

export function message(){
    return <div>
        <p>It's time to learn React!!! </p>
    </div>
}




export default hello;

