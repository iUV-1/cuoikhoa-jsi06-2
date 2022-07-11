import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Link as NextUILink,
  Spacer,
  Container,
  Row,
  Col,
  Card,
  css,
} from "@nextui-org/react";

// import mainLogo from './mainLogo.png'


const LinkCSS = {
    "padding": "5px",
    "background-color": "gray",
}

const NavBar = () => {
  return (
    <>
      <Container fluid
      //   css={{
      //       "background-color": "black",
      //  }}>
      >
        <Card>
          <Row>
            <RouterLink to={""} style={{display: "block", margin:"0px", padding: "0px", backgroundColor: "gray", objectFit: "cover", flexShrink: 1 }}>
              {/* <img src={mainLogo} alt="logo" style={{ backgroundColor: "gray", objectFit: "cover", width: "7%", height: "7%", margin: "10px 5px"}}/> */}
            </RouterLink>
            <Spacer x={2} y={0} />
            <RouterLink to={"test"}>
              <NextUILink color={"cyan800"} underline css={LinkCSS}>
                test
              </NextUILink>
            </RouterLink>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default NavBar;
