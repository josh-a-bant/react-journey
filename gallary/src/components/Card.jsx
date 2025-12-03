import React from "react";

const Card = ({ userData }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {userData.map((item) => (
          <div key={item.id}>
            <img src={item.download_url} alt="image" className="h-40 rounded" />
            <h1>{item.author}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
