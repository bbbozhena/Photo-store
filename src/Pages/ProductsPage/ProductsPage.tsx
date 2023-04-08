import React, { useEffect } from "react";
import { Card } from "../../Components/Card";
import "./ProductsPage.css";
import { useAppSelector, useAppDispatch } from "../../Hooks/ReduxHooks";
import { fetchPhotos } from "../../Store/Slices/PhotoSlice";
export function ProductsPage(): any {
  const photos = useAppSelector((state: any) => state.photos.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  console.log(photos);
  return (
    <>
      <div className="products">
        {photos.map((photo: any, id: string) => (
          <Card
            key={id}
            title={photo.title}
            src={photo.src}
            add={photo.add}
            like={photo.like}
            type={photo.type}
          />
        ))}
      </div>
    </>
  );
}
