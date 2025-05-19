import FM1 from "../assets/Frame 17.png";
import FM2 from "../assets/Frame 17-1.png";
import FM3 from "../assets/Frame 17-2.png";
import FM4 from "../assets/Frame 19.png";
import FM6 from "../assets/Frame 4343.png";

const MyProject = () => {
  return (
    <div className="px-4 sm:px-10 font-sans cursor-pointer bg-white text-gray-800 lg:w-[92%] sm:w-[100%]">
      <div className="py-4 px-2 text-start">
        <h1 className="text-xl  font-bold mb-2 ml-2">🦅 My Projects</h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:gap-6 gap-6">
        {/* Project 1 */}
        <div className="flex flex-col items-center">
          <a
            href="https://github.com/AvineetYadav/Hungry-Hippo"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={FM1}
              alt="Project 1"
              className="w-full max-w-[380px] h-[178px] object-contain rounded-lg transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
            />
          </a>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col items-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={FM2}
              alt="Project 2"
              className="w-full max-w-[380px] h-[178px] object-contain rounded-lg transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
            />
          </a>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col items-center">
          <a
            href="https://youtube-clone-omega-ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={FM3}
              alt="Project 3"
              className="w-full max-w-[380px] h-[178px] object-contain rounded-lg transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
            />
          </a>
        </div>

        {/* Project 4 */}
        <div className="flex flex-col items-center">
          <a
            href="https://youtube-clone-omega-ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={FM4}
              alt="Project 4"
              className="w-full max-w-[380px] h-[178px] object-contain rounded-lg transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
            />
          </a>
        </div>

        {/* Project 6 */}
        <div className="flex flex-col items-center">
          <a
            href="https://youtube-clone-omega-ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={FM6}
              alt="Project 6"
              className="w-full max-w-[380px] h-[178px] object-contain rounded-lg transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
