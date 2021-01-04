import { Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

export const Columns = [
  {
    title: "시도명",
    dataIndex: "sidoNm",
    key: "sidoNm",
  },
  {
    title: "시군구명",
    dataIndex: "sgguNm",
    key: "sgguNm",
  },

  {
    title: "기관명",
    dataIndex: "yadmNm",
    key: "yadmNm",
  },
  {
    title: "전화번호",
    dataIndex: "telno",
    key: "telno",
  },
  {
    title: (
      <Tooltip
        title={
          <>
            <span>
              A 일반 호흡기 환자 진료를 위한 호흡기 전용 외래 설치 운영
            </span>
            <br />
            <span>
              B 호흡기 환자 전용 외래입원 진료가 가능한 선별진료소 운영 병원
            </span>
          </>
        }
      >
        <span>
          유형
          <QuestionCircleOutlined style={{ marginLeft: "2px" }} />
        </span>
      </Tooltip>
    ),
    key: "hospTyTpCd",
    dataIndex: "hospTyTpCd",
  },
];
