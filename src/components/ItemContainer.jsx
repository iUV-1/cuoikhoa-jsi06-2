import React, {
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import { Grid, Loading } from "@nextui-org/react";

import Items from "./Items";
import LoadingStatus from "./LoadingStatus";

import "./style/ItemContainer.css";

const ItemContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const request = await fetch(
      "https://62dcaf7f4438813a26182349.mockapi.io/api/v1/collection/nft"
    );

    if (request.ok) {
      const response = await request.json();
      const data = response;
      setItems(data);
      console.log("responsed");
      setLoading(false);
      return;
    } else if (request.status) {
      console.log("sometihng went wrong");
      alert("error:", request.status);
      console.log(request);
      setLoading(false);
      return;
    }
  };

  useLayoutEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p
        style={{
          fontSize: "40px",
          fontWeight: "600",
          color: "#06C4EF",
        }}
      >
        Items
      </p>
      <p
        style={{
          color: "#C9EEF8",
          marginTop: "-30px",
        }}
      >
        View and Buy all available items.
      </p>
      <hr
        style={{
          border: "1px solid #5C5F70",
          backgroundColor: "#5C5F70",
        }}
      />
      <LoadingStatus active={loading} text="Fetching data..."></LoadingStatus>
      <Grid.Container className="item-container" gap={2} justify="center">
        {items.map((a, index) => {
          return (
            <Grid xs={3} key={a.id}>
              <Items data={a} items={items} id={index} setItems={setItems} />
            </Grid>
          );
        })}
      </Grid.Container>
    </div>
  );
};
export default ItemContainer;
