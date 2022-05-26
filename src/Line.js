import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from 'react-router-dom';


function Line(props) {
    const [circle, circleChange] = React.useState([0, 1, 2, 3, 4]);
const [index, indexChange] = React.useState();
    const history = useHistory();
    return (
        <div className='line'>
            <p className='day'>{props.text}</p>
            {circle.map((e, i) => {
                    return <div className="round"
                        onClick={() => {
                            indexChange(i)
                        }} style={{ backgroundColor: i <= index ? ("yellow") : ("grey") }}
                    >
                    </div>
                })}
            <div className='tri' onClick={() => { history.push("/detail"); history.push({
                pathname : "/detail",
                state : {data:props.text}
            })}}></div>
        </div>
    )
};

export default Line;

