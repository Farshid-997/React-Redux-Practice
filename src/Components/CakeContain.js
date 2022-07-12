import React from "react";
import { useSelector } from "react-redux/es/exports";
export default function CakeContain() {
  const selector = useSelector((state) => state.numOfCakes);
  return (
    <div>
      <h3>Number of Cakes - {selector}</h3>
    </div>
  );
}
