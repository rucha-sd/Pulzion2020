// import Link from "next/link";
import React from "react";
import PopUp from "./PopUp";

const Card = (props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <>
      <PopUp
        open={isModalOpen}
        toggle={setIsModalOpen}
        moreInfo={props.moreInfo}
      />
      <div className="col-md-4">
      <div className="card e-card">
        <img
          src={props.img || "https://via.placeholder.com/400"}
          alt="event img"
          // className="img-fluid"
        />
        <div className="e-card-text text-center">
          {/* <p>
            {props.content ||
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nulla autem ratione commodi exercitationem esse dignissimos nihil eos.Cumque consequuntur doloremque velit totam"}
          </p> */}
          <div className="e-card-buttons"
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "1rem",
            }}
          >

            <button
              className="link"
              onClick={() => setIsModalOpen(true)}
            >
              {props.content}
            </button>
            <a href="#">
            {/* <button
              className="link"
              onClick={() => setIsModalOpen(true)}
            >
              Register
            </button> */}
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Card;
