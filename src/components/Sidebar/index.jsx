import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import css from "./style.module.css";
import Shadow from "../../components/General/Shadow";

const Sidebar = (props) => {
  let classes = [css.Sidebar, css.Close];

  if (props.showSidebar) {
    classes = [css.Sidebar, css.Open];
  }

  return (
    <>
      <div>
        <Shadow show={props.showSidebar} clicked={props.toggleSidebar} />
      </div>
      <div onClick={props.toggleSidebar} className={classes.join(" ")}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </>
  );
};

export default Sidebar;
