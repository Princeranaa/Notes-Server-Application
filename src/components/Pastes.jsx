import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/PasteSclice";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";

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
    <div className="flex flex-col justify-center items-center">
      <input
        className="w-full max-w-[30%] mt-5 p-3 border border-zinc-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a3a7ef] focus:border-transparent placeholder-gray-400 text-zinc-500 transition duration-200"
        type="text"
        placeholder="Search"
        value={serchTerm}
        onChange={(e) => setSerchTerm(e.target.value)}
      />

      <div className="mt-4 flex flex-col text-center gap-5">
        {filterData.length > 0 &&
          filterData.map((paste) => {
            return (
              <div
                key={paste?._id}
                className="border bg-zinc-900 rounded-lg p-2 font-bold gap-4 outline outline-1"
              >
                <div className="text-zinc-500">Title : {paste.title}</div>

                <div className="text-zinc-500">Content : {paste.content}</div>

                <div className="flex fle-row gap-4 leading-none mt-2 place-content-evenly">
                  <button className="focus:outline-none focus:ring-1 focus:ring-[#646cff] focus:border-transparent">
                    <NavLink to={`/?pasteId=${paste?._id}`}>
                         Edit
                    </NavLink>
                  </button>
                  <button className="focus:outline-none focus:ring-1 focus:ring-[#646cff] focus:border-transparent">
                    <NavLink
                      to={`/pastes/${paste?._id}`}
                    >
                      view
                    </NavLink>
                  </button>
                  <button
                    onClick={() => deleteHandler(paste?._id)}
                    className="focus:outline-none focus:ring-1 focus:ring-[#646cff] focus:border-transparent"
                  >
                    Delete
                  </button>

                  {/* pending */}
                  <button className="focus:outline-none focus:ring-1 focus:ring-[#646cff] focus:border-transparent">
                    Share
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copy to Keybord");
                    }}
                    className="focus:outline-none focus:ring-1 focus:ring-[#646cff] focus:border-transparent"
                  >
                    Copy
                  </button>
                  <div className="w-[12vw]">{paste.createdAt}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Pastes;
