import React, { useState } from 'react';
import './App.css';
import Table from "./components/Table";
import Filter from "./components/Filter";

const columns = [
  {name: 'Airline', property: 'airline'},
  {name: 'Source Airport', property: 'src'},
  {name: 'Destination Airport', property: 'dest'},
];

function formatValue(property, value) {
  return "Hello!"
  // return a string
}

const App = () => {
  const [ appState, setAppState ] = useState({
    airline: null,
    airport: null,
  });

  return (
  <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <Filter state={appState}/>
      <Table className="routes-table" columns={columns} rows="" format={formatValue} state={appState} setState={setAppState}/>
    </section>
  </div>
  )
}

export default App;