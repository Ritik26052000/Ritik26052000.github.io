import React from "react";
import pdf from "../assets/Resume.pdf";
import { CgFileDocument } from "react-icons/cg";

const ResumeButton = () => {
  const handleDownloadAndOpen = () => {
    // Open the PDF in a new tab
    window.open(pdf, "_blank");

    // Create a temporary link to trigger the download
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "RitikSonwani.pdf"; // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownloadAndOpen} className="resume-button">
      <CgFileDocument /> Resume
    </button>
  );
};

export default ResumeButton;
