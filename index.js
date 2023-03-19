const express = require('express');
const axios = require('axios');
const app = express();

//node.js 환경설정의 port번호가 설정되어있다면 그것을 쓰고 그게 아니면 80번 사용(heroku를 위한 코드라고 함 --> 프리티어 중단...)
const port = process.env.PORT || 80;

//public_html 폴더 아래에 있는 모든 파일에 대해서 express모듈의 웹서버가 구동
app.use(express.static("public_html"));
app.listen(port, function () {
  console.log("HTML Server Start")
});

//Open API에서 받아오는 데이터를 RestAPI 형식으로 return
app.get("/pharmach_list", (req, res) => {
  let api = async () => {
    let response = null;
    try {
      response = await axios.get("http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire", {
        params: {
          //변수로 사용할 때는 Decoding 인증키를 넣어준다.
          "serviceKey": "gXTz4PHi6iZ4ccX37XgJEgdMiCVYbsl9Pj6WrGQ1hy3KGjtvLeXVD44+0I9EO5+TC8Rn8gX9UMZVv+38XzWEmw==",
          "Q0": req.query.Q0,
          "Q1": req.query.Q1,
          "QT": req.query.QT,
          "QN": req.query.QN,
          "ORD": req.query.ORD,
          "pageNo": req.query.pageNo,
          "numOfRows": req.query.numOfRows
        }
      })
    } catch (e) {
      console.log(e)
    }
    return response;
  }
  api().then((response) => {
    //cors를 위해 header에 추가
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(response.data.response.body);
  });
});