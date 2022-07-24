import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as NextUILink, Spacer, Container, Row } from "@nextui-org/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import mainLogo from "../img/mainLogo.png";
import { Authorized } from "@solana/web3.js";

import "./style/NavBar.css";
require("@solana/wallet-adapter-react-ui/styles.css");

const NavBar = () => {
  return (
    <>
      <div className="NavBarContainer">
        <RouterLink to={""} className="NavBarHomeLink">
          <img src={mainLogo} alt="logo" className="NavBarHomeIMG" />
          Home
        </RouterLink>

        <RouterLink to={"test"} className="NavBarLink">
          test
        </RouterLink>
        <WalletMultiButton />
      </div>
    </>
  );
};

export default NavBar;
