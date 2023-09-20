import { Appear } from "../animations/appear";
import { useContext } from "react";
import { ResumeContext } from "../context/resumeContext";

const Name = () => {
  const resumeContext = useContext(ResumeContext);
  const updateName = (e) => {
    if (resumeContext) {
      resumeContext.setResume({
        name: e.target.value.toUpperCase(),
        professionalSummary: resumeContext?.resume?.professionalSummary,
        location: resumeContext?.resume?.location,
        phone: resumeContext?.resume?.phone,
        email: resumeContext?.resume?.email,
      });
    }
  };
  return (
    <Appear>
      <div className="space-y-5">
        <p className="text-4xl font-semibold max-w-[600px]">
          Hey! Tell us more about you so we can complete your{" "}
          <span className="text-customBlue">resume</span>
        </p>
        <input
          type="text"
          placeholder="What's your name?"
          className="rounded-full px-6 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700"
          onChange={updateName}
          value={resumeContext?.resume?.name}
        />
      </div>
    </Appear>
  );
};

export default Name;
