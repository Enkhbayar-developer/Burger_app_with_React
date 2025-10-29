import React from "react";
import css from "./style.module.css";

const Modal = (props) => <div className={css.Modal}>{props.children}</div>;

export default Modal;
