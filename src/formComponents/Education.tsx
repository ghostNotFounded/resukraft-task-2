import { Appear } from "../animations/appear";
import { useContext, useRef, useState } from "react";
import { ResumeContext } from "../context/resumeContext";
import { TrashIcon } from "@heroicons/react/24/solid";

const Education = () => {
  const resumeContext = useContext(ResumeContext);

  const [inputLevel, setInputLevel] = useState("");
  const [inputLoc, setInputLoc] = useState("");

  const inputRef = useRef(null);

  const handleChange1 = (e: any) => {
    setInputLevel(e.target.value);
  };

  const handleChange2 = (e: any) => {
    setInputLoc(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputLevel.trim().length !== 0) {
      const newEducation = [
        ...resumeContext?.Education,
        [
          inputLevel.replace(/^\w/, (c) => c.toUpperCase()),
          inputLoc.replace(/^\w/, (c) => c.toUpperCase()),
        ],
      ];
      resumeContext?.setEducation(newEducation);
      setInputLoc("");
      setInputLevel("");
    }
  };

  const removeEducation = (Education: string) => {
    const removedArr = [...resumeContext?.Education].filter(
      (currEducation) => currEducation !== Education
    );

    resumeContext?.setEducation(removedArr);
  };

  return (
    <Appear>
      <div className="space-y-5 w-[600px]">
        <p className="text-4xl font-semibold max-w-[600px]">
          Tell us about your <span className="text-customBlue">education</span>?
        </p>
        <form onSubmit={handleSubmit} className="flex">
          <input
            placeholder="Level of education"
            value={inputLevel}
            onChange={handleChange1}
            name="text"
            className="rounded-l-full px-6 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700"
            ref={inputRef}
          />
          <input
            placeholder="University/College"
            value={inputLoc}
            onChange={handleChange2}
            name="text"
            className="px-6 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700"
            ref={inputRef}
          />
          <button
            onClick={handleSubmit}
            className="rounded-r-full bg-customBlue w-[400px] hover:opacity-80 duration-300 px-2 py-2"
          >
            Add Education
          </button>
        </form>
        <div className="max-h-[250px] overflow-y-auto space-y-5 pr-5">
          {resumeContext?.Education?.map((Education, i) => {
            return i === 0 ? (
              ""
            ) : (
              <p
                className="rounded-full bg-slate-200 dark:bg-slate-800 px-6 py-2 flex justify-between"
                key={i}
                id={Education}
              >
                <span className="font-bold">{Education[0]}</span> {Education[1]}
                <button onClick={() => removeEducation(Education)}>
                  <TrashIcon className="w-5 h-5" />
                </button>
              </p>
            );
          })}
        </div>
      </div>
    </Appear>
  );
};

export default Education;
