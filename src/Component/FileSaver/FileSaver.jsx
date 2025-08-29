import React from "react";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import { ImDownload } from "react-icons/im";
// import file from "../Assets/Keerthana Murugaiyan_Resume.pdf";
import file from "../Assets/KeerthanaMurugaiyan_Resume.pdf";

function FileSaver() {
    const handleDownload = () => {
        saveAs(file, "Resume.pdf");
    };

    return (
        <div style={{ margin: 0 }}>
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: '63vh' }}
            >
        
                <motion.div
                    className="position-absolute"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.5, scale: 1.5 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        filter: "blur(40px)",
                    }}
                />

                {/* Actual Button */}
                <motion.button
                    className="text-light fw-bold btn position-relative"
                    style={{
                        backgroundColor: '#293B3C',
                        padding: '10px 20px',
                        fontSize: '1.3rem',
                        borderRadius: "50px",
                        zIndex: 1
                    }}
                    onClick={handleDownload}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <ImDownload size={20} className="me-2 mb-1" />Download PDF
                </motion.button>
            </div>
        </div>
    );
}

export default FileSaver;