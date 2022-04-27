import { FC, useState } from "react";
import Postcode from '@actbase/react-daum-postcode';

const User: FC = () => {
  const [isModal, setModal] = useState(false);
  return (
    <>
      {/* <modal isVisible={isModal}>
        <Postcode
          style={{ width: 320, height: 320 }}
          jsOptions={{ animation: true, hideMapBtn: true }}
          onSelected={data => {
            alert(JSON.stringify(data));
            setModal(false);
          }}
        />
      </modal>
      <button onClick={() => setModal(true)}>주소찾기</button> */}
        <Postcode
          style={{ width: 320, height: 320 }}
          jsOptions={{ animation: true, hideMapBtn: true }}
          onSelected={data => {
            alert(JSON.stringify(data));
            setModal(false);
          }}
        />
    </>
  );
};

export default User;
