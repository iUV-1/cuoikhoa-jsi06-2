import React, { useCallback } from "react";
import { Card, Grid, Text, Button, Row, Col } from "@nextui-org/react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";

const Item = (props) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const ItemData = props.data;
  const setItem = props.setItem;

  const onSubmit = useCallback(async () => {
    if (!publicKey) {
      alert("please open a wallet first");
      return;
    }
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: ItemData.seller,
        lamports: ItemData.price * LAMPORTS_PER_SOL,
      })
    );
    const signature = await sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature, "processed");
    const req = await fetch(
      `https://62dcaf7f4438813a26182349.mockapi.io/api/v1/collection/nft/${ItemData.id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application./json",
        },
        body: JSON.stringify({ isSold: true }),
      }
    );
    const res = await req.json();
    console.log("res", res);
    // alert("processed successfully");
    // setItem((prev) => {
    //   const findItem = prev.findIndex((item) => item.id === ItemData.id);
    //   if (findItem !== -1) {
    //     prev[findItem] = {
    //       ...ItemData,
    //       isSold: true,
    //     };
    //   }
    //   return prev;
    // });
  });

  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {ItemData.price + " solona"}
          </Text>
          <Text h3 color="black">
            {ItemData.name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={ItemData.url}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12}>
              {ItemData.isSold === true ? (
                <div>Available soon.</div>
              ) : (
                <div>Available now.</div>
              )}
            </Text>
            <Text color="#000" size={12}>
              {ItemData.des}
            </Text>
          </Col>
          <Col>
            <Row>
              {ItemData.isSold === true ? (
                <Button flat auto rounded color="secondary">
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Sold out
                  </Text>
                </Button>
              ) : (
                <Button onPress={onSubmit} flat auto rounded color="secondary">
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Buy now
                  </Text>
                </Button>
              )}
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
export default Item;
