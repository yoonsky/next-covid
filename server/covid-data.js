const convert = require("xml-js");
const request = require("request");

const covid19Data = (today, eigthDayAgo, callback) => {
  const SERVICE_KEY = `${process.env.SERVICE_KEY}`;
  var url =
    "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson";
  var queryParams =
    "?" + encodeURIComponent("ServiceKey") + `=${SERVICE_KEY}`; /* Service Key*/
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* */
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("10"); /* */
  queryParams +=
    "&" +
    encodeURIComponent("startCreateDt") +
    "=" +
    encodeURIComponent(eigthDayAgo); /* */
  queryParams +=
    "&" +
    encodeURIComponent("endCreateDt") +
    "=" +
    encodeURIComponent(today); /* */
  var requestUrl = url + queryParams;

  console.log(requestUrl);

  request.get(requestUrl, (err, res, body) => {
    if (err) {
      console.log(`err=>${err}`);
    } else {
      if (res.statusCode == 200) {
        let result = body;
        // console.log(`body data => ${result}`);
        let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });
        console.log(`xml to json => covid-data running!`);

        callback({
          covid: xmlToJson,
        });
      }
    }
  });
};

module.exports = covid19Data;
