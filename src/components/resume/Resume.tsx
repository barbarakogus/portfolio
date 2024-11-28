import "./Resume.css";
import { useEffect, useState } from "react";
import Timeline from "../timeline/Timeline";
import TimelineMobile from "../timelineMobile/TimelineMobile";

const resumes: Resume[] = [
  {
    title: "Bachelor of Forest Engineering",
    description: "Santa Catarina State University UDESC-CAV",
    date: "2007 - 2011",
  },
  {
    title: "MBA in auditing, expertise, and environmental Management",
    description: "IPOG",
    date: "2014 - 2016",
  },
  {
    title: "Coordinator of Graphic Editing of Real Estate Lot",
    description: "Geomais Geotechnology",
    date: "2013 - 2018",
  },
  {
    title: "Front-end career",
    description: "Alura",
    date: "2019 - 2020",
  },
  {
    title: "Development Android",
    description: "Alura",
    date: "2020 - 2021",
  },
  {
    title: "Full-stack JavaScript developer",
    description: "School of applied technology </salt>",
    date: "2022 - 2023",
  },
  {
    title: "Front-end consultant",
    description: "Noterat.io",
    date: "2023 - 2023",
  },
  {
    title: "Front-end developer",
    description: "Cling Systems",
    date: "2023 - 2024",
  },
];

function Resume() {
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

  return (
    <div className="container__resume">
      <h2 className="container__resume--title">Resume</h2>
      <hr className="container__resume--line"></hr>

      {screenSize.dynamicWidth < 768 ? (
        <TimelineMobile resumes={resumes} />
      ) : (
        <Timeline resumes={resumes} />
      )}
      <a
        href="https://storage.googleapis.com/portfolio_bk/barbaraKogus_cv_new_layout.pdf"
        className="container__resume--btn-dowloadCV"
        download
        target="_blank"
        rel="noreferrer"
      >
        Dowload Resume
      </a>
    </div>
  );
}

export default Resume;
