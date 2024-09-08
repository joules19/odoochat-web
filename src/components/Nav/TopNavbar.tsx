import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import LogoIcon from "../../assets/svg/Logo";

// Assets


export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <div className="flex flex-col gap-4 w-full justify-center items-center">
        <LogoIcon props="100" className="logo" />
        <h1 className="font-semibold text-4xl text-green">
          OdooChat <span className="italics text-base"> Powered by ChatGpt</span>
        </h1>
      </div>
    </>
  );
}
