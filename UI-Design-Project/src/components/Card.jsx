import React from "react";
import CardContext from "./CardContext";

const Card = ({ user, id }) => {
  return (
    <div className="h-full w-80 overflow-hidden shrink-0 relative flex flex-col justify-between rounded-3xl">
      <img src={user.img} alt="" className="h-full w-full object-cover" />

      <CardContext user={user} id={id} />
    </div>
  );
};

export default Card;
