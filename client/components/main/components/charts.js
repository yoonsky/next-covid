import { Typography } from "antd";
import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ totalData }) => {
  const dates = [];
  const decideCnt = [];
  const clearCnt = [];

  for (let i = 0; i < totalData.length - 1; i++) {
    dates.unshift(totalData[i].stateDt._text);
    decideCnt.unshift(
      totalData[i].decideCnt._text - totalData[i + 1].decideCnt._text
    );
    clearCnt.unshift(
      totalData[i].clearCnt._text - totalData[i + 1].clearCnt._text
    );
  }

  const data = {
    labels: dates,
    datasets: [
      {
        label: "확진자",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(247,79,18,0.4)",
        borderColor: "rgba(247,79,18,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(247,79,18,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(247,79,18,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: decideCnt,
      },
      {
        label: "격리해제",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(18,135,247,0.4)",
        borderColor: "rgba(18,135,247,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(18,135,247,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(18,135,247,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: clearCnt,
      },
    ],
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Typography.Text mark>
        [일주일 / 전국 확진환자 및 격리해제 그래프]
      </Typography.Text>
      <Line data={data} width={300} height={300} />
    </div>
  );
};

export default Chart;
