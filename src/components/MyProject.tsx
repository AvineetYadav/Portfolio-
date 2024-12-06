import FM1 from "../assets/Frame 17 (1).png";
import FM2 from "../assets/Frame 17 (2).png";
import FM3 from "../assets/Frame 17.png";

const MyProject = () => {
  return (
    <div className="p-6 sm:px-10 lg:mt-12 font-sans cursor-pointer text-gray-800 bg-white">
      {/* Header Section */}
      <div className="text-start mb-6">
        <h1
          className="text-lg sm:text-3xl md:text-4xl lg:text-2xl font-bold"
          style={{
            fontFamily: `'Roboto', sans-serif`, // Changed font to 'Roboto' for better readability
            fontWeight: '700', // Making the font weight bolder for contrast
          }}
        >
          🚀 My Projects
        </h1>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-[92%] sm:w-[100%] gap-6">
        {[FM1, FM2, FM3].map((image, idx) => (
          <div key={idx} className="flex justify-center">
            <img
              src={image}
              alt={`Project ${idx + 1}`}
              className="h-auto rounded-lg object-cover transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
              style={{ maxHeight: "250px" }} // Adjust max height for smaller size
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProject;
