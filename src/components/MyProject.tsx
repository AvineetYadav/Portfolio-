import FM1 from "../assets/Frame 17 (1).png";
import FM2 from "../assets/Frame 17 (2).png";
import FM3 from "../assets/Frame 17.png";

const MyProject = () => {
  return (
    <div className="px-6 sm:px-10 font-sans cursor-pointer bg-white text-gray-800 lg:w-[92%] sm:w-[100%] lg:mt-12">
      <div className="py-4 px-2 text-start">
        <h1
          className="text-lg sm:text-3xl md:text-4xl lg:text-2xl font-bold mb-2 mt-10"
          style={{
            fontFamily: `'Roboto', sans-serif`,
            fontWeight: "700",
          }}
        >
          🚀 My Projects
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Project 1 */}
        <div className="flex flex-col items-center">
          <a href="https://github.com/AvineetYadav/Hungry-Hippo" target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={FM1}
              alt="Project 1"
              className="h-auto rounded-lg object-cover transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
              style={{ maxHeight: "250px" }}
            />
          </a>
        </div>
        {/* Project 2 */}
        <div className="flex flex-col items-center">
          <a href="#" target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={FM2}
              alt="Project 2"
              className="h-auto rounded-lg object-cover transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
              style={{ maxHeight: "250px" }}
            />
          </a>
        </div>
        {/* Project 3 */}
        <div className="flex flex-col mb-12 items-center">
          <a href="https://youtube-clone-omega-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={FM3}
              alt="Project 3"
              className="h-auto rounded-lg object-cover transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
              style={{ maxHeight: "250px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
