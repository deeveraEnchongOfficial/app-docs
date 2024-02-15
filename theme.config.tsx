import React, { useState, useEffect, ChangeEvent } from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import ModalContentWrapper from "./components/ModalContentWrapper";

const MyLogo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Event handler for closing the modal
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    localStorage.setItem('submittedValue', e.target.value);
  };

  useEffect(() => {
    const value = localStorage.getItem('submittedValue');
    if (value) {
      setInputValue(value);
    }
  }, []);

  return (
    <>
      <div
        onClick={handleModal}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
          />
        </svg>
        <span style={{ marginLeft: ".4em", fontWeight: 800 }}>
          My Cool Project
        </span>
      </div>
      {isModalOpen && (
        <ModalContentWrapper onClose={handleModal}>
          {/* Add your modal content here */}
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            style={{
              display: "block",
              width: "100%",
              border: "1px solid #D1D5DB", // Equivalent to border-gray-300 in Tailwind
              borderRadius: "0.375rem", // Equivalent to rounded-md in Tailwind
              boxShadow:
                "0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)", // Equivalent to shadow-sm in Tailwind
              outline: "0",
              transition:
                "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out", // Equivalent to focus:ring-blue-500 and focus:border-blue-500 in Tailwind
            }}
          />
        </ModalContentWrapper>
      )}
    </>
  );
};

const config: DocsThemeConfig = {
  logo: <MyLogo />,
  logoLink: "#",
  docsRepositoryBase: "https://github.com/deeveraEnchongOfficial/app-doc",
  footer: {
    text: "Nextra Docs",
  },
};

export default config;
