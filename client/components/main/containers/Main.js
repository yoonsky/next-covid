import { Col, Row, Typography } from "antd";
import Stat from "../components/statistic";
import Chart from "../components/charts";
import React from "react";
import { useSelector } from "react-redux";

const colors = {
  red: "#EE2222",
  orange: "#EE6022",
  blue: "#2258EE",
  purple: "#330D71",
};

const Main = () => {
  const { totalData, sidoData } = useSelector((state) => state.main);

  let sidoList = [];

  sidoData?.forEach((item) => {
    sidoList.push({
      title: item.gubun._text,
      value: item.incDec._text,
      increase: "-",
      color: colors.red,
    });
  });

  const List = [
    {
      title: "확진환자",
      value: totalData[0]?.decideCnt._text,
      increase: totalData[0]?.decideCnt._text - totalData[1]?.decideCnt._text,
      color: colors.red,
    },
    {
      title: "검사진행",
      value: totalData[0]?.examCnt._text,
      increase: totalData[0]?.examCnt._text - totalData[1]?.examCnt._text,
      color: colors.orange,
    },
    {
      title: "격리해제",
      value: totalData[0]?.clearCnt._text,
      increase: totalData[0]?.clearCnt._text - totalData[1]?.clearCnt._text,
      color: colors.blue,
    },
    {
      title: "사망자",
      value: totalData[0]?.deathCnt._text,
      increase: totalData[0]?.deathCnt._text - totalData[1]?.deathCnt._text,
      color: colors.purple,
    },
  ];

  return (
    <>
      <Typography.Text mark>[국내 코로나 바이러스 현상황]</Typography.Text>
      <Col style={{ border: "1px solid #e9e9e9" }}>
        <Row justify="space-around" style={{ margin: "10px 0", width: "100%" }}>
          {List.map((item) => (
            <Stat
              key={item.title}
              title={item.title}
              value={item.value}
              increase={item.increase}
              color={item.color}
            />
          ))}
        </Row>
      </Col>
      <br />
      <Typography.Text mark>
        [당일 / 시 도별 코로나 바이러스 확진환자 수]
      </Typography.Text>
      <Col style={{ border: "1px solid #e9e9e9" }}>
        <Row style={{ margin: "10px 0", width: "100%" }}>
          {sidoList.map((item) => (
            <Stat
              key={item.title}
              title={item.title}
              value={item.value}
              increase={item.increase}
              color={item.color}
            />
          ))}
        </Row>
      </Col>
      <div>
        <Chart totalData={totalData} />
      </div>
    </>
  );
};

export default Main;
