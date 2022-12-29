import "./Form.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useCardDispatch } from "./../../context/CardProvider";
import { useNavigate } from "react-router-dom";
import Box from "../Box/Box";
import styled from "styled-components";

const initialValues = {
  number: "",
  name: "",
  year: "",
  month: "",
  code: "",
};

const validationSchema = Yup.object({
  number: Yup.number().required("مقداری وارد نشده است"),
  name: Yup.string().required("مقداری وارد نشده است"),
  year: Yup.number().required("مقداری وارد نشده است"),
  month: Yup.number().required("مقداری وارد نشده است"),
  code: Yup.number().required("مقداری وارد نشده است"),
});

const Form = () => {
  const history = useNavigate();
  const dispatch = useCardDispatch();
  const onSubmit = (values) => {
    dispatch({ type: "ADD_CARD", payload: values });
    history("/");
  };

  const Error = styled.div`
    position: absolute;
    contnet: "";
    right: 0;
    bottom: -32%;
    color: #dc0000;
  `;

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <section className="form container">
      <form className="form-card" onSubmit={formik.handleSubmit}>
        <Box {...formik} />
        <div className="form-card__inputs">
          <div className="form-card__inputs-right">
            <label htmlFor="number">شماره کارت</label>
            <input
              type="text"
              id="number"
              name="number"
              {...formik.getFieldProps("number")}
            />
          </div>
          <div className="form-card__inputs-left">
            <label htmlFor="name">صاحب کارت</label>
            <input
              type="text"
              {...formik.getFieldProps("name")}
              id="name"
              name="name"
            />
          </div>
        </div>

        <div className="form-card__inputs">
          <div className="form-card__inputs-select">
            <label htmlFor="date">تاریخ انقضا</label>
            <div>
              <input
                type="text"
                placeholder="ماه"
                {...formik.getFieldProps("month")}
                id="date"
                name="month"
              />

              <input
                type="text"
                placeholder="سال"
                {...formik.getFieldProps("year")}
              />
            </div>
          </div>
          <div className="form-card__inputs-code">
            <label htmlFor="code">CVV2</label>
            <input
              type="text"
              {...formik.getFieldProps("code")}
              id="code"
              name="code"
            />
          </div>
        </div>
        <button
          className={
            !formik.isValid ? "form-card__btn btn-dis" : "form-card__btn"
          }
          disabled={!formik.isValid}
        >
          ثبت کارت
        </button>
      </form>
    </section>
  );
};

export default Form;
