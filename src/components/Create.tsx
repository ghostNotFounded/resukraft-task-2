import Resume from "./Resume";
import Name from "../formComponents/Name";
import { useRef, useState } from "react";
import ProfessionalSummary from "../formComponents/ProfessionalSummary";
import WorkHistory from "../formComponents/WorkHistory";
import Skills from "../formComponents/Skills";
import Education from "../formComponents/Education";
import Contacts from "../formComponents/Contacts";
import Affiliations from "../formComponents/Affliations";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Create = () => {
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <Name />;
    } else if (page === 1) {
      return <ProfessionalSummary />;
    } else if (page === 2) {
      return <WorkHistory />;
    } else if (page === 3) {
      return <Contacts />;
    } else if (page === 4) {
      return <Skills />;
    } else if (page === 5) {
      return <Education />;
    } else if (page === 6) {
      return <Affiliations />;
    }
  };

  const pdfRef = useRef(null);
  const downloadPDF = () => {
    const input = pdfRef.current;
    // @ts-ignore
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      console.log(ratio);

      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("resume.pdf");
    });
  };

  return (
    <section className="flex md:flex-row flex-col w-full">
      <div className="w-1/2 drop-shadow-xl flex flex-col items-center space-y-5 py-3">
        <div ref={pdfRef} className="h-screen">
          <Resume />
        </div>
        <button
          className="px-6 py-2 bg-customBlue text-white rounded-lg"
          onClick={downloadPDF}
        >
          Download Resume
        </button>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center space-y-5">
        {PageDisplay()}
        <div className="flex justify-between w-[600px]">
          <button
            className="bg-customBlue rounded-lg px-6 py-2 text-white hover:scale-95 duration-300 hover:opacity-80"
            onClick={() => setPage((currPage) => currPage - 1)}
            disabled={page === 0}
          >
            <p>&#8592; Prev</p>
          </button>
          <button
            className="bg-customBlue rounded-lg px-6 py-2 text-white hover:scale-95 duration-300 hover:opacity-80"
            onClick={() => setPage((currPage) => currPage + 1)}
            disabled={page === 6}
          >
            <p>Next &#8594;</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Create;
