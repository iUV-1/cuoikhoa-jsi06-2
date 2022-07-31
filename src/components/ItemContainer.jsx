import React from "react";
import { useState } from "react";
import Item from "./Items";
import ItemList from "../mock/Data";
import { Grid } from "@nextui-org/react";
import { useEffect } from "react";

const ItemContainer = () => {
  const [item, setItem] = useState([]);
  const getData = async () => {
    const request = await fetch(
      "https://62dcaf7f4438813a26182349.mockapi.io/api/v1/collection/nft"
    );
    const response = await request.json();
    const data = response;
    setItem(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid.Container gap={2} justify="center">
      {item.map((a, index) => {
        return (
          <Grid xs={3}>
            <Item data={a} id={index} setItem={setItem} />
          </Grid>
        );
      })}
    </Grid.Container>
  );
};
export default ItemContainer;
