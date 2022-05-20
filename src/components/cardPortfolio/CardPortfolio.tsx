import './CardPortfolio.css';

interface CardPortfolioProps {
    project: Project;
}

function CardPortfolio({ project }: CardPortfolioProps) {

    return (
        <div className="container__cardPortfolio">
            <h3 className="container__cardPortfolio--title">{project.title}</h3>
            <p className="container__cardPortfolio--description">{project.description}</p>
            <p className="container__cardPortfolio--technologies">{project.technologies}</p>
            <img className="container__cardPortfolio--img" src={project.img}></img>
            <div className="container__cardPortfolio--links">
                <a className="cardPortfolio--anchor-left" target='_blank' href={project.projectLink}>Live</a>
                <a className="cardPortfolio--anchor-right" target='_blank' href={project.gitLink}>GitHub</a>
            </div>
        </div>
    );
}

export default CardPortfolio;
