import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./result.css";
import { personality } from "./data";

const Result = ({ type, first, second, third, fourth }) => {
  const chartData1 = {
    labels: ["Extroversion", "Introversion"],
    datasets: [
      {
        data: [first.E, first.I],
        backgroundColor: ["red", "blue"],
      },
    ],
  };
  const chartData2 = {
    labels: ["Intuative", "Sensing"],
    datasets: [
      {
        data: [second.N, second.S],
        backgroundColor: ["green", "yellow"],
      },
    ],
  };
  const chartData3 = {
    labels: ["Feeling", "Thinking"],
    datasets: [
      {
        data: [third.F, third.T],
        backgroundColor: ["purple", "orange"],
      },
    ],
  };
  const chartData4 = {
    labels: ["Judging", "Perceiving"],
    datasets: [
      {
        data: [fourth.J, fourth.P],
        backgroundColor: ["green", "blue"],
      },
    ],
  };

  console.log("data", personality[type.type]);
  return (
    <>
      <div className="result1">
        <h1 className="Result">Based On the Performance of Test</h1>
        <div className="Container1">
        <div className="personality">
        <h2><b>Predicted Personality:</b> </h2>
        <h3>
          {type.type}
          <span>({personality[type.type][0]})</span>
        </h3>
        <ul>
        <li>{personality[type.type][1]}</li>
        <li>{personality[type.type][2]}</li>
        <li>{personality[type.type][3]}</li>
        <li>{personality[type.type][4]}</li>
        <li>{personality[type.type][5]}</li>
        </ul>
        
        </div>
        <div className="personality">
        <h2><b>Career options</b></h2>
        <h2>Career options</h2>
        <ul>
        <li>{personality[type.type][6]}</li>
        <li>{personality[type.type][7]}</li>
        <li>{personality[type.type][8]}</li>
        <li>{personality[type.type][9]}</li>
        <li>{personality[type.type][10]}</li>
        </ul>
        </div>
      </div>
      </div>
      <div className="chart">
        <div className="column"><Doughnut data={chartData1} width={250} /></div>
        <div className="column"><Doughnut data={chartData2} width={250} /></div>
        <div className="column"><Doughnut data={chartData3} width={250} /></div>
        <div className="column"><Doughnut data={chartData4} width={250} /></div>
      </div>
    </>
  );
};

export default Result;