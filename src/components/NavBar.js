import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import mainLogo from "../img/mainLogo.png";

import "./style/NavBar.css";
require("@solana/wallet-adapter-react-ui/styles.css");

const NavBar = () => {
  // apparently putting this here automatically fix the reload issue?
  const location = useLocation();

  //Set NavBar to be visble/invisible based on scroll location.
  const [NavBarVisible, setNavBarVisible] = useState(true)

  const controlNavBar = () => {
    if(window.scrollY > 100) {
      setNavBarVisible(true)
    } else {
      setNavBarVisible(false)
    }
  }

  useEffect(
    () => {
      window.addEventListener('scroll', controlNavBar)
      return () => {
        window.removeEventListener('scroll', controlNavBar)
      }
    },
    [],
  );

  return (
    <>
      <div className={`NavBarContainer ${NavBarVisible ? "NavBarContainerScroll" : ""}`}>
        <div style={{display : "flex"}}>
        <RouterLink
          to={""}
          className={`NavBarHomeLink ${
            window.location.pathname === "/" ? "NavBarLinkCurrent" : ""
          }`}
        >
          <img src={mainLogo} alt="logo" className="NavBarHomeIMG" />
          Home
        </RouterLink>
<RouterLink
          to={"Items"}
          className={`NavBarLink ${
            window.location.pathname === "/Items"
              ? "NavBarLinkCurrent"
              : ""
          }`}
        >
          Items 
        </RouterLink>
        <RouterLink
          to={"CreateItems"}
          className={`NavBarLink ${
            window.location.pathname === "/CreateItems"
              ? "NavBarLinkCurrent"
              : ""
          }`}
        >
          Create
        </RouterLink>
        </div>

        <WalletMultiButton style={{backgroundColor: "black"}} />

      </div>
    </>
  );
};

export default NavBar;
