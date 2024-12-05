import { useEffect, useState } from "react";
import "./Header.css";
import BurguerMenu from "../burguerMenu/BurguerMenu";
import { NavigationLink } from "../../App";

type Header = {
  onNavigate: (section: NavigationLink) => void;
  activeSection: NavigationLink;
  links: NavigationLink[];
};

function Header({ onNavigate, activeSection, links }: Header) {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const isBgPrimery =
    activeSection === "home" ||
    activeSection === "resume" ||
    activeSection === "contact";

  return (
    <div
      className="header"
      style={{ backgroundColor: isBgPrimery ? "#3a3d41" : "#74757b" }}
    >
      <h1 className="hearder--title">Bárbara Kógus</h1>
      {screenSize.dynamicWidth < 768 ? (
        <BurguerMenu />
      ) : (
        <nav className="header__navigation">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(link);
              }}
              className={`header__anchor ${
                activeSection === link ? "active" : ""
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

export default Header;
