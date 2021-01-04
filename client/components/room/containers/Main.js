import { Row, Select, Table, Typography } from "antd";
import Search from "antd/lib/input/Search";
const { Option } = Select;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../state/index";
import { Columns } from "../components/Columns";

const Main = () => {
  const { roomData, dataLength, loading } = useSelector((state) => state.room);
  const [selectValue, setSelectValue] = useState("A0");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSearch, setSelectedSearch] = useState("");
  const dispatch = useDispatch();

  let data = [];
  let i = 1;

  console.log(selectValue, "roomData", roomData);

  roomData.forEach((item) => {
    //가져온데이터 배열에 정렬

    if (selectedSearch !== "") {
      //검색값이 있을때

      const itemTostring = item.sidoNm._text
        .concat(
          item.sgguNm._text,
          item.yadmNm._text,
          item.telno._text.replace(/\-/g, "")
          //전화번호 하이픈 제거
        )
        .replace(/(\s*)/g, ""); //모든 문자열 합치고 공백제거!

      let doYouHave = itemTostring.includes(selectedSearch); //내가 입력한 단어가 포함되어있는지 검사하기

      doYouHave && //만약 단어가 포함되어있으면 그 값만 데이터에 저장
        data.push({
          key: i++,
          sidoNm: item.sidoNm._text,
          sgguNm: item.sgguNm._text,
          yadmNm: item.yadmNm._text,
          telno: item.telno._text,
          hospTyTpCd: item.hospTyTpCd ? item.hospTyTpCd._text : "-",
        });
    } else {
      data.push({
        //단어 검색으로 찾는게 아니라면 모든값을 저장!
        key: i++,
        sidoNm: item.sidoNm._text,
        sgguNm: item.sgguNm._text,
        yadmNm: item.yadmNm._text,
        telno: item.telno._text,
        hospTyTpCd: item.hospTyTpCd ? item.hospTyTpCd._text : "-",
      });
    }
  });

  const nextPage = (e) => {
    setCurrentPage(e);
    if (selectedSearch === "") {
      //사용자가 특정검색을 수행하고 있지 않을경우 페이지네이션
      dispatch(actions.fetchRoomData({ page: e, spclKey: selectValue }));
    }
  };

  const selectOption = (value) => {
    setCurrentPage(1);
    //옵션을 선택했을때
    setSelectValue(value);
    setSelectedSearch("");
    //페이지 초기화
    dispatch(
      actions.fetchRoomData({
        page: 1,
        spclKey: value,
      })
    );
  };

  // 검색버튼을 눌렀을 때
  const handleSearch = (value) => {
    setCurrentPage(1);
    setSelectedSearch(value);
    dispatch(
      actions.fetchRoomData({
        page: 1,
        spclKey: selectValue,
        count: dataLength,
      })
    );
    value = "";
  };

  useEffect(() => {
    console.log("초기데이터 : ", dataLength);
    console.log("정렬된 데이터 : ", data.length);
    //첫 마운트
    setSelectValue("A0");
    dispatch(
      actions.fetchRoomData({
        page: 1,
        spclKey: selectValue,
      })
    );
  }, []);

  return (
    <>
      <Row justify="center">
        <Typography.Text mark style={{ fontSize: "20px" }}>
          왼쪽 항목 선택 후, 시도명, 시군구명, 기관명, 전화번호로 검색이
          가능합니다
        </Typography.Text>
      </Row>
      <Row>
        <Select
          defaultValue="A0"
          style={{ width: 240 }}
          onChange={selectOption}
        >
          <Option value="A0">국민안심병원</Option>
          <Option value="97">코로나 검사 실시기관</Option>
          <Option value="99">코로나 선별진료소 운영기관</Option>
        </Select>
        <Search
          placeholder="검색어를 입력하세요."
          allowClear
          enterButton="Search"
          size="middle"
          style={{ flex: 1 }}
          onSearch={handleSearch}
        />
      </Row>
      <Table
        bordered
        showSizeChanger={false}
        loading={loading}
        columns={Columns}
        dataSource={data}
        pagination={{
          position: ["bottomCenter"],
          onChange: nextPage,
          total: selectedSearch !== "" ? data.length : dataLength,
          current: currentPage,
        }}
      />
    </>
  );
};

export default Main;
