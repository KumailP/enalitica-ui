import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import "./style.scss";

export default function index(props) {
  console.log(props);

  let data = [];
  if (props.i === 0) {
    data = [
      {
        year: 1960,
        value: 9.035222052
      },
      {
        year: 1961,
        value: 7.743082001
      },
      {
        year: 1962,
        value: 11.51732378
      },
      {
        year: 1963,
        value: 7.68226333
      }
    ];
  } else if (props.i === 1) {
    data = [
      {
        year: 1960,
        value: 15
      },
      {
        year: 1961,
        value: 7.743082001
      },
      {
        year: 1962,
        value: 5.51732378
      },
      {
        year: 1963,
        value: 7.68226333
      }
    ];
  } else {
    data = [
      {
        year: 1960,
        value: 77.896
      },
      {
        year: 1961,
        value: 77.499
      },
      {
        year: 1962,
        value: 77.249
      },
      {
        year: 1963,
        value: 76.998
      },
      {
        year: 1964,
        value: 76.744
      },
      {
        year: 1965,
        value: 76.489
      }
    ];
  }

  return (
    <div className="graphview">
      {!props.title ? (
        <div className="graphview-title">
          <h1>No data point selected</h1>
        </div>
      ) : (
        <>
          <div className="graphview-title">
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
          </div>
          <div className="graphview-buttons">
            <button type="button">Filter</button>
            <button type="button">Sort</button>
            <button type="button">Group by</button>
            <button type="button">Forecast</button>
          </div>
          {/* 192.168.0.106:4000/api */}
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis dataKey="value" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </>
      )}
    </div>
  );
}
