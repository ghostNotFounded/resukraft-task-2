import Button from "./Button";
import resume from "../assets/resume.jpg";
import { AnimatedAppear } from "../animations/AnimatedAppear.js";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col items-center py-5 h-[calc(100vh-73px)] overflow-hidden">
      <div className="space-y-5 w-full flex items-center flex-col">
        <p className="tracking-widest text-sm text-center">
          ONLINE RESUME BUILDER
        </p>
        <h1 className="lg:text-6xl md:text-4xl text-xl font-black max-w-[800px] text-center">
          Craft Your Perfect <span className="text-customBlue">Resume</span>{" "}
          with <span className="text-customBlue">ResuKraft</span>.
        </h1>
        <p className="text-center max-w-[700px] md:text-lg text-sm">
          Your journey to a successful career starts here. Welcome to ResuKraft,
          the ultimate online resume builder designed to empower you with the
          tools you need to create a standout resume that lands you your dream
          job.
        </p>
        <Link to="/create">
          <Button />
        </Link>
      </div>
      <div className="mt-5 md:w-1/2 w-full dark:drop-shadow-2xl drop-shadow-none relative">
        <AnimatedAppear>
          <img src={resume} />
        </AnimatedAppear>
        <div className="absolute w-[120%] z-[-1] h-full top-0 dark:opacity-100 opacity-80 blue__gradient" />
        <div className="absolute w-[12%] z-[-1] h-full top-0 dark:opacity-100 opacity-80 pink__gradient" />
      </div>
    </section>
  );
};

export default Hero;
