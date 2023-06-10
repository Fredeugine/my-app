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
import {Dd} from "./LanContext";
import {FetchData} from "./FetchData";
import {GithubUserList} from "./FetchData";

function hello() {
    function onchange(event){
        return console.log('Counter changed to'+ {event})
    }
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
          <ClickCounters onchg={onchange}></ClickCounters>
          <Login2></Login2>
          <Dd></Dd>
          <FetchData username={'lucy'}></FetchData>
          <GithubUserList></GithubUserList>
      </div>

  );
}

export function message(){
    return <div>
        <p>It's time to learn React!!! </p>
    </div>
}




export default hello;

