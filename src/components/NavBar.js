import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as NextUILink, Spacer, Container, Row } from "@nextui-org/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import mainLogo from "../img/mainLogo.png";
import { Authorized } from "@solana/web3.js";

import styles from "./style/NavBar.module.css";
require("@solana/wallet-adapter-react-ui/styles.css");

const LinkCSS = {
  padding: "5px",
  // "background-color": "gray",
  fontSize: "24px",
};

const NavBar = () => {
  return (
    <>
      <div
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderRadius: "1rem",
          margin: "auto",
          position: "sticky",
          // top: 0,
          display: "flex",
          justifyContent: "flex-start",
          alignContent: "space-evenly",
          alignItems: "center",
          width: "80%",
          gap: "10px",
        }}
        className={styles.NavBarContainer}
      >
        <RouterLink
          to={""}
          style={{
            display: "flex",
            margin: "0px ",
            padding: "0px 10px 0px 0px",
            // backgroundColor: "gray",
            objectFit: "cover",
            alignItems: "center",
            fontSize: "24px",
          }}
        >
          <img
            src={mainLogo}
            alt="logo"
            style={{
              objectFit: "cover",
              maxWidth: "100px",
              maxHeight: "200px",
              width: "2rem",
              height: "2rem",
              margin: "5px 10px",
            }}
          />
          Home
        </RouterLink>

        <RouterLink to={"test"} style={LinkCSS}>
          test
        </RouterLink>
        <WalletMultiButton />
      </div>
    </>
  );
};

export default NavBar;
