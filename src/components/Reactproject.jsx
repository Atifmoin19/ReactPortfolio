import React from "react";
import Card from "./Card";
import Sdatareact from "./Sdatareact";

function Ncard(val) {
  return (
    <Card
      key={val.id}
      src={val.src}
      title={val.title}
      details={val.details}
      link={val.link}
    />
  );
}

const Reactproject = () => {
  return <>{Sdatareact.map(Ncard)}</>;
};

export default Reactproject;
