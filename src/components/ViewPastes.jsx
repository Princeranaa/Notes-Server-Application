import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ViewPastes() {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);

  // Find the paste with the matching id
  const paste = allPastes.find((p) => p._id === id);
  console.log("final Paste:", paste);

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center py-8 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-2xl w-full space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
        {/* Title Section */}
        <div className="bg-zinc-600 shadow-md rounded-lg p-6">
          <div className="flex flex-col sm:flex-row sm:gap-6 md:gap-8 lg:gap-10">
            <input
              className="p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#646cff] focus:border-transparent flex-1 text-zinc-500 font-bold"
              type="text"
              placeholder="Enter Your Title"
              value={paste?.title || ""}
              disabled
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-zinc-900 shadow-md rounded-lg text-zinc-600 font-semibold mt-4">
          <textarea
            className="w-full h-[60vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#646cff] focus:border-transparent hover:border-[#646cff] transition duration-300 resize-none text-zinc-500"
            value={paste?.content || ""}
            disabled
            placeholder="Content not available"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default ViewPastes;
