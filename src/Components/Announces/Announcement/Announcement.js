import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import announce from "../../../Assets/PDF/announce.pdf";
import arrowLeft from "../../../Assets/Icons/arrow-left.svg";
import arrowRight from "../../../Assets/Icons/arrow-right.svg";

//scss
import "./scss/announcement.scss";

const Announcement = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePageNumber = (id) => {
    id === -1
      ? pageNumber > 1 && setPageNumber(pageNumber - 1)
      : pageNumber < numPages && setPageNumber(pageNumber + 1);
  };

  return (
    <div className="announcement--container">
      <img
        src={arrowLeft}
        alt="Previous Page"
        onClick={() => (window.location = "/announces")}
      />
      <Document
        file={announce}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="announcement--buttons">
        <img
          src={arrowLeft}
          alt="Previous Page"
          onClick={() => changePageNumber(-1)}
        />
        <p style={{ fontSize: "18px", margin: "0px" }}>
          Page {pageNumber} of {numPages}
        </p>
        <img
          src={arrowRight}
          alt="Next Page"
          onClick={() => changePageNumber(1)}
        />
      </div>
    </div>
  );
};

export default Announcement;
