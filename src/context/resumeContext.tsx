import { useState, createContext } from "react";

export type ResumeInfo = {
  name: string | undefined;
  professionalSummary: string | undefined;
  location: string | undefined;
  phone: number | undefined;
  email: string | undefined;
};

type resumeContextType = {
  resume: ResumeInfo | null;
  setResume: React.Dispatch<React.SetStateAction<ResumeInfo | null>>;
  skills: string[];
  setSkills: React.Dispatch<React.SetStateAction<string[]>>;
  Affiliations: string[];
  setAffiliations: React.Dispatch<React.SetStateAction<string[]>>;
  Education: string[][];
  setEducation: React.Dispatch<React.SetStateAction<string[][]>>;
  workExp: (string | string[])[][];
  setWorkExp: React.Dispatch<React.SetStateAction<(string | string[])[][]>>;
};

type ResumeContextProviderProps = {
  children: React.ReactNode;
};

export const ResumeContext = createContext<resumeContextType | null>(null);

export const ResumeContextProvider = ({
  children,
}: ResumeContextProviderProps) => {
  const [resume, setResume] = useState<ResumeInfo | null>(null);
  const [workExp, setWorkExp] = useState([["", "", "", "", ["", "", ""]]]);
  const [skills, setSkills] = useState([""]);
  const [Affiliations, setAffiliations] = useState([""]);
  const [Education, setEducation] = useState([["", ""]]);
  return (
    <ResumeContext.Provider
      value={{
        resume,
        setResume,
        workExp,
        setWorkExp,
        skills,
        setSkills,
        Affiliations,
        setAffiliations,
        Education,
        setEducation,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
