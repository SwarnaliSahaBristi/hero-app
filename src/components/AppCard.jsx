import React from "react";
import downloadIcon from '../assets/icon-downloads.png';
import reviewIcon from '../assets/icon-ratings.png'

const AppCard = ({ app }) => {
  const { image,title,downloads, ratingAvg} = app;
  return (
    <div className="card bg-base-100 shadow-lg mt-6">
      <figure className="h-48 overflow-hidden">
        <img className="w-full object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between">
          <button className="btn btn-outline text-green-500">
            <img className="h-[20px] w-[20px]" src={downloadIcon}></img>
            {downloads}</button>
          <button className="btn btn-outline text-orange-500">
            <img className="h-[20px] w-[20px]" src={reviewIcon}></img>
                {ratingAvg}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
