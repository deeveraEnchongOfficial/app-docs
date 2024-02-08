import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  docsRepositoryBase: "https://github.com/deeveraEnchongOfficial/app-doc",
  footer: {
    // component: ({ menu }) => {
    //   const [isModalOpen, setIsModalOpen] = useState(false);

    //   const handleOpenModal = () => {
    //     setIsModalOpen(true);
    //   };

    //   const handleCloseModal = () => {
    //     setIsModalOpen(false);
    //   };

    //   const handleSubmit = (value: string) => {
    //     console.log("Submitted value:", value);
    //   };

    //   const footerStyle: React.CSSProperties = {
    //     backgroundColor: "#ffffff",
    //     borderRadius: "0.5rem",
    //     boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    //     margin: "1rem 0.5rem",
    //   };

    //   const textStyle: React.CSSProperties = {
    //     fontSize: "0.875rem",
    //     lineHeight: "1.25rem",
    //     color: "#4b5563",
    //     textAlign: "center",
    //   };


    //   return (
    //     <footer style={footerStyle}>
    //       <div className="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
    //         <span style={textStyle}>© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    //         <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
    //           <li>
    //             <a href="#" className="hover:underline me-4 md:me-6">About</a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:underline">Contact</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </footer>
    //   );
    // },
    text: "Nextra Docs",
  },
};

export default config;
