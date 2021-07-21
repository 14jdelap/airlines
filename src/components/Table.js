import React, { useEffect, useState } from "react";
import Row from "./Row";
import Button from "./Button";
import HeaderCell from "./HeaderCell";
import data from "../data.js";

const routes = data.routes;

const Table = ({className, columns, rows, format, appState, setAppState}) => {
  const [ startingRoute, setStartingRoute ] = useState(0);
  const [ disablePrevious, setDisablePrevious ] = useState(true);
  const [ disableNext, setDisableNext ] = useState("");
  rows = rows || 25;

  const paginateRoutes = () => {
    return routes.slice(startingRoute, startingRoute + rows);
  }

  const paginatedRoutes = paginateRoutes();

  const nextPage = () => {
    setStartingRoute(startingRoute + rows);
  }

  const previousPage = () => {
    setStartingRoute(startingRoute - rows);
  }

  const hook = () => {
    if ((startingRoute - rows) < 0) {
      setDisablePrevious(true);
    } else {
      setDisablePrevious("");
    }

    if ((startingRoute + rows) > routes.length) {
      setDisableNext(true);
    } else {
      setDisableNext("");
    }
  }

  useEffect(hook);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column, idx) => <HeaderCell key={idx} name={column.name}/>)}
          </tr>
        </thead>
        <tbody>
          {paginatedRoutes.map((route, idx) => <Row key={idx} route={route}/>)}
        </tbody>
      </table>
      <p>Showing {startingRoute+1}-{startingRoute + paginatedRoutes.length} of {routes.length} routes.</p>
      <Button onClick={previousPage} disabled={disablePrevious} text="Previous page" />
      <Button onClick={nextPage} disabled={disableNext} text="Next page" />
    </div>
  )
}

export default Table;