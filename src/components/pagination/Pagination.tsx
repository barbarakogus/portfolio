import { NavigationLink } from "../../App";
import "./Pagination.css";

type Pagination = {
  activeSection: NavigationLink;
  onNavigate: (section: NavigationLink) => void;
  links: NavigationLink[];
};

function Pagination({ activeSection, onNavigate, links }: Pagination) {
  return (
    <nav className="container__pagination">
      <ul>
        {links.map((link, index) => (
          <a
            key={`${link}-${index}`}
            href={`#${link}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(link);
            }}
          >
            <li
              className={`pagination__list--item ${
                activeSection === link ? "active" : ""
              }`}
            ></li>
          </a>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
