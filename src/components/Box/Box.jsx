import Cheap from "../../assets/chip.png";
import * as RiIcon from "react-icons/ri";
import "./Box.scss";

const Box = ({...formik}) => {
  return (
    <div className="box">
      <div className="box-top">
        <div className="box-top__logo">
          <RiIcon.RiXingFill size={40} />
        </div>
        <img src={Cheap} alt="" />
      </div>
      <div className="box-middle">{...formik.values.number}</div>
      <div className="box-bottom">
        <div className="box-bottom__right">
          {...formik.values.month} {...formik.values.year}
        </div>
        <div className="box-bottom__center">{...formik.values.name}</div>
        <div className="box-bottom__left">{...formik.values.code}</div>
      </div>
    </div>
  );
};

export default Box;
