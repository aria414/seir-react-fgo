import { HorizontalBar, Line } from "react-chartjs-2";
import React from "react";
import "../App.scss";

const Mychart = (props) => {
  const [chartData, setChartData] = React.useState({});
  console.log("data passed in chart:", props);

  let count = 0;
  const levels = [];
  props.attackData.forEach((item) => {
    levels.push(++count);
  });

  React.useEffect(() => {
    setChartData({
      labels: levels,
      datasets: [
        {
          label: "Attack",
          data: props.attackData,
          backgroundColor: ["rgba(255, 99, 132, 0.0)"],
          borderWidth: 2,
          borderColor: "#e22f2f",
          hoverBorderWidth: 3,
          hoverBorderColor: "#000",
          pointBackgroundColor: "rgba(0, 0, 0, 0.1)",
          pointBorderColor: "rgba(0, 0, 0, 0.0)",
          pointStyle: "line",
        },
        {
          label: "Health",
          data: props.healthData,
          backgroundColor: ["rgba(65, 219, 129, 0.0)"],
          borderWidth: 2,
          borderColor: "#15af27",
          hoverBorderWidth: 3,
          hoverBorderColor: "#000",
          pointBorderColor: "rgba(0, 0, 0, 0.0)",
          pointStyle: "line",
        },
      ],
    });
  }, []);

  /* --------------------------------------------
  React.useEffect(() => {
    setChartData({
      labels: ["Min Level", "Max Level"],
      datasets: [
        {
          label: "Attack Level: (1 - 80)",
          data: [1455, 8730],
          //backgroundColor:'green',
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(255, 99, 132, 0.8)",
          ],
        },
        {
          label: "Attack: (90 - 100)",
          data: [9653, 10575],
          //backgroundColor:'green',
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(255, 99, 132, 0.8)",
          ],
        },
        {
          label: "Health Level: (1 - 80)",
          data: [2060, 12877],
          //backgroundColor:'green',
          backgroundColor: [
            "rgba(75, 192, 192, 0.6)",
            "rgba(75, 192, 192, 0.8)",
          ],
        },
        {
          label: "Health: (90 - 100)",
          data: [14248, 15619],
          //backgroundColor:'green',
          backgroundColor: [
            "rgba(75, 192, 192, 0.6)",
            "rgba(75, 192, 192, 0.8)",
          ],
        },
      ],
    });
  }, []);

--------------------------- */

  return (
    <div className="chart">
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          title: {
            display: true,
            text: "Growth Curve",
            fontSize: 25,
          },
          legend: {
            display: true,
            //position: "right",
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  //max: 100,
                  //display:false
                },
                gridLines: {
                  display: true,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  display: true,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Mychart;
