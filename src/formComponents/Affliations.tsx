import { AnimatedAppear } from "../animations/AnimatedAppear";
import { useContext, useRef, useState } from "react";
import { ResumeContext } from "../context/resumeContext";
import { TrashIcon } from "@heroicons/react/24/solid";

const Affiliations = () => {
  const resumeContext = useContext(ResumeContext);

  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      input.trim().length !== 0 &&
      resumeContext?.Affiliations?.indexOf(
        input.replace(/^\w/, (c) => c.toUpperCase())
      ) === -1
    ) {
      const newAffiliations = [
        ...resumeContext?.Affiliations,
        input.replace(/^\w/, (c) => c.toUpperCase()),
      ];
      resumeContext?.setAffiliations(newAffiliations);
      setInput("");
    }
  };

  const removeSkill = (skill: string) => {
    const removedArr = [...resumeContext?.Affiliations].filter(
      (currSkill) => currSkill !== skill
    );

    resumeContext?.setAffiliations(removedArr);
  };

  return (
    <AnimatedAppear>
      <div className="space-y-5 w-[600px]">
        <p className="text-4xl font-semibold max-w-[600px]">
          What are some of your{" "}
          <span className="text-customBlue">affiliations</span>?
        </p>
        <form onSubmit={handleSubmit} className="flex">
          <input
            placeholder="Add an affiliation"
            value={input}
            onChange={handleChange}
            name="text"
            className="rounded-l-full px-6 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700"
            ref={inputRef}
          />
          <button
            onClick={handleSubmit}
            className="rounded-r-full bg-customBlue w-[180px] hover:opacity-80 duration-300 px-2 py-2"
          >
            Add Affiliation
          </button>
        </form>
        <div className="max-h-[250px] overflow-y-auto space-y-5 pr-5">
          {resumeContext?.Affiliations?.map((skill, i) => {
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
    </AnimatedAppear>
  );
};

export default Affiliations;
