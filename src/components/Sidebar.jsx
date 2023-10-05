import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const styl = {
  overflowY: "auto",
  height: { sx: "auto", md: "95%" },
  flexDirection: { md: "column" },
};

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack direction="row" sx={styl}>
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
