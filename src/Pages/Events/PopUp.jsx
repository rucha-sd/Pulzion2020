import React from "react";

const PopUp = (props) => {
  return (
    <div
      className="popup-container"
      style={
        props.open
          ? { opacity: 1, pointerEvents: "all" }
          : { opacity: 0, pointerEvents: "none" }
      }
    >
      <div className="popup">
        <h1>{props.moreInfo}</h1>
        <button
          className="link"
          onClick={() => props.toggle && props.toggle(false)}
        >
          Close
        </button>
        {/* <Link href="#"> */}
        <a
          className="link link-active"
          style={{ marginLeft: "1rem", marginTop: "1rem" }}
        >
          Register
        </a>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default PopUp;
