import { FC } from "react";
import Image from "next/image";
import goodImage from "../public/images/good.jpg";

const Good: FC = () => {
  return (
    <div className="container">
      <Image src={goodImage} alt="good daye" width="300" height="300" />
      <h3>지켜보고 있다.</h3>
    </div>
  );
};

export default Good;
