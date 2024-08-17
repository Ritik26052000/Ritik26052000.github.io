import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setWid] = useState(window.innerWidth);

  const handleResize = () => {
    setWid(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='resume-section'>
      <Document file={pdf} className="resume-view">
        <Page pageNumber={1} scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} />
      </Document>

      <a href={pdf} target='_blank' rel='noopener noreferrer' download="Ritik_Sonwani_Resume.pdf">
        <button className='download-cv' type='button'>
          <h3><BsDownload />&nbsp; Download CV</h3>
        </button>
      </a>
    </div>
  );
}

export default Resume;
