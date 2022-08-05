import React from "react";
import { useState } from "react";
import Items from "./Items";
import ItemList from "../mock/Data";
import { Grid } from "@nextui-org/react";
import { useEffect } from "react";

const ItemContainer = () => {
  const [items, setItems] = useState([]);
  const getData = async () => {
    const request = await fetch(
      "https://61ebae077ec58900177cdd0b.mockapi.io/nft"
    );
    const response = await request.json();
    const data = response;
    setItems(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid.Container gap={2} justify="center">
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
