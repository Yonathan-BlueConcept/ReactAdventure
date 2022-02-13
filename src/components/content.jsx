import React, { useState } from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleChange, handleDelete }) => {
  return (
    <div>
      {items.length ? (
        <ItemList
          items={items}
          handleDelete={handleDelete}
          handleChange={handleChange}
        />
      ) : (
        <p
          style={{
            marginTop: "40px",
            padding: "40px",
            backgroundColor: "wheat",
          }}
        >
          No Items Available
        </p>
      )}
    </div>
  );
};

export default Content;
