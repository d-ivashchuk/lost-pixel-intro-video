import React from "react";
import Avatar from "boring-avatars";

const Card = ({ page, ...rest }) => {
  return (
    <div
      style={{
        borderRadius: "8px",
        margin: "20px 100px",
        ...rest,
      }}
    >
      <div
        style={{
          border: "1px solid gray",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 40px",
          borderRadius: "8px",
        }}
      >
        <Avatar
          size={100}
          name={page}
          variant="ring"
          square
          colors={["#1A0C12", "#F70A71", "#FFDAA6", "#FFB145", "#74AB90"]}
        />
        <h1 style={{ textAlign: "center", color: "tomato", fontWeight: "300" }}>
          Card{" "}
          <span style={{ fontWeight: "800" }}>{page.replace("/", "")}</span>
        </h1>
      </div>
    </div>
  );
};

export default Card;
