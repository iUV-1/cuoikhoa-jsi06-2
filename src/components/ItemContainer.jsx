import React from "react";
import { useState } from "react";
import Items from "./Items";
import ItemList from "../mock/Data";
import { Grid } from "@nextui-org/react";
import { useEffect } from "react";
import "./style/ItemContainer.css";
const ItemContainer = () => {
  const [items, setItems] = useState([]);
  const getData = async () => {
    const request = await fetch(
      "https://62dcaf7f4438813a26182349.mockapi.io/api/v1/collection/nft"
    );
    const response = await request.json();
    const data = response;
    setItems(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid.Container className="item-container" gap={2} justify="center">
      {items.map((a, index) => {
        return (
          <Grid xs={3} key={a.id}>
            <Items data={a} items={items} id={index} setItems={setItems} />
          </Grid>
        );
      })}
    </Grid.Container>
  );
};
export default ItemContainer;
