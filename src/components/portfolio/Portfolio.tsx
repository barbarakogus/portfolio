import "./Portfolio.css";
import CardPortfolio from "../cardPortfolio/CardPortfolio";

const projects: Project[] = [
  {
    title: "Karta",
    description:
      "Open source project to visualize and manage dependencies across repositories within your project.",
    technologies: "Next.js - Tailwind - TypeScript - React flow",
    img: "https://storage.googleapis.com/portfolio_bk/img_portfolio/karta-app.png",
    gitLink: "https://github.com/KartaRocky/karta",
    projectLink: "",
    // projectLink: "https://karta.barbarakogus.com/",
  },
  {
    title: "Bioprice",
    description: "Freelance project - App to analyze data related to medicine prices based on commercial transactions.",
    technologies: "React - TypeScript - Styled-components",
    img: "https://storage.googleapis.com/portfolio_bk/img_portfolio/bioprice.png",
    gitLink: "",
    projectLink: "https://bioprice.com.br",
  },
  {
    title: "Ubiquiti",
    description: "Replicate the layout where the goal was to show data dynamically as a list and as a grid.",
    technologies: "React - TypeScript - Styled-components - Redux",
    img: "https://storage.googleapis.com/portfolio_bk/img_portfolio/ubiquiti.png",
    gitLink: "https://github.com/barbarakogus/ubiquiti",
    projectLink: "https://ubiquiti-7j7z7bw6xa-lz.a.run.app/",
  },
  {
    title: "Boardkut",
    description:
      "Hackaday Salt project - App to manipulate data about boardgames.",
    technologies: "React - Redux - Docker - PostGres",
    img: "https://storage.googleapis.com/portfolio_bk/img_portfolio/boardkut.png",
    gitLink: "https://github.com/barbarakogus/boardkut_frontend",
    projectLink: "",
    // projectLink: "https://boardkut.vercel.app/",
  },
  {
    title: "Todo List",
    description: "An app to add and delete items from a todo list.",
    technologies: "React - Redux/Toolkit - TypeScript",
    img: "https://storage.googleapis.com/portfolio_bk/img_portfolio/react_todoList.png",
    gitLink: "",
    projectLink: "https://boardkut.herokuapp.com/",
  },
  {
    title: "ByteBank",
    description: "App to start working with object-oriented.",
    technologies: "Android - Kotlin - RecyclerView",
    img: "https://storage.googleapis.com/portfolio_bk/img_portfolio/byteBank_mobile_original.png",
    gitLink: "https://github.com/barbarakogus/mobile_byteBank",
    projectLink: "",
  },
  {
    title: "Album finder",
    description:
      "An app to find all albums and lyrics from your favorite singer.",
    technologies: "Android - Kotlin - Retrofit - RecyclerView",
    img: "https://storage.googleapis.com/portfolio_bk/img_portfolio/searchAlbums_mobile_original.png",
    gitLink: "https://github.com/barbarakogus/albums-search",
    projectLink: "",
  },
  {
    title: "My Private Chef",
    description:
      "Salt final project - App to book a chef to prepare meals for you and your family.",
    technologies: "React - Redux - TypeScript - MongoDB",
    img: "https://storage.googleapis.com/portfolio_bk/img_portfolio/myPrivateChef_home.png",
    gitLink: "https://github.com/theAliensAlliance",
    projectLink: "",
  },
  {
    title: "Dog Sitter",
    description:
      "My first website. I built it to share my work as a dog sitter and also to practice what I had learned about front end.",
    technologies: "HTML - CSS - JavaScript",
    img: "https://storage.googleapis.com/portfolio_bk/img_portfolio/dogssiter_home.png",
    gitLink: "https://github.com/barbarakogus/dogsitter",
    projectLink: "",
  },
];

function Portfolio() {
  return (
    <div className="container__portfolio">
      <h2 className="container__portfolio--title">My projects</h2>
      <hr className="container__portfolio--line"></hr>
      <div className="container__portfolio__cards">
        {projects.map((project, key) => (
          <CardPortfolio key={key} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
