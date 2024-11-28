import FM1 from "../assets/Frame 1212.png";
import FM2 from "../assets/Frame 13.png";
import FM3 from "../assets/Frame 14.png";

const MyProject = () => {
  return (
    <div className="p-6 sm:px-10 font-sans text-gray-800 bg-white sm:mt-8 mt-14">
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
          <div
            key={idx}
            className="flex justify-center"
          >
            <img
              src={image}
              alt={`Project ${idx + 1}`}
              className="w-[95%] h-auto rounded-lg object-cover"
              style={{ maxHeight: "250px" }} // Adjust max height for smaller size
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProject;
