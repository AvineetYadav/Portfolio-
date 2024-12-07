import IMG from "../assets/uQsAxsHS_400x400.jpg";
import DOWNLOAD from "../assets/download-03-svgrepo-com.svg";

const Profile = () => {
  return (
    <div className="flex lg:bg-[#aed6f1] flex-col items-center justify-center h-full px-6 sm:px-8 mt-8 sm:mt-12 lg:mt-0">
      {/* Profile Image */}
      <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-64 lg:h-64 mb-6 cursor-pointer">
        <img
          src={IMG}
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-4 border-gray-300 shadow-lg hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out"
        />
        <div className="absolute inset-0 rounded-full border-2 border-black/20 hover:border-black/40 transition-all"></div>
      </div>

      {/* Profile Name and Short Bio */}
      <div className="text-center mb-4">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800 leading-tight tracking-tight">
          Avineet Yadav
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
          💡 I’m a coder & designer
        </p>
      </div>

      {/* Centered Profile Description */}
      <div className="max-w-md mx-auto text-center mt-2">
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 italic leading-relaxed">
          "I’m a full-stack web developer and designer, crafting seamless and
          stunning digital experiences."
        </p>
      </div>

      {/* Download Resume Button */}
      <div className="flex justify-center items-center py-4">
        <button className="flex items-center bg-gradient-to-r from-black via-gray-800 to-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:scale-95 hover:shadow-inner transition-all duration-300 mt-3 font-semibold tracking-wider">
          Download Resume
          <span className="ml-2">
            <img
              src={DOWNLOAD}
              alt="Download"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
