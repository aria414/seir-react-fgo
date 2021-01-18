import { HorizontalBar } from "react-chartjs-2";
import React from "react";

const Mychart = () => {
  const [chartData, setChartData] = React.useState({
    labels: ["Min Level", "Max Level"],
    datasets: [
      {
        label: "Attack Level: (1 - 80)",
        data: [1455, 8730],
        //backgroundColor:'green',
        backgroundColor: [
            "rgba(255, 99, 132, 0.6)", 
            "rgba(255, 99, 132, 0.8)"
        ],
      },
      {
        label: "Attack: (90 - 100)",
        data: [9653, 10575],
        //backgroundColor:'green',
        backgroundColor:[
            "rgba(255, 99, 132, 0.6)", 
            "rgba(255, 99, 132, 0.8)"
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

  // const [chartData, setChartData] = React.useState({
  //     labels: ["Strength"],
  //     datasets: [
  //       {
  //         label: "Population",
  //         data: [40],
  //         //backgroundColor:'green',
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.6)",
  //         ],
  //         border: "solid"
  //       },
  //     ],
  //   });

  //   backgroundColor: [
  //     "rgba(255, 99, 132, 0.6)",
  //     "rgba(54, 162, 235, 0.6)",
  //     "rgba(255, 206, 86, 0.6)",
  //     "rgba(75, 192, 192, 0.6)",
  //     "rgba(153, 102, 255, 0.6)",
  //   ],

  return (
    <div>
      <h3>Mashu's Attack and Health</h3>
      <HorizontalBar
        data={chartData}
        options={{
          title: {
            display: false,
            text: "Attack and Health",
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
                  display: false,
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
