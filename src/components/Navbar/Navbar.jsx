import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navs">
      <div className="navs-container container">
        <h3>یلوبانک</h3>
        <div className="navs-container__links">
          <Link to={"/"}> خانه </Link>
          <Link to={"/add"}> ثبت کارت </Link>
          <a target={"_blank"} href="https://github.com/sohseyedi-web/credit-card">درباره ما</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
