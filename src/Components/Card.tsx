import React, { FC } from "react";

interface CardProps {
  title: string;
  src: string;
  add: boolean;
  like: boolean;
  type: string;
}

export const Card: FC<CardProps> = ({ title, src, add, like, type }) => {
  return (
    <div className="card-item">
      <img src={src} width={350} height={370}></img>
      <p>{title}</p>
      <div className="card-buttons">
        <button>Add</button>
        <button>Like</button>
      </div>
    </div>
  );
};
