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
import {CarDetailsForm, FetchData, NumberDisplay, StudentDetails} from "./FetchData";
import {GithubUserList} from "./FetchData";
import {MyFormComponent} from "./chapp";
import {InCount} from "./counters";
import {ShowGithubUser} from "./chapp";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Link } from "react-router-dom";

function hello() {
    function onchange(event){
        return console.log('Counter changed to'+ {event})
    }
    const initialData = {
        model: 'io',
        year: '1234',
        color: 'red'
    };
  return (
      <div className="App">

          <Routes>
              <Route path="/counter" element={<Counters></Counters>}></Route>
              <Route path="users/:username" element={<ShowGithubUser></ShowGithubUser>}></Route>
              <Route path="/Todo" element={<Todo></Todo>}></Route>
          </Routes>
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
         <MyFormComponent></MyFormComponent>
          <InCount></InCount>
          <ShowGithubUser></ShowGithubUser>
          <CarDetailsForm initialdata={initialData}></CarDetailsForm>
          <Link path={'users/:lucy'}><p>showGithubuser Link</p></Link>
          <Link path={'/counter'}><p>Counter Link</p></Link>
          <Link path={'/Todo'}><p>Todos Link</p></Link>


      </div>

  );
}

export function message(){
    return <div>
        <p>It's time to learn React!!! </p>
    </div>
}




export default hello;

