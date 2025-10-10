import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "../assets/icon-downloads.png";
import reviewImg from "../assets/icon-ratings.png";
import iconReview from "../assets/icon-review.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "react-toastify";


const AppDetails = () => {
  const apps = useLoaderData();
  const { id } = useParams();
  const appId = parseInt(id);
  const app = apps?.find((app) => app.id === appId);
  const [installed, setInstalled] = useState(false);
  
  const {
    image,
    title,
    companyName,
    downloads,
    reviews,
    ratingAvg,
    ratings,
    description,
  } = app;
  useEffect(()=>{
    const existingList = JSON.parse(localStorage.getItem('installation'));
    const isInstalled = existingList?.some((p) => p.id === app.id);
    if (isInstalled) setInstalled(true);
  },[app.id])
  const handleAddToInstallation = () =>{
    const existingList = JSON.parse(localStorage.getItem('installation'))
    let updatedList = [];
    if(existingList){
        const isDuplicate = existingList?.some(p=> p.id === app.id)
        if(isDuplicate) return toast.error("Already Installed!!")
        updatedList= [...existingList,app]
    }else{
        updatedList.push(app)
    }
    localStorage.setItem('installation', JSON.stringify(updatedList))
    toast.success("App Installed!!")
    setInstalled(true);
  }
  return (
    <div className="px-12 mt-8">
      <div className="flex gap-10">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h2 className="font-bold text-3xl">{title}</h2>
          <p className="font semi-bold text-xl py-4 text-gray-400">
            Developed By: {companyName}
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
          <button onClick={()=>handleAddToInstallation()} className={`btn px-8 py-4 mt-5 text-white ${installed ? "bg-gray-400" : "bg-green-500"}`}>
            {installed ? "Installed" : "Install"}
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
