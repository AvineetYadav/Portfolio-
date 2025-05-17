import IMG from "../assets/uQsAxsHS_400x400.jpg";
import DOWNLOAD from "../assets/download-03-svgrepo-com.svg";

const Profile = () => {
  return (
    <div className="flex flex-col lg:mt-[60px] items-start justify-start min-h-auto sm:min-h-screen p-6 pb-2 sm:pb-12 sm:p-12 font-sans text-left bg-white">
      {/* Profile Image */}
      <div className="w-24 h-24 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-6">
        <img
          src={IMG}
          alt="Avineet Yadav Profile"
          className="w-full h-full object-cover rounded-full shadow-md border border-gray-200"
        />
      </div>

      {/* Name */}
      <h1 className="text-2xl sm:text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
        Avineet Yadav
      </h1>

      {/* Short Tagline - force single line */}
      <p className="text-gray-600 text-sm sm:text-lg mt-2 sm:mt-[10px] whitespace-nowrap overflow-hidden text-ellipsis mb-3 sm:mb-5 max-w-full">
        👨‍💻 Developer | 🧠 Learner | 💡 Problem Solver
      </p>

      {/* Personal Summary */}
      <div className="max-w-full sm:max-w-2xl text-gray-700 text-sm sm:text-[20px] leading-[1.6] sm:leading-[1.8] mb-5 sm:mb-8">
        <p>
          Passionate about building impactful digital experiences. Exploring{' '}
          <span style={{ color: '#565656', fontWeight: 600 }}>
            Full-stack development
          </span>
          , design, and everything in between.
        </p>
      </div>

      {/* Resume Button */}
      <a
        href="https://drive.google.com/file/d/1wpS5ki-cbAbDS7jJIhYzmC_MzGvNm1LG/view"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition duration-300 shadow-sm"
      >
        <span className="text-sm sm:text-base font-medium">Download Resume</span>
        <img src={DOWNLOAD} alt="Download" className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
      </a>
    </div>
  );
};

export default Profile;
