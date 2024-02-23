import React from "react";
import Button from "./Button";

const list = [
  "All",
  "News",
  "Songs",
  "Jr NTR",
  "Cricket",
  "Movies",
  "Live",
  "Badminton",
  "Soccer",
  "Stocks",
];
const ButtonList = () => {
  return (
    <div className="flex ">
      {list.map((k) => (
        <Button key={k} name={k} />
      ))}
    </div>
  );
};

export default ButtonList;
