import FM5 from "../assets/Frame 15.png";
import FM10 from "../assets/Frame 10.png";

const MySocials = () => {
  return (
    <div className="px-6 sm:px-10  font-sans bg-white text-gray-800">
      <div className="p-4 md:p-8 lg:p-12 text-start">
        <h1
          className="text-lg sm:text-3xl md:text-4xl lg:text-3xl font-bold mb-1"
          style={{
            fontFamily: `'Poppins', sans-serif`, // Use Google Font for style
          }}
        >
          🎃 My Socials
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <img
            src={FM5}
            alt="Social 1"
            className="w-[100%] h-auto rounded-lg object-cover"
            style={{ maxHeight: "250px" }} // Adjust max height for consistency
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={FM10}
            alt="Social 2"
            className="w-[100%] h-auto rounded-lg object-cover"
            style={{ maxHeight: "250px" }} // Adjust max height for consistency
          />
        </div>
      </div>
    </div>
  );
};

export default MySocials;
