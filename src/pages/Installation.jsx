import React, { useEffect, useState } from "react";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import { toast } from "react-toastify";

const Installation = () => {
  const [installist, setInstallist] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installation"));
    if (saveList) setInstallist(saveList);
  }, []);

    const sortedItem = (() => {
      if (sortOrder === "downloads-asc") {
        return [...installist].sort((a, b) => a.downloads - b.downloads);
      } else if (sortOrder === "downloads-dsc") {
        return [...installist].sort((a, b) => b.downloads - a.downloads);
      } else {
        return installist;
      }
    })();

    const handleUninstall = (id) =>{
        const existingList = JSON.parse(localStorage.getItem('installation'))
        let updatedList = existingList.filter((p) => p.id !== id);
        setInstallist(updatedList);
        localStorage.setItem("installation", JSON.stringify(updatedList));
        toast.success("App Uninstalled Successfully!!")
    }
  return (
    <div className="space-y-6">
      <div className="text-center mt-6">
        <h2 className="font-bold text-4xl">Your Installed Apps</h2>
        <p className="text-gray-400 p-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between py-5 items-center px-12">
        <span className="text-lg font-bold">
          ({sortedItem.length}) Apps found
        </span>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Downloads</option>
            <option value="downloads-asc">Low-&gt;High</option>
            <option value="downloads-dsc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      <div className="space-y-3 px-12">
        {sortedItem.map((p) => (
          <div
            key={p.id}
            className="border-2 border-gray-300 p-3 flex justify-between items-center rounded-xl my-3"
          >
            <div className="flex gap-3">
              <img
                src={p.image}
                className="w-[100px] h-[100px] rounded-xl"
                alt=""
              />
              <div>
                <h2 className="font-bold text-2xl">{p.title}</h2>
                <div className="flex gap-4 py-3">
                  <div className="flex gap-2 justify-center items-center">
                    <img className="w-[20px] h-[20px]" src={downloadIcon} alt="" />
                    <p className="text-lg font-semibold text-green-500">{p.downloads}</p>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <img className="w-[20px] h-[20px]" src={ratingIcon} alt="" />
                    <p className="text-lg font-semibold text-orange-400">{p.ratingAvg}</p>
                  </div>
                  <p className="text-lg font-semibold text-gray-500">{p.size}MB</p>
                </div>
              </div>
            </div>
            <button
            onClick={()=> handleUninstall(p.id)}
            className="btn bg-green-500 text-white px-8 py-4 mt-5">Uninstall</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
