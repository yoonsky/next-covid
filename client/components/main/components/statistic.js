import { CaretUpOutlined } from "@ant-design/icons";
import { Col, Statistic } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";

const Stat = ({ title, value, increase, color }) => {
  return (
    <Col
      // span={6}
      style={{
        textAlign: "center",
        padding: "8px",
        marginTop: "14px",
      }}
    >
      <Title level={5} style={{ margin: "0", color: color }}>
        {title}
      </Title>

      <Statistic value={value} valueStyle={{ color: color }} />
      <Statistic
        value={increase}
        valueStyle={{ fontSize: "16px", color: color }}
        suffix={increase !== "-" && <CaretUpOutlined />}
      />
    </Col>
  );
};

export default Stat;
