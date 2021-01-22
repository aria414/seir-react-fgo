import { HorizontalBar, Line } from "react-chartjs-2";
import React from "react";
import "../App.scss";

const Mychart = () => {
  const [chartData, setChartData] = React.useState({});

  React.useEffect(() => {
    setChartData({
      labels: ["Lv1", "Lv Max", "Grail 90", "Grail 100"],
      datasets: [
        {
          label: "Attack",
          data: [1666, 9999, 11048, 12107],
          backgroundColor: ["rgba(255, 99, 132, 0.0)"],
          borderWidth: 1,
          borderColor: "#e22f2f",
          hoverBorderWidth: 3,
          hoverBorderColor: "#000",
        },
        {
          label: "Health",
          data: [1781, 11135, 12313, 13501],
          backgroundColor: ["rgba(65, 219, 129, 0.0)"],
          borderWidth: 1,
          borderColor: "#15af27",
          hoverBorderWidth: 3,
          hoverBorderColor: "#000",
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
