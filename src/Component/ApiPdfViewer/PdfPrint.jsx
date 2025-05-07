import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { resetCroDocument } from '../../Redux/Reducer/Cro_Slice';
import { Document, Page, pdfjs } from 'react-pdf';
import { RiDownloadCloud2Fill } from "react-icons/ri";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfPrint() {
  const dispatch = useDispatch();
  const { pdfSrc, fileName } = useSelector((state) => state.croSlice);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openCroModal = () => {
    dispatch({
      type: 'cro/loadCroDocument',
      payload: {
        croNumber: '4601425',
        id: 'd19a5fdc-ad6a-4f4d-8b3b-61475e7e95ae',
        baseUrl: 'https://hastin-container.com/staging/',
      }
    });
  };

  useEffect(() => {
    if (pdfSrc) {
      setModalIsOpen(true);
    }
  }, [pdfSrc]);

  const closeModal = () => {
    setModalIsOpen(false);
    dispatch(resetCroDocument());
  };

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdfSrc;
    link.download = `${fileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>

      <div className="d-flex justify-content-center align-items-center" style={{ height: '63vh' }}>
        <motion.button
          className="btn d-flex fw-bold text-light justify-content-center align-items-center"
          style={{ backgroundColor: '#5BA4E5', padding: '12px 24px', fontSize: '1.1rem', borderRadius: '10px' }}
          onClick={openCroModal}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelopeOpenText size={20} className="me-2" /> Print CRO
        </motion.button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="CRO PDF Modal"
        style={{ content: { width: '62.5%', margin: 'auto' } }}
      >
        <div className="modal-header d-flex justify-content-between align-items-center">
          <h5 className="modal-title ms-3">{fileName}</h5>
          <div>
            <button className="btn text-light fw-bold mr-2" style={{ backgroundColor: '#5BA4E5' }} onClick={downloadPdf}>
              <RiDownloadCloud2Fill size={20} className="mb-1" /> Download
            </button>
            <button type="button" className="btn ms-2 mb-5 fw-bold" aria-label="Close" onClick={closeModal} style={{ color: "#2C3D5C" }}>
              {/* <span aria-hidden="true">&times;</span> */}
              <IoClose size={20} style={{ color: "#2C3D5C" }} />
            </button>
          </div>
        </div>

        <div className="modal-body mt-1" style={{ height: '600px' }}>
          {pdfSrc ? (
            <Document file={pdfSrc}>
              <Page pageNumber={1} width={800}
                renderTextLayer={false}
                renderAnnotationLayer={false} />
            </Document>
          ) : (
            <p>Loading PDF...</p>
          )}
        </div>
      </Modal>
    </>
  );
}

export default PdfPrint;
