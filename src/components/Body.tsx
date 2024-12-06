import Profile from "./Profile";
import MyProject from "./MyProject";
import MySocials from "./MySocials";

const Body = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white overflow-auto">
      <div className="flex justify-center items-center flex-shrink-0 lg:w-1/3 bg-white">
        <Profile />
      </div>
      {/* Left Side: Projects & Socials */}
      <div className="flex-1 flex flex-col ml-16 lg:overflow-y-auto">
        <MyProject />
        <MySocials />
      </div>

      {/* Right Side: Profile */}
    </div>
  );
};

export default Body;
