import FM5 from "../assets/Group 1.png";
import FM10 from "../assets/Frame 10.png";
import FM18 from "../assets/Frame 18.png";
import FM01 from "../assets/Group 2.png";

const MySocials = () => {
  return (
    <div className="px-4 sm:px-10 mt-2 mb-1 font-sans cursor-pointer bg-white text-gray-800 lg:w-[92%] sm:w-full">
      <div className="py-4 px-2 text-start">
        <h1 className="text-xl font-bold mb-2">✨ My Socials</h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:gap-6 gap-4 justify-center">
        {/* Instagram */}
        <div className="flex flex-col items-center">
          <a
            href="https://www.instagram.com/avineet_05/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={FM5}
              alt="Instagram"
              className="w-full max-w-[380px] h-[178px] object-contain rounded-lg transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
            />
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/avineet-yadav-10068a289/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={FM10}
              alt="LinkedIn"
              className="w-full max-w-[380px] h-[178px] object-contain rounded-lg transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
            />
          </a>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center">
          <a
            href="https://github.com/AvineetYadav"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={FM18}
              alt="GitHub"
              className="w-full max-w-[380px] h-[178px] object-contain rounded-lg transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
            />
          </a>
        </div>

        {/* Extra GitHub Image */}
        <div className="flex flex-col items-center">
          <a
            href="https://github.com/AvineetYadav"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={FM01}
              alt="Twitter"
              className="w-full max-w-[380px] h-[178px] object-contain rounded-lg transition-all duration-300 ease-in-out hover:filter hover:grayscale-10 hover:brightness-95"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MySocials;
