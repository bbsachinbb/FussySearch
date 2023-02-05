import React, { Fragment, useState } from "react";

export const SearchCard = ({ item }) => {
  const { id, name, address } = item;
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div
      style={{
        alignItems: "center",
        height: 50,
        border: "1px solid black",
        flexDirection: "column",
        backgroundColor: isHovering ? "yellow" : "",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <Fragment>{id}</Fragment>
      <Fragment>{name}</Fragment>
      <Fragment>{address}</Fragment>
    </div>
  );
};
