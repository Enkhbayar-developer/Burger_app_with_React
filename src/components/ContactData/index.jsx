import React from "react";
import css from "./style.module.css";
import Button from "../General/Button";

class ContactData extends React.Component {
  state = {
    price: 0,
    address: {
      name: null,
      city: null,
      district: null,
      street: null,
    },
  };

  render() {
    return (
      <div className={css.ContactData}>
        <input type="text" name="" placeholder="Таны нэр" />
        <input type="text" name="" placeholder="Таны хот" />
        <input type="text" name="" placeholder="Таны дүүрэг" />
        <input type="text" name="" placeholder="Таны хаяг" />
        <Button text="Илгээх" btnType="Success" />
      </div>
    );
  }
}

export default ContactData;
