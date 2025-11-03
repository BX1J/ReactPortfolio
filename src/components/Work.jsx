import React from "react";

const Work = () => {
  return (
    <>
      <div className="h-auto relative w-full border-2 border-black mt-2 flex flex-col justify-between items-center">
        <h1 className="text-7xl mt-24 font-extrabold sticky top-0">MY WORK</h1>
        <div className="w-full h-screen rounded-t-[60px] overflow-hidden sticky top-24 z-[-2]">
          <img
            className="h-full w-full"
            src="src/assets/work1.jpg"
            alt="An Image of work that I did before."
          />
        </div>
        <div className="w-full h-screen rounded-t-[60px] overflow-hidden sticky top-32">
          <img
            className="h-full w-full"
            src="src/assets/work2.jpg"
            alt="An Image of work that I did before."
          />
        </div>
        <div className="w-full h-screen rounded-t-[60px] overflow-hidden sticky top-32">
          <img
            className="h-full w-full"
            src="src/assets/work1.jpg"
            alt="An Image of work that I did before."
          />
        </div>
      </div>
        <div className="h-[100vh] w-full border-2 border-black mt-2 text-center bg-black-200"><h3>now this is where the rest will go in a new component</h3></div>
    </>
  );
};

export default Work;
