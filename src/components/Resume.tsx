import { useContext } from "react";
import { ResumeContext } from "../context/resumeContext";

import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const Resume = () => {
  const resumeContext = useContext(ResumeContext);

  return (
    <section className="w-full h-full">
      <div className="grid grid-cols-3 h-full">
        <div className="col-span-2 min-w-full bg-white text-[#000] p-10 space-y-10">
          <div className="text-[#5b6b7a] font-black text-4xl border-b border-[#5b6b7a] overflow-hidden">
            <h1>{resumeContext?.resume?.name || "NAME"}</h1>
          </div>

          <div className="text-[#5b6b7a] space-y-5">
            <h1 className="font-black text-lg border-b border-[#5b6b7a] w-full">
              PROFESSIONAL SUMMARY
            </h1>
            <p className="max-w-full overflow-x-hidden">
              {resumeContext?.resume?.professionalSummary ||
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta hic provident officiis tempora, placeat veniam amet. Voluptatum nobis architecto dicta reprehenderit veritatis doloribus? Voluptates modi dicta ad soluta dignissimos impedit?"}
            </p>
          </div>

          <div className="text-[#5b6b7a] space-y-5">
            <h1 className="font-black text-lg border-b border-[#5b6b7a] w-full">
              WORK HISTORY
            </h1>
            <ul>
              {resumeContext?.workExp?.map((exp, i) => {
                return i === 0 ? (
                  ""
                ) : (
                  <li key={i}>
                    <h1>
                      <span className="font-bold">{exp[0]}</span>, {exp[1]} -{" "}
                      {exp[2]}
                    </h1>
                    <h2 className="text-black font-semibold">{exp[3]}</h2>
                    <ul className="list-disc">
                      <li>{exp[4]}</li>
                      <li>{exp[5]}</li>
                      <li>{exp[6]}</li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="bg-[#5b6b7a] space-y-5 text-white pr-10 py-10">
          <div className="space-y-5 pl-5 mb-10">
            <p className="flex items-center space-x-3">
              <MapPinIcon className="w-6 rounded-full bg-white text-[#5b6b7a] p-[3px]" />
              <span>
                {resumeContext?.resume?.location || "Atlanta, GA 30301"}
              </span>
            </p>
            <p className="flex items-center space-x-3">
              <PhoneIcon className="w-6 rounded-full bg-white text-[#5b6b7a] p-[3px]" />
              <span>{resumeContext?.resume?.phone || "(555) 555-5555"}</span>
            </p>
            <p className="flex items-center space-x-3">
              <EnvelopeIcon className="w-6 rounded-full bg-white text-[#5b6b7a] p-[3px]" />
              <span className="text-sm overflow-x-hidden">
                {resumeContext?.resume?.email || "example@example.com"}
              </span>
            </p>
          </div>

          {/* SKILLS */}
          <div className="space-y-5">
            <div className="border-b">
              <h1 className="font-bold text-lg px-5">SKILLS</h1>
            </div>
            <ul className="ml-10 list-disc">
              {resumeContext?.skills?.map((skill, i) => {
                return i === 0 ? "" : <li key={skill}>{skill}</li>;
              })}
            </ul>
          </div>

          {/* EDUCATION */}
          <div className="space-y-5">
            <div className="border-b">
              <h1 className="font-bold text-lg px-5">EDUCATION</h1>
            </div>
            <ul className="ml-10 list-disc">
              {resumeContext?.Education?.map((education, i) => {
                return i === 0 ? (
                  ""
                ) : (
                  <li key={education[1] + education[0]}>
                    <p className="font-bold">{education[0]}</p>{" "}
                    <p className="font-light text-sm">{education[1]}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* AFFILIATIONS */}
          <div className="space-y-5">
            <div className="border-b">
              <h1 className="font-bold text-lg px-5">AFFILIATIONS</h1>
            </div>
            <ul className="ml-10 list-disc">
              {resumeContext?.Affiliations?.map((affiliation, i) => {
                return i === 0 ? "" : <li key={affiliation}>{affiliation}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
