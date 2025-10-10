// import React,  from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router";
import AppCard from "../components/AppCard";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

const Apps = () => {
  const apps = useLoaderData();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  let [loading, setLoading] = useState(false);
  const term = search.trim().toLocaleLowerCase()
  const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term))
  : apps
  useEffect(() => {
    if (term) {
        setLoading(true)
      
      const delay = setTimeout(() => {
        if (searchedApps.length === 0) {
          navigate("/notfound");
        }
        setLoading(false);
      }, 600);

      return () => clearTimeout(delay);
    } else {
      setLoading(false);
    }
  }, [term, searchedApps.length, navigate]);
  
  return (
    <div>
      <div className="text-center mt-6">
        <h2 className="font-bold text-4xl">Our All Applications</h2>
        <p className="text-gray-400 p-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between py-5 items-center px-12">
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

      {/* loading */}

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <FadeLoader color="#6b46c1" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-12">
          {searchedApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
      
    </div>
  );
};

export default Apps;
