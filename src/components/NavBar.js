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

require("@solana/wallet-adapter-react-ui/styles.css");

const LinkCSS = {
  padding: "5px",
  "background-color": "gray",
};

const NavBar = () => {
  return (
    <>
      <Container
        fluid
        alignContent="center"
        alignItems="center"
        justify="flex-start"
        css={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderRadius: "1rem",
          position: "fixed",
        }}
      >
        <Row>
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
                backgroundColor: "gray",
                objectFit: "cover",
                width: "7%",
                height: "7%",
                margin: "5px 10px",
              }}
            />
          </RouterLink>
          
          <Spacer x={2} y={0} />
          
          <RouterLink to={"test"}>
            <NextUILink color={"cyan800"} underline css={LinkCSS}>
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
