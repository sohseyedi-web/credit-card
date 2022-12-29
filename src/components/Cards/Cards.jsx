import "./Cards.scss";
import * as RiIcon from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCard , useCardDispatch} from "../../context/CardProvider";
import Box from "./../Box/Box";

const Cards = () => {
  const { cardItems } = useCard();
  const dispatch = useCardDispatch();

  return (
    <section className="cards">
      <div className="cards-container container">
        <h5>لیست کارت ها</h5>
        <div className="cards-container__items">
          {cardItems.length === 0 ? (
            <div className="cards-container__items-empty">
              <h4>هنوز کارتی ثبت نکردی</h4>
              <p>برای ثبت کارت جدید کلیک کنید</p>
              <Link to={"/add"}>
                <button>
                  <RiIcon.RiAddLine size={26} />
                </button>
              </Link>
            </div>
          ) : (
            cardItems.map((formik) => (
              <div className="cards-container__items-layout" key={formik.id}>
                <Box {...formik} />
                <button
                  className="cards-container__items-layout__btn"
                  onClick={() =>
                    dispatch({ type: "REMOVE_CARD", payload: formik })
                  }
                >
                  حذف کارت
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Cards;
