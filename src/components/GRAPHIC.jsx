import React from "react";
import Sdatagp from "./Sdatagp";
import Design from "./DESIGN";

function Ncard(val) {
  return (
    <Design
      key={val.id}
      src={val.src}
      title={val.title}
      details={val.details}
      link={val.link}
    />
  );
}

const GRAPHIC = () => {
  return (
    <div className="pgd">
      <h1>Projects Graphic Design</h1>
      <div className="projectgalery">{Sdatagp.map(Ncard)}</div>
    </div>
  );
};

export default GRAPHIC;
