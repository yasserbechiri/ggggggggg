import video1 from "../assets/video1.mp4";


import Video2  from "../assets/video2.mp4";



const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      Navigate the Road Ahead with :
        <span className="bg-gradient-to-r from-[#575799] to-[#5152D8] text-transparent bg-clip-text">
          {" "}
          Auto Eocle Your Ultimate Automotive Companion!
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
       
        
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={Video2 } type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
    </div>
  );
};

export default HeroSection;
