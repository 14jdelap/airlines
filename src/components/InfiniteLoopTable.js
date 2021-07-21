import React, { useEffect, useState } from "react";
import Row from "./Row";
import Button from "./Button";
import HeaderCell from "./HeaderCell";
import data from "../data.js";

const routes = data.routes;

const Table = ({className, columns, rows, format, appState, setAppState}) => {
  const [ startingRoute, setStartingRoute ] = useState(0);
  const [ tableState, setTableState ] = useState({
    disablePrevious: true,
    disableNext: "",
  })

  // If no rows are passed set to 25
  rows = rows || 25;

  const paginateRoutes = () => {
    return routes.slice(startingRoute, startingRoute + rows);
  }

  const paginatedRoutes = paginateRoutes();

  const nextPage = () => {
    setTableState({
      ...tableState,
      startingRoute: startingRoute + rows
    });
  }

  const previousPage = () => {
    setTableState({
      ...tableState,
      startingRoute: startingRoute - rows
    });
  }

  const hook = () => {
    const newState = {...tableState};

    // Set whether the previous button is disabled
    if ((startingRoute - rows) < 0) {
      newState["disablePrevious"] = true;
    } else {
      newState["disablePrevious"] = "";
    }

    // Set whether the next button is disabled
    if ((startingRoute + rows) > routes.length) {
      newState["disableNext"] = true;
    } else {
      newState["disableNext"] = "";
    }

    setTableState(newState);
  }

  useEffect(hook, [tableState]);

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
      <Button onClick={previousPage} disabled={tableState.disablePrevious} text="Previous page" />
      <Button onClick={nextPage} disabled={tableState.disableNext} text="Next page" />
    </div>
  )
}

export default Table;