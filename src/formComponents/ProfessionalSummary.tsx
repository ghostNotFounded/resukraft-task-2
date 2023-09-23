import { useContext } from "react";
import { AnimatedAppear } from "../animations/AnimatedAppear";
import { ResumeContext } from "../context/resumeContext";

const ProfessionalSummary = () => {
  const resumeContext = useContext(ResumeContext);
  const updateSummary = (e: any) => {
    if (resumeContext) {
      resumeContext.setResume({
        name: resumeContext?.resume?.name,
        professionalSummary: e.target.value,
        location: resumeContext?.resume?.location,
        phone: resumeContext?.resume?.phone,
        email: resumeContext?.resume?.email,
      });
    }
  };

  return (
    <AnimatedAppear>
      <div className="space-y-5">
        <p className="text-4xl font-semibold max-w-[600px]">
          Give us a custom{" "}
          <span className="text-customBlue">professional summary</span>
        </p>
        <textarea
          name="professionalSummary"
          id="professionalSummary"
          cols={30}
          rows={5}
          placeholder="Professional Summary..."
          className="rounded-lg px-4 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700 resize-none"
          onChange={updateSummary}
          value={resumeContext?.resume?.professionalSummary}
          maxLength={300}
        ></textarea>
      </div>
    </AnimatedAppear>
  );
};

export default ProfessionalSummary;
