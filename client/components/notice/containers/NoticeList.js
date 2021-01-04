import { Divider, List, Typography } from "antd";
import React from "react";

const data = [
  "수도권, 비수도권 거리두기 단계별 조치 연장..",
  "시도별 확진환자 현황 2021-01-03 기준..",
  "코로나 바이러스감염증-19 중앙재난 안전대책 본부..",
  "생활 속 건강수칙..",
];

const NoticeList = () => {
  return (
    <>
      <Divider orientation="left" style={{ fontWeight: "bold" }}>
        COVID-19
      </Divider>
      <List
        header={
          <Typography.Text mark>
            [코로나 바이러스 공지사항 및 소식]
          </Typography.Text>
        }
        bordered
        pagination={{ pageSize: 10 }}
        dataSource={data}
        renderItem={(item) => (
          // 클릭시 해당 게시물만 보여줌
          <List.Item onClick={() => {}}>
            <Typography.Text mark>[공지]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </>
  );
};

export default NoticeList;
