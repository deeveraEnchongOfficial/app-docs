import React from "react";
import { CSSProperties } from "react";

const modalContentWrapperStyle: CSSProperties = {
  padding: "2rem", // Increase padding for larger size
  backgroundColor: "#ffffff", // Equivalent to bg-white in Tailwind
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Equivalent to shadow-lg in Tailwind
  borderRadius: "1rem", // Increase border radius for a rounded appearance
  width: "70%", // Set width to 70% of the viewport width
  maxWidth: "500px", // Set maximum width to 500px
  position: "fixed", // Position the modal fixedly
  top: "50%", // Align the top edge of the modal to the vertical center of the viewport
  left: "50%", // Align the left edge of the modal to the horizontal center of the viewport
  transform: "translate(-50%, -50%)", // Translate the modal by -50% of its own width and height, effectively centering it
};

const closeButtonStyle: CSSProperties = {
  position: "absolute",
  top: "0.1rem",
  right: "0.7rem",
  fontSize: "1.5rem",
  cursor: "pointer",
  color: "#000000", // Adjust color as needed
  border: "none",
  background: "none",
};

const ModalContentWrapper = ({ children, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div style={modalContentWrapperStyle}>
      {/* Close button */}
      <button style={closeButtonStyle} onClick={handleClose}>
        &times;
      </button>
      {children}
    </div>
  );
};

export default ModalContentWrapper;
