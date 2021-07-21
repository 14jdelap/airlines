import React from "react";
import data from "../data.js";

const Filter = ({state, setState}) => {
  const showAll = () => {
    return true;
  }

  return (
    <p>
      Show routes on
        <select>
          <option value="all">All airlines</option>
          {data.airlines.map((airline, idx) => <option key={idx} value={airline["id"]}>{airline["name"]}</option>)}
        </select>
      flying in or out of
        <select>
          <option value="all">All airports</option>
          {data.airports.map((airport, idx) => <option key={idx} value={airport["code"]}>{airport["name"]}</option>)}
        </select>
        <button onClick={showAll}>
          Show all routes
        </button>
    </p>
  )
}

export default Filter;