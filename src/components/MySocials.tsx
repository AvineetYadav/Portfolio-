import FM5 from "../assets/Frame 9.png";
import FM10 from "../assets/Frame 10.png";
import FM18 from "../assets/Frame 18.png";

const MySocials = () => {
  return (
    <div className="px-6 sm:px-10 mb-5 font-sans cursor-pointer bg-white text-gray-800 lg:w-[92%] sm:w-[100%]">
      <div className="py-4 px-2 text-start">
        <h1
          className="text-lg sm:text-3xl md:text-4xl lg:text-2xl font-bold mb-2 mt-10"
          style={{
            fontFamily: `'Roboto', sans-serif`, // Using a cleaner font for headings
            fontWeight: '700', // Making it bolder for better contrast
          }}
        >
          🎃 My Socials
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <a href="https://www.instagram.com/avineet_05/" target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={FM5}
              alt="Instagram"
              className="h-auto rounded-lg object-cover transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
              style={{ maxHeight: "250px" }} // Adjust max height for consistency
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="https://www.linkedin.com/in/avineet-yadav-10068a289/recent-activity/all/" target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={FM10}
              alt="LinkedIn"
              className="h-auto rounded-lg object-cover transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
              style={{ maxHeight: "250px" }} // Adjust max height for consistency
            />
          </a>
        </div>
        <div className="flex flex-col mb-12 items-center">
          <a href="https://github.com/AvineetYadav" target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={FM18}
              alt="GitHub"
              className="h-auto rounded-lg object-cover transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
              style={{ maxHeight: "250px" }} // Adjust max height for consistency
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MySocials;
