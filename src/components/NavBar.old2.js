import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Link as NextUILink,
  Spacer,
  Container,
  Row,
} from "@nextui-org/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import mainLogo from "../img/mainLogo.png";
import { Authorized } from "@solana/web3.js";

require("@solana/wallet-adapter-react-ui/styles.css");

const LinkCSS = {
  padding: "5px",
  "background-color": "gray",
  fontSize: "24px",
};

const NavBar = () => {
  return (
    <>
      <Container
        alignContent="center"
        alignItems="center"
        css={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderRadius: "1rem",
          margin: "auto",
          position: "fixed",

        }}
      >
        <Row css = {{float: "right", alignItems:"stretch" }}>

          <RouterLink
            to={""}
            style={{
              display: "block",
              margin: "0px",
              padding: "0px",
              backgroundColor: "gray",
              objectFit: "cover",
              flexShrink: 1,
            }}
          >
            <img
              src={mainLogo}
              alt="logo"
              style={{
                backgroundColor: "black",
                objectFit: "cover",
                maxWidth: "100px",
                maxHeight: "200px",
                width: "1rem",
                height: "1rem",
                margin: "5px 10px",
              }}
            />
          </RouterLink>
          
          <Spacer x={1} y={0} />
          
          <RouterLink to={"test"}>
            <NextUILink color={"cyan800"} underline css={LinkCSS }>
              test
            </NextUILink>
          </RouterLink>
          
            <WalletMultiButton />
        
        </Row>
      </Container>
    </>
  );
};

export default NavBar;
