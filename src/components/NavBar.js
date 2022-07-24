import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import mainLogo from "../img/mainLogo.png";
import { Authorized } from "@solana/web3.js";

import "./style/NavBar.css";
require("@solana/wallet-adapter-react-ui/styles.css");

const NavBar = () => {
  console.log(window.location.pathname)
  return (
    <>
      <div className="NavBarContainer">
        <RouterLink to={""} className={`NavBarHomeLink ${window.location.pathname === "/" ? "NavBarLinkCurrent" : ""} ` }>
          <img src={mainLogo} alt="logo" className="NavBarHomeIMG" />
          Home
        </RouterLink>

        <RouterLink to={"test"} className={`NavBarLink ${window.location.pathname === "/test" ? "NavBarLinkCurrent" : ""}`}>
          test
        </RouterLink>
        <WalletMultiButton />
      </div>
    </>
  );
};

export default NavBar;
