const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const covid19Data = require("./covid-data");
const roomData = require("./room");
const sidoData = require("./sidoData");

//CORS 설정
app.use(
  cors({
    // origin: ["http://localhost:80", "coseob.shop", "http://13.124.132.74/"],
    origin: true,
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//covid 바이러스 공공데이터
app.post("/api/covid", (req, res) => {
  const { today, eigthDayAgo } = req.body;
  console.log("running...");
  covid19Data(today, eigthDayAgo, ({ covid } = {}) => {
    return res.send(covid);
  });
});

//전국 지역별 확진환자 변화량
app.post("/api/sido", (req, res) => {
  const { today, yesterday } = req.body;
  console.log("running...");
  sidoData(today, yesterday, ({ sido } = {}) => {
    return res.send(sido);
  });
});

//병원정보 api 요청
app.post("/api/room", (req, res) => {
  const { page, spclKey, count } = req.body;
  console.log("running...");
  roomData(page, spclKey, count, ({ room } = {}) => {
    return res.send(room);
  });
});

//서버 연결 확인용
app.get("/", (req, res) => {
  res.send("hello world!");
});

const port = 80;
app.listen(port, () => {
  console.log(`server running on port${port}!`);
});
