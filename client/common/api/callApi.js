import axios from "axios";
const API_HOST = "http://15.164.213.11/";

// 본 api는 공공데이터 포털이 제공하는 방식에 맞춰져있음.

/**
 *
 * @param {object} param
 * @param {'get' | 'post' =} param.method
 * @param {string} param.url
 * @param {object=} param.params
 * @param {object=} param.data
 */

export function callApi({ method = "get", url, data, params }) {
  return axios({
    method,
    url,
    data,
    params,
    baseURL: API_HOST,
    withCredentials: true,
  }).then((response) => {
    console.log(response);
    const { resultCode, resultMsg } = response.data.response.header;
    if (resultCode._text !== "00") {
      console.error(resultMsg);
    }
    return {
      Success: resultCode._text === "00",
      resultCode,
      resultMsg,
      data: response.data.response,
    };
  });
}
