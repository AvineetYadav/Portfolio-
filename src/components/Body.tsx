import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Profile from "./Profile";
import MyProject from "./MyProject";
import MySocials from "./MySocials";
import ContactCards from "./ContactCards";
import LocationQuote from "./LocationWidget";

gsap.registerPlugin(ScrollTrigger);

const Body = () => {
  useEffect(() => {
    gsap.fromTo(
      ".section-appear",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".section-appear",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen overflow-hidden bg-white">
      {/* Left Panel */}
      <div className="flex justify-center items-center flex-shrink-0 lg:w-1/3 bg-white p-6">
        <Profile />
      </div>

      {/* Right Scrollable Panel */}
      <div className="flex-1 flex flex-col lg:ml-16 overflow-y-auto lg:pr-4 space-y-0 lg:space-y-12 py-8">
        <div className="section-appear mt-0 lg:mt-10">
          <MyProject />
        </div>
        <div className="section-appear">
          <MySocials />
        </div>
        <div className="section-appear">
          <LocationQuote />
        </div>
        <div className="section-appear ">
          <ContactCards />
        </div>
      </div>
    </div>
  );
};

export default Body;
