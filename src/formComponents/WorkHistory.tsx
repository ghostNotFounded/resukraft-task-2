import { useContext, useState } from "react";
import { AnimatedAppear } from "../animations/AnimatedAppear";
import { ResumeContext } from "../context/resumeContext";

const WorkHistory = () => {
  const resumeContext = useContext(ResumeContext);

  const [inputTitle, setInputTitle] = useState("");
  const [inputStart, setInputStart] = useState("");
  const [inputEnd, setInputEnd] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [inputSkill1, setInputSkill1] = useState("");
  const [inputSkill2, setInputSkill2] = useState("");
  const [inputSkill3, setInputSkill3] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      inputEnd.trim().length !== 0 &&
      inputLocation.trim().length !== 0 &&
      inputStart.trim().length !== 0 &&
      inputTitle.trim().length !== 0 &&
      inputSkill1.trim().length !== 0 &&
      inputSkill2.trim().length !== 0 &&
      inputSkill3.trim().length !== 0
    ) {
      const newExp = [
        inputTitle,
        inputStart,
        inputEnd,
        inputLocation,
        inputSkill1,
        inputSkill2,
        inputSkill3,
      ];
      resumeContext?.setWorkExp([...resumeContext?.workExp, newExp]);
      setInputTitle("");
      setInputStart("");
      setInputEnd("");
      setInputLocation("");
      setInputSkill1("");
      setInputSkill2("");
      setInputSkill3("");
    }
  };

  // const removeSkill = (skill: string) => {
  //   const removedArr = [...resumeContext?.skills].filter(
  //     (currSkill) => currSkill !== skill
  //   );

  //   resumeContext?.setSkills(removedArr);
  // };

  return (
    <AnimatedAppear>
      <div className="space-y-5 max-w-[600px]">
        <p className="text-4xl font-semibold max-w-[620px]">
          Tell us more about your{" "}
          <span className="text-customBlue">work experience</span>
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            className="title rounded-full px-6 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700"
            placeholder="Job title..."
            onChange={(e) => {
              setInputTitle(e.target.value);
            }}
            value={inputTitle}
          />

          <div className="flex space-x-2 ">
            <input
              type="text"
              className="title rounded-full px-6 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700"
              placeholder="Start date (MM/YY format)"
              onChange={(e) => {
                setInputStart(e.target.value);
              }}
              value={inputStart}
            />

            <input
              type="text"
              className="title rounded-full px-6 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700"
              placeholder="End date (MM/YY or current)."
              onChange={(e) => {
                setInputEnd(e.target.value);
              }}
              value={inputEnd}
            />
          </div>

          <input
            type="text"
            className="title rounded-full px-6 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700"
            placeholder="Location"
            onChange={(e) => {
              setInputLocation(e.target.value);
            }}
            value={inputLocation}
          />

          <input
            type="text"
            className="title rounded-full px-6 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700"
            placeholder="Any 3 roles"
            onChange={(e) => {
              setInputSkill1(e.target.value);
            }}
            value={inputSkill1}
          />
          <input
            type="text"
            className="title rounded-full px-6 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700"
            placeholder="Any 3 roles"
            onChange={(e) => {
              setInputSkill2(e.target.value);
            }}
            value={inputSkill2}
          />
          <input
            type="text"
            className="title rounded-full px-6 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700"
            placeholder="Any 3 roles"
            onChange={(e) => {
              setInputSkill3(e.target.value);
            }}
            value={inputSkill3}
          />

          <button
            className="bg-customBlue px-6 py-2 rounded-full"
            onClick={handleSubmit}
          >
            Add Work Experience
          </button>
        </form>
      </div>
    </AnimatedAppear>
  );
};

export default WorkHistory;
