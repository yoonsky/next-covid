import { Col, Menu } from "antd";
import {
  AreaChartOutlined,
  BellOutlined,
  QrcodeOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import React from "react";
import Link from "next/link";
import Text from "antd/lib/typography/Text";
import CarouselCompo from "./Carousel";

const AppLayout = ({ children }) => {
  return (
    <Col
      style={{
        width: "100%",
        maxWidth: "800px",
      }}
    >
      <CarouselCompo />
      {/* <Text mark>코로나19 국내현황(COVID-19)</Text> */}
      <Menu
        onClick={() => {}}
        mode="horizontal"
        style={{
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        <Menu.Item key="situation" icon={<AreaChartOutlined />}>
          <Link href="/">
            <a>국내현황</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="room" icon={<CheckCircleOutlined />}>
          <Link href="/room">
            <a>선별진료소</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="notice" icon={<BellOutlined />}>
          <Link href="/notice">
            <a>공지사항 · 소식</a>
          </Link>
        </Menu.Item>
      </Menu>
      <div>{children}</div>
    </Col>
  );
};

export default AppLayout;
