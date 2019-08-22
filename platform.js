import React from "react";

const platform = props => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginTop: "20px" }}>
        {props.plat1.map(el => (
          <div className="describ">
            <img src={el.image} />
            <p className="describ-title">{el.title}</p>
            <p>{el.parag}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "40px" }}>
        {props.plat2.map(el => (
          <div className="describ">
            <img src={el.image} />
            <p className="describ-title">{el.title}</p>
            <p>{el.parag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default platform;
