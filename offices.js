import React from "react";

const offices = props => {
  return (
    <div className="docp-offices">
      
        {props.office.map(el => (
          <div className="office">
            <a href={"#"}>
              <img src={el.image} />
              <div className="office-link">
                <p>{el.local}</p>
                <button>{el.btn}</button>
              </div>
            </a>
          </div>
        ))}
     
    </div>
  );
};

export default offices;
