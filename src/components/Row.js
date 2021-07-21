import React from "react";
import data from "../data.js";

const Row = ({route}) => {
    const airline = data.getAirlineById(route["airline"]);
    const source = data.getAirportByCode(route["src"]);
    const destination = data.getAirportByCode(route["dest"]);

    return (
      <tr>
        <td>
          {airline}
        </td>
        <td>
        {source}
        </td>
        <td>
        {destination}
        </td>
      </tr>
    );
}

export default Row;