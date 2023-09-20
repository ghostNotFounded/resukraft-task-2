import { Appear } from "../animations/appear";
import { useContext, useRef, useState } from "react";
import { ResumeContext } from "../context/resumeContext";
import { TrashIcon } from "@heroicons/react/24/solid";

const Skills = () => {
  const resumeContext = useContext(ResumeContext);

  const [input, setInput] = useState("");

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      input.trim().length !== 0 &&
      resumeContext?.skills?.indexOf(
        input.replace(/^\w/, (c) => c.toUpperCase())
      ) === -1
    ) {
      const newSkills = [
        ...resumeContext?.skills,
        input.replace(/^\w/, (c) => c.toUpperCase()),
      ];
      resumeContext?.setSkills(newSkills);
      setInput("");
    }
  };

  const removeSkill = (skill: string) => {
    const removedArr = [...resumeContext?.skills].filter(
      (currSkill) => currSkill !== skill
    );

    resumeContext?.setSkills(removedArr);
  };

  return (
    <Appear>
      <div className="space-y-5 w-[600px]">
        <p className="text-4xl font-semibold max-w-[600px]">
          What are some of your <span className="text-customBlue">skills</span>?
        </p>
        <form onSubmit={handleSubmit} className="flex">
          <input
            placeholder="Add a skill"
            value={input}
            onChange={handleChange}
            name="text"
            className="rounded-l-full px-6 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700"
          />
          <button
            onClick={handleSubmit}
            className="rounded-r-full bg-customBlue w-[100px] hover:opacity-80 duration-300 px-2 py-2"
          >
            Add Skill
          </button>
        </form>
        <div className="max-h-[250px] overflow-y-auto space-y-5 pr-5">
          {resumeContext?.skills?.map((skill, i) => {
            return i === 0 ? (
              ""
            ) : (
              <p
                className="rounded-full bg-slate-200 dark:bg-slate-800 px-6 py-2 flex justify-between"
                key={i}
                id={skill}
              >
                {skill}
                <button onClick={() => removeSkill(skill)}>
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

export default Skills;
