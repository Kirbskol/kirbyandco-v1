import React from "react";
import { skolCDN_URL, logo_URL } from "../Constants/urls";

export const Logo = ({variant, classes}) => {

  const styles = {
  small: "h-auto w-[7.5em]",
  normal: "h-auto w-[15em]",
  large: "h-auto w-[30em]",
};

  const logoStyle = styles[variant] ?? styles.normal;

  return (
    <>
      <img 
        className={`${classes} ${logoStyle}`} 
        src={`${skolCDN_URL}${logo_URL}`} 
      />
    </>
  )
}