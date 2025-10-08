import React from "react";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "../assets/icon-downloads.png";
import reviewImg from "../assets/icon-ratings.png";
import iconReview from "../assets/icon-review.png";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AppDetails = () => {
  const apps = useLoaderData();
  const { id } = useParams();
  const appId = parseInt(id);
  const app = apps.find((app) => app.id === appId);
  const { image, title, companyName, downloads, reviews, ratingAvg, ratings, description } = app;
  console.log(app);
  return (
    <div>
      <div className="flex gap-10">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h2 className="font-bold text-3xl">{title}</h2>
          <p className="font semi-bold text-xl py-4">
            Company Name: {companyName}
          </p>
          <div className="flex gap-15">
            <div>
              <img src={downloadImg} alt="" />
              <h4 className="text-gray-500">Downloads</h4>
              <p className="font-bold text-xl">{downloads}</p>
            </div>
            <div>
              <img src={reviewImg} alt="" />
              <h4 className="text-gray-500">Average Ratings</h4>
              <p className="font-bold text-xl">{ratingAvg}</p>
            </div>
            <div>
              <img src={iconReview} alt="" />
              <h4 className="text-gray-500">Total Reviews</h4>
              <p className="font-bold text-xl text-green-600">{reviews}</p>
            </div>
          </div>

          <button className="btn bg-green-500 text-white px-8 py-4 mt-5">
            Install
          </button>
        </div>
      </div>

      {/* rating */}
      <div className="mt-8 space-y-3">
        <h1 className="font-bold text-3xl">Ratings</h1>
        <div className="bg-base-100 border rounded-xl p-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-2xl py-3">Description: </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
