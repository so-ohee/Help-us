import { FC, useState } from "react";
import PopupDom from '../../components/popupdom';
import PopupPostCode from '../../components/popuppostcode';
import DaumPostcode from "react-daum-postcode";

const Org: FC = () => {

	// 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false)
 
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }
 
    return(
        <div>
            <button type='button' onClick={openPostCode}>우편번호 검색</button>
            <div id='popupDom'>
                {isPopupOpen && (
                    <PopupDom>
                        <PopupPostCode onClose={closePostCode} />
                    </PopupDom>
                )}
            </div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          {/* <DaumPostcode></DaumPostcode> */}
          {/* window.onload = function(){
            // document.getElementById("address_kakao").addEventListener("click", function(){ //주소입력칸을 클릭하면
                //카카오 지도 발생
                new daum.Postcode({
                    oncomplete: function(data) { //선택시 입력값 세팅
                        document.getElementById("address_kakao").value = data.address; // 주소 넣기
                        document.querySelector("input[name=address_detail]").focus(); //상세입력 포커싱
                    }
                }).open()
            })
          } */}
        </div>
    )
};

export default Org;
