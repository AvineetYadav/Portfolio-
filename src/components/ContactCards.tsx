import { FaExternalLinkAlt, FaFileAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactCards = () => {
  return (
   <div className="px-4 sm:px-10 pt-10 sm:pt-14 lg:pt-5 mb-5 font-sans bg-white text-gray-800 lg:w-[92%] sm:w-full ">
      {/* Title */}
      <h1 className="text-xl font-bold  mb-6 flex items-center gap-2">
        📬 Got a Project? Git Request!
      </h1>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* My Resume Card */}
          <div className="flex justify-between items-center p-4 border rounded-2xl shadow">
            <div className="flex items-center gap-2 text-lg font-medium">
              <FaFileAlt />
              My Resume
            </div>
            <FaExternalLinkAlt className="text-gray-500 hover:text-black cursor-pointer" />
          </div>

          {/* Cal.com Card */}
          <div className="flex items-center justify-between p-4 border rounded-2xl shadow flex-wrap md:flex-nowrap">
            {/* Left Side */}
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-lg">Cal</div>
              <p className="text-sm">
                Got an idea in mind?
                <br />
                Book a call now! <FaPhone className="inline text-red-500" />
              </p>
              <p className="text-xs text-gray-400 mt-1">cal.com</p>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-28 h-auto">
              <img
                src="https://storyset.com/images/illustrations/meeting/rafiki.svg"
                alt="meeting"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Quote Card */}
          <div className="p-4 border rounded-2xl shadow h-full flex flex-col">
            <p className="text-3xl mb-1">“</p>
            <p className="italic text-lg flex-grow">
              A wise man once said, <br />
              your network is your networth. 📈
            </p>
          </div>

          {/* Email Card */}
          <div className="flex justify-between items-center p-4 border rounded-2xl shadow lg:mb-24 md:mb-[100px] flex-wrap">
            <div className="flex items-center gap-2 text-lg font-medium break-words">
              <MdEmail />
              yadavavineet@gmail.com
            </div>
            <FaExternalLinkAlt className="text-gray-500 hover:text-black cursor-pointer mt-4 md:mt-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
