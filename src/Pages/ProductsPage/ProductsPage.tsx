import React, { useState } from "react";
import { Card } from "../../Components/Card";
import "./ProductsPage.css";
import { useAppSelector } from "../../Hooks/ReduxHooks";
export function ProductsPage(): any {
  const photos = useAppSelector((state) => state.photos.list);
//   fetch("http://localhost:3000/Photos", {
//     // mode: "no-cors",
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));

  return (
    <>
      {photos.map((photo) => (
        <div className="products">
          console.log(photo)
          <Card
            title={photo.title}
            src={photo.src}
            add={photo.add}
            like={photo.like}
            type={photo.type}
          />
        </div>
      ))}
    </>
  );
}
