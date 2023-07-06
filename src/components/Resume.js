import React, { useEffect, useState } from "react";
// import pdf from "../assests/Ankit Kokane(Resume).pdf"
import { AiOutlineDownload } from "react-icons/ai";
import { Document,Page } from "react-pdf";

const pdf =
  "https://github.com/thedudeontitan/thedudeontitan.github.io/blob/024584e04217510d23d66adf5d103bbf8bac5fa1/src/assests/Ankit%20Kokane(Resume).pdf";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);


  return (
    <section>
      <div className="flex flex-col h-screen md:h-auto items-center ">
        <button className="mt-24 lg:mt-32 w-52 text-lg bg-primary mx-5 py-2 rounded-sm hover:bg-highlight">
          <a href={pdf} className="flex flex-row items-center justify-center">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </a>
        </button>
        <div className="mt-5 lg:mt-24 mb-24">
          {/* <Document file={pdf} className="flex justify-center">
                <Page pageNumber={1} scale={width > 786 ? 1.8 : 0.6} />
              </Document> */}
          <Document file="../assests/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </section>
  );
}

export default Resume;
