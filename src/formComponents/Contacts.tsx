import { Appear } from "../animations/appear";
import { useContext } from "react";
import { ResumeContext } from "../context/resumeContext";

const Contacts = () => {
  const resumeContext = useContext(ResumeContext);
  const updateLocation = (e: any) => {
    if (resumeContext) {
      resumeContext.setResume({
        name: resumeContext?.resume?.name,
        professionalSummary: resumeContext?.resume?.professionalSummary,
        location: e.target.value,
        phone: resumeContext?.resume?.phone,
        email: resumeContext?.resume?.email,
      });
    }
  };
  const updatePhone = (e: any) => {
    if (resumeContext) {
      resumeContext.setResume({
        name: resumeContext?.resume?.name,
        professionalSummary: resumeContext?.resume?.professionalSummary,
        location: resumeContext?.resume?.location,
        phone: e.target.value,
        email: resumeContext?.resume?.email,
      });
    }
  };
  const updateEmail = (e: any) => {
    if (resumeContext) {
      resumeContext.setResume({
        name: resumeContext?.resume?.name,
        professionalSummary: resumeContext?.resume?.professionalSummary,
        location: resumeContext?.resume?.location,
        phone: resumeContext?.resume?.phone,
        email: e.target.value,
      });
    }
  };
  return (
    <Appear>
      <div className="space-y-5 max-w-[600px]">
        <p className="text-4xl font-semibold">
          How would you like to be{" "}
          <span className="text-customBlue">contacted</span>.
        </p>
        <input
          type="text"
          placeholder="Your location"
          className="rounded-full px-6 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700"
          onChange={updateLocation}
          value={resumeContext?.resume?.location}
        />
        <input
          type="text"
          placeholder="Your phone number"
          className="rounded-full px-6 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700"
          onChange={updatePhone}
          value={resumeContext?.resume?.phone}
        />
        <input
          type="text"
          placeholder="Your email ID (max length - 25 characters)"
          className="rounded-full px-6 py-2 w-full outline-customBlue dark:outline-none border-slate-300 border bg-inherit dark:border-slate-700"
          onChange={updateEmail}
          maxLength={26}
          value={resumeContext?.resume?.email}
        />
      </div>
    </Appear>
  );
};

export default Contacts;
