import React from "react"
import App from "./App";
import Line from "./Line";
import './App.css';
import { useHistory, useParams } from "react-router-dom";
import { useState  } from 'react';

function Detail(props) {
    const history2 = useHistory();
    
    const [circle, circleChange] = React.useState([0, 1, 2, 3, 4]);
    const [index, indexChange] = React.useState();
   
    function randomInt() {
        window.location.reload();
    }
    return (
        <div>
            <p><span>{}요일</span> 평점 남기기</p>
            <div className="line">

                {circle.map((e, i) => {
                    return <div key={i} className="round"
                        onClick={() => {
                            indexChange(i);
                        }} style={{ backgroundColor: i <= index ? ("yellow") : ("grey") }}
                    >
                    </div>
                })}
            </div>
            <button onClick={() => { history2.push("/"); randomInt() }}>평점 남기기</button>

        </div>




    )
};

export default Detail;