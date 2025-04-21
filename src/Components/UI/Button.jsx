import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ children, onClick, to, className = "", type = "button" }) => {
  const combinedClass = `btn ${styles.btnBorderReveal} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
};

export default Button;
