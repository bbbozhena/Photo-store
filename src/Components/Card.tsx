import React, { FC } from "react";

interface CardProps {
  title: string;
}

export const Card: FC<CardProps> = ({ title }) => {
  return (
    <div className="card">
      <img src="/img/bubble.png" width={300} height={300}></img>
      <p>{title}</p>
      <div className="card-buttons">
        <button>Add</button>
        <button>Like</button>
      </div>
    </div>
  );
};
