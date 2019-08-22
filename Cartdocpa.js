import React from "react";

const cartdocpa = props => {
  return (
    <div className="patient-doctor">
      {props.info.map(el => (
        <div className={el.class}>
          <p>{el.label}</p> <h2>{el.desc}</h2>{" "}
          {!el.selector ? null : (
            <select className="domain-switcher">
              {el.selector.map(el => (
                <option> {el}</option>
              ))}
            </select>
          )}
        </div>
      ))}
    </div>
  );
};
export default cartdocpa;
