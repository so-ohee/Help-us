import { FC } from "react";
import axios from "axios";

// proxy
// url1: 회원가입, 로그인 'http://k6c106.p.ssafy.io:9082'
// url2: 기부 'http://k6c106.p.ssafy.io:9080'
// url3: 봉사 'http://k6c106.p.ssafy.io:9081'







// 이메일 중복 체크
export const emailCheck = async (email) => {
  return await axios({
    method:'POST',
    url:'/url1/member/email-check',
    // url:'/url1',
    data: {
      "email" : email
    },
  })
}















// ocr
export const OCR = async (url) => {

  let data = 
  {
    "version": "V2",
    "requestId": "string",
    "timestamp": 0,
    "lang":"ko",
    "images": [
      {
        "format": "png",
        "name": "test 1",
        "url": url,
      }
    ]
  }

  return await axios({
    // url:'https://bec8udp05h.apigw.ntruss.com/custom/v1/15684/b2ab54fd83e5770a4f755bd8d556a8b0815ad072db3cd9bae4a86827b995edee/general', 
    url:'/ocr', 

    method:'POST',
    headers:{
      'Accept':'application/json',
      'X-OCR-SECRET':'ZXB2ZWZJZ3NNTnpTUVhpZlVGa3RuY0JTd0hrWGpnUW8='
   },
    data: data,
  })
}