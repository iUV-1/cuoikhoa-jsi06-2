import React, { useCallback } from "react";
import { Card, Grid, Text, Button, Row, Col, Popover } from "@nextui-org/react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";

const Item = ({ data: ItemData, setItems, items }) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

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
      `https://61ebae077ec58900177cdd0b.mockapi.io/nft/${ItemData.id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          isSold: publicKey.toBase58(),
        }),
      }
    );
    const res = await req.json();

    const findItem = items.findIndex((item) => item.id === ItemData.id);
    if (findItem !== -1) {
      items[findItem] = {
        ...items[findItem],
        isSold: publicKey.toBase58(),
      };
    }
    setItems([...items]);
    alert("processed successfully");
  }, [connection, publicKey, sendTransaction]);

  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Popover isBordered disableShadow>
            <Popover.Trigger>
              <Button color="secondary" auto flat css={{ opacity: 0.7 }}>
                {ItemData.name}
              </Button>
            </Popover.Trigger>
            <Popover.Content css={{ border: "hidden", background: "black" }}>
              <Text
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  p: "$10",
                }}
                weight="bold"
              >
                {ItemData.des}
              </Text>
            </Popover.Content>
          </Popover>
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
              {ItemData.isSold === publicKey?.toBase58() ? (
                <div>Available soon.</div>
              ) : (
                <div>Available now.</div>
              )}
            </Text>
            <Text color="#000" size={12} transform="uppercase" weight="bold">
              {ItemData.price + " sol"}
            </Text>
          </Col>
          <Col>
            <Row>
              {ItemData.isSold === publicKey?.toBase58() ? (
                <Button flat auto rounded color="secondary">
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Download
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
