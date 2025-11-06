import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      <MenuItem exact link="/">
        Шинэ захиалга
      </MenuItem>
      <MenuItem link="/orders">захиалгууд</MenuItem>
      {props.userId ? (
        <MenuItem link="/logout">Гарах</MenuItem>
      ) : (
        <>
          <MenuItem link="/login">Нэвтрэх</MenuItem>
          <MenuItem link="/signup">Бүртгүүлэх</MenuItem>
        </>
      )}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
  };
};

export default connect(mapStateToProps)(Menu);
