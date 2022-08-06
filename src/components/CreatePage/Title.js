import React from "react";
import "./Title.css";

const Title = () => {
  const title = {
    fontSize: "40px",
    fontWeight: "600",
    letterSpacing: "0px",
    color: "#06C4EF",
    marginBottom: "16px",
  };
  return (
    <div className="TitleContainer">
      <h1 style={title}>Create New Item</h1>
      <p
        style={{
          color: "#C9EEF8",
          marginTop: "-10px",
        }}
      >
        {" "}
        Create a listing
      </p>
      <hr
        style={{
          border: "1px solid #5C5F70",
          backgroundColor: "#5C5F70",
          width: "100%",
        }}
      />
      <p
        style={{
          fontSize: "12px",
          fontWeight: "500",
          color: "rgb(112, 122, 131)",
          marginBottom: "12px",
        }}
      >
        <span style={{ color: "red" }}>*</span> Required fields
      </p>
    </div>
  );
};

export default Title;
