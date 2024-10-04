import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/PasteSclice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

function Pastes() {
  const Pastes = useSelector((state) => state.paste.pastes);
  console.log(Pastes);

  const dispatch = useDispatch();

  // filter the content
  const [serchTerm, setSerchTerm] = useState("");

  const filterData = Pastes.filter((paste) =>
    paste.title.toLowerCase().includes(serchTerm.toLowerCase())
  );

  function deleteHandler(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="flex flex-col justify-center items-center sm:px-6 md:px-8 lg:px-10">
      <input
        className="w-full max-w-[80%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] mt-5 p-3 border border-zinc-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a3a7ef] focus:border-transparent placeholder-gray-400 text-zinc-500 transition duration-200"
        type="text"
        placeholder="Search"
        value={serchTerm}
        onChange={(e) => setSerchTerm(e.target.value)}
      />

      <div className="mt-6 w-full px-4 flex flex-col text-center gap-5 sm:gap-6 md:gap-8 lg:gap-10">
        {filterData.length > 0 &&
          filterData.map((paste) => {
            return (
              <div
                key={paste?._id}
                className="border bg-zinc-900 rounded-lg p-4 font-bold text-left outline outline-1 gap-4 sm:p-5 md:p-6 lg:p-8"
              >
                <div className="text-zinc-500 mb-2">Title: {paste.title}</div>

                <div className="text-zinc-500 mb-2">
                  Content: {paste.content}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:justify-evenly">
                  <button className="focus:outline-none focus:ring-1 focus:ring-[#646cff]">
                    <NavLink to={`/?pasteId=${paste?._id}`}>Edit</NavLink>
                  </button>
                  <button className="focus:outline-none focus:ring-1 focus:ring-[#646cff]">
                    <NavLink to={`/pastes/${paste?._id}`}>View</NavLink>
                  </button>
                  <button
                    onClick={() => deleteHandler(paste?._id)}
                    className="focus:outline-none focus:ring-1 focus:ring-[#646cff]"
                  >
                    Delete
                  </button>
                  <button className="focus:outline-none focus:ring-1 focus:ring-[#646cff]">
                    Share
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to Clipboard");
                    }}
                    className="focus:outline-none focus:ring-1 focus:ring-[#646cff]"
                  >
                    Copy
                  </button>
                  <div className="text-zinc-500 text-xs sm:text-sm md:text-base">
                    {new Date(paste.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Pastes;
