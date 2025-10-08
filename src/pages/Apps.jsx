// import React,  from "react";
import { useLoaderData } from "react-router";
import AppCard from "../components/AppCard";
import { useState } from "react";
import ErrorPage from "./ErrorPage";

const Apps = () => {
  const apps = useLoaderData();
  const [search, setSearch] = useState("")
  const term = search.trim().toLocaleLowerCase()
  const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term))
  : apps
  
  return (
    <div>
      <div className="text-center">
        <h2 className="font-bold text-4xl">Our All Applications</h2>
        <p className="text-gray-400 p-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between py-5 items-center">
        <span className="text-xl font-bold">({searchedApps.length})Apps found</span>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
          value={search}
          onChange={e=> setSearch(e.target.value)}
           type="search" required placeholder="Search Apps" />
        </label>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {
            searchedApps.map(app=> <AppCard key={app.id} app={app}></AppCard>)
        }
      </div>
    </div>
  );
};

export default Apps;
