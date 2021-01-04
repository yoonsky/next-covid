const convert = require("xml-js");
const request = require("request");

const roomData = (page, spclKey, count, callback) => {
  const SERVICE_KEY = `${process.env.SERVICE_KEY}`;
  var url =
    "http://apis.data.go.kr/B551182/pubReliefHospService/getpubReliefHospList";
  var queryParams =
    "?" + encodeURIComponent("ServiceKey") + `=${SERVICE_KEY}`; /* Service Key*/
  queryParams +=
    "&" +
    encodeURIComponent("pageNo") +
    "=" +
    encodeURIComponent(`${page}`); /* */
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent(`${count}`); /* */
  queryParams +=
    "&" +
    encodeURIComponent("spclAdmTyCd") +
    "=" +
    encodeURIComponent(spclKey); /* */
  var requestUrl = url + queryParams;

  console.log(requestUrl);

  request.get(requestUrl, (err, res, body) => {
    if (err) {
      console.log(`err=>${err}`);
      // callback({
      //   error: err,
      // });
    } else {
      if (res.statusCode == 200) {
        let result = body;
        // console.log(`body data => ${result}`);
        let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });
        console.log(`xml to json => Room running! `);

        callback({
          room: xmlToJson,
        });
      }
    }
  });
};

module.exports = roomData;
