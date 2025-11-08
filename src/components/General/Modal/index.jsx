import React from "react";
import Shadow from "../Shadow";
import css from "./style.module.css";

const Modal = (props) => (
  <>
    <Shadow show={props.show} clicked={props.hideOrderSummary} />
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
      className={css.Modal}
    >
      {props.children}
    </div>
  </>
);

export default Modal;
