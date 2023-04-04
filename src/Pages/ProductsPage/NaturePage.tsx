import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import "./ProductsPage.css";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHooks";
import { fetchPhotos } from "../../Store/Slices/PhotoSlice";

export const Nature: React.FC = () => {
  const photos = useAppSelector((state: any) => state.photos.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);
  return (
    <div className="cards ">
      {photos.map((photo: any) => (
        <Card
          title={photo.title}
          src={photo.src}
          add={photo.add}
          like={photo.like}
          type={photo.people}
        />
      ))}
    </div>
  );
};
