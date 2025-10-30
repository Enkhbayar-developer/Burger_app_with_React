import React from "react";
import Menu from "../Menu";
import css from "./style.module.css";
import Logo from "../Logo";
import HamburgerMenu from "../HamburgerMenu";

const Toolbar = (props) => (
  <header className={css.Toolbar}>
    <HamburgerMenu toggleSidebar={props.toggleSidebar} />
    <Logo />
    <nav className={css.HideOnMobile}>
      <Menu />
    </nav>
  </header>
);

export default Toolbar;
