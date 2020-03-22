// outsource dependencies
import React from "react";
import PropTypes from "prop-types";

// local dependencies
import img from "./loader.svg";
import s from "./style.module.scss";

export default function Loader({ children, expectAnswer }) {
  if (expectAnswer) {
    return <img className={s.loader} src={img} alt="loader" />;
  }

  return children ? children : "";
}
Loader.propTypes = {
  children: PropTypes.node,
  expectAnswer: PropTypes.bool.isRequired
};
Loader.default = {
  children: ""
};
