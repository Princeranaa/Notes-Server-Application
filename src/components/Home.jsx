import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/PasteSclice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const allPastes = useSelector((state) => state.paste.pastes);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Correctly invoke useNavigate

  // Fetch and populate the existing paste when editing
  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste)); // Update paste
    } else {
      dispatch(addToPastes(paste)); // Create paste
    }

    // Clear the input fields after creation/updation
    setTitle("");
    setValue("");
    setSearchParams({});

    // Navigate to /pastes after creating/updating
    navigate("/pastes"); // navigate to /pastes
  };

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="bg-zinc-600 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {pasteId ? "Update Your Paste" : "Create a New Paste"}
          </h2>

          <div className="flex flex-col sm:flex-row sm:gap-6 gap-4">
            <input
              className="p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#646cff] focus:border-transparent flex-1 text-zinc-500 font-bold"
              type="text"
              placeholder="Enter Your Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <button
              onClick={createPaste} // Fixed function call
              className="bg-[#646cff] text-zinc-950 font-semibold p-3 rounded-md hover:bg-[#666fe8] transition duration-300"
            >
              {pasteId ? "Update Paste" : "Create My Paste"}
            </button>
          </div>
        </div>

        <div className="bg-zinc-500 shadow-md rounded-lg text-zinc-600 font-semibold text-wrap text-xl mt-4">
          <textarea
            className="w-full h-[60vh] p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#646cff] focus:border-transparent hover:border-[#646cff] transition duration-300 resize-none"
            value={value}
            placeholder="Enter your content here..."
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Home;
