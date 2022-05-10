import { FC } from "react";
import axios from "axios";

// proxy
// 9080: 기부 'http://k6c106.p.ssafy.io:9080'
// 9081: 봉사 'http://k6c106.p.ssafy.io:9081'
// 9082: 회원가입, 로그인 'http://k6c106.p.ssafy.io:9082'





// ----------------------- 9080 ------------------------------









// ----------------------- 9081 ------------------------------













// ----------------------- 9082 ------------------------------

// 이메일 중복 체크
export const emailCheck = async (email) => {
  return await axios({
    method:'POST',
    url:'/9082/member/email-check',
    data: {
      "email" : email
    },
  })
}

// 이메일 인증 메일 발송
export const emailAuth = async (email) => {
  return await axios({
    method:'POST',
    url:'/9082/member/email-auth',
    data: {
      "email" : email
    },
  })
}



// ------------------------- 기타 ------------------------------

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

// ocr_file
export const OCR_file = async (img) => {

  const data_ = {version: "V2",requestId: "string",timestamp: 0, lang:"ko",images: [{ format: "png", name: "string"}]}

  const newForm = new FormData();
  newForm.append("message", new Blob([JSON.stringify({"version": "V2","requestId": "string","timestamp": 0,"images": [{ "format": "png", "name": "string"}]})], { type: "application/json" }))
  newForm.append("file",img)

  return await axios({
    // url:'https://bec8udp05h.apigw.ntruss.com/custom/v1/15684/b2ab54fd83e5770a4f755bd8d556a8b0815ad072db3cd9bae4a86827b995edee/general', 
    url:'/ocr', 

    method:'POST',
    headers:{
      'Accept':'multipart/form-data',
      // 'Content-Type':'multipart/form-data',
      'X-OCR-SECRET':'ZXB2ZWZJZ3NNTnpTUVhpZlVGa3RuY0JTd0hrWGpnUW8='
    },
    data: newForm,
  })
}


// ocr_kakao
export const OCR_kakao = async (img) => {


  const newForm = new FormData();
  newForm.append("image",img)

  return await axios({
    url:'https://dapi.kakao.com/v2/vision/text/ocr', 

    method:'POST',
    headers:{
      'Accept':'multipart/form-data',
      // 'Content-Type':'multipart/form-data',
      'Authorization':'KakaoAK 5f6cb439fd56b3078f112ab72cd15263'
    },
    data: newForm,
  })
}