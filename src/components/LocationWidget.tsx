import { useState } from "react";
import { MapPin } from "lucide-react";
import MAP_IMG from "../assets/ChatGPT Image May 17, 2025, 12_07_59 PM.png";

const LocationWidget = () => {
  const [location] = useState("Airport Road, Indore");

  const openInGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/place/Devi+Ahilyabai+Holkar+International+Airport,+Indore/@22.723872,75.811964,14.2z/data=!4m6!3m5!1s0x3962ff2d45d1a687:0x3d0fa6d78a741c2d!8m2!3d22.7280036!4d75.804099!16zL20vMGNxaHlw`,
      "_blank"
    );
  };

  return (
    <div className="px-4 sm:px-[50px] mt-14  !pt-0 mb-2 font-sans bg-white text-gray-800 lg:w-[92%] sm:w-full lg:mt-8 ">
      <div className="py-4 px-2 text-start">
        <h1 className="text-xl font-bold mb-2 ">📍 My Location</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 ">
        {/* Quote Card */}
        <div className="bg-white rounded-xl p-6 flex flex-col justify-center w-full max-w-[380px] h-[178px] border-2">
          <div className="text-4xl font-bold text-gray-800 mb-2">"</div>
          <p className="text-xl text-gray-800 font-medium">
            If I cannot do great things, I can do small things in a great way.
            <span className="inline-block ml-2" role="img" aria-label="rocket">
              🚀
            </span>
          </p>
        </div>

        {/* Map Card */}
        <div
          className="bg-white rounded-xl shadow-md overflow-hidden relative cursor-pointer hover:shadow-lg transition-shadow duration-300 w-full max-w-[380px] h-[178px]"
          onClick={openInGoogleMaps}
          title="Click to open in Google Maps"
        >
          <img
            src={MAP_IMG}
            alt="Map Thumbnail"
            className="w-full h-full object-cover select-none"
            draggable={false}
          />

          {/* Location Pin */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="relative">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="22" r="8" fill="#FF4747" />
                <circle cx="24" cy="22" r="12" fill="#FF4747" fillOpacity="0.4" />
              </svg>
              <div className="absolute w-12 h-12 bg-red-400 rounded-full opacity-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
            </div>
          </div>

          {/* Location Label */}
          <div className="absolute bottom-4 left-4 bg-white px-5 py-2 rounded-full flex items-center shadow-md pointer-events-none">
            <MapPin className="h-5 w-5 text-red-500 mr-2" />
            <span className="font-medium text-gray-800">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationWidget;
