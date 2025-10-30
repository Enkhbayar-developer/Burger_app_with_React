import React from "react";
import css from "./style.module.css";
import LogoImg from "../../assets/images/burger-logo.png";

const Logo = (props) => (
  <div className={css.Logo}>
    <img src={LogoImg} alt="" />
  </div>
);

export default Logo;
