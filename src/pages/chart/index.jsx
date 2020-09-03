import React from "react";
import { Pie } from "react-chartjs-2";

const Chart = ({ characters }) => {
  const charactersData = characters.reduce((current, { species }) => {
      current[species] ? 
      (current[species] += 1) :
      (current[species] = 1);
    return current;
  }, {});

  const data = {
    labels: ["Rick and Morty", "Pokemon"],
    datasets: [
      {
        data: Object.values(charactersData),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default Chart;
