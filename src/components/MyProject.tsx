import FM1 from "../assets/Frame 17 (1).png";
import FM2 from "../assets/Frame 17 (2).png";
import FM3 from "../assets/Frame 17.png";

const MyProject = () => {
  return (
    <div className="p-6 sm:px-10 font-sans cursor-pointer text-gray-800 bg-white">
      {/* Header Section */}
      <div className="text-start mb-6">
        <h1
          className="text-lg sm:text-3xl md:text-4xl lg:text-3xl px-6 font-bold"
          style={{ fontFamily: `'Poppins', sans-serif` }}
        >
          🚀 My Projects
        </h1>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[FM1, FM2, FM3].map((image, idx) => (
          <div key={idx} className="flex justify-center">
            <img
              src={image}
              alt={`Project ${idx + 1}`}
              className="w-[100%]  h-auto rounded-lg object-cover transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
              style={{ maxHeight: "250px" }} // Adjust max height for smaller size
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProject;
