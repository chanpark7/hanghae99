import React from 'react';
import './App.css';
import Line from './Line';
import { Route } from "react-router-dom";
import Detail from './Detail';
import { useState } from 'react';




function App(props) {
  const week = props.week

  const Random = (Math.random() * (5 - 1) + 1).toFixed(1);
  const [count,setCount] = React.useState(Random);
  
  

  function changeRandom() {
    setCount(0);
  } 

  return (
    <div className="main">
      <Route path='/' exact>
        <h3 >내 일주일은?</h3>
        <Line text="월" />
        <Line text="화" />
        <Line text="수" />
        <Line text="목" />
        <Line text="금" />
        <Line text="토" />
        <Line text="일" />
        <h2>평균 평점</h2>
        <p>{count}</p>
        <button onClick={changeRandom}>Reset</button>
      </Route>

      <Route path='/detail' exact>
        <Detail />
      </Route>


    </div>

  );
}

export default App;
