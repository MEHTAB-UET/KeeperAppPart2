import React from "react";
import "../Footer/Footer.css";
import { LiaCopyrightSolid } from "react-icons/lia";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        {" "}
        <p>
          copyrights <LiaCopyrightSolid /> {currentYear}
        </p>
      </div>
    </>
  );
};

export default Footer;
