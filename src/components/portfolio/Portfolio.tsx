import './Portfolio.css';
import { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import CardPortfolio from '../cardPortfolio/CardPortfolio';

const projects: Project[] = [
    {
        title: 'Boardkut',
        description: 'Hackaday Salt project - App to manipulate data about boardgames.',
        technologies: 'React - Redux - Docker - PostGres',
        img: 'https://storage.googleapis.com/portfolio_bk/images/boardkut.png',
        gitLink: 'https://github.com/barbarakogus/boardkut_frontend',
        projectLink: 'https://boardkut.herokuapp.com/'
    },
    {
        title: 'Boardkut',
        description: 'Hackaday Salt project - App to manipulate data about boardgames.',
        technologies: 'React - Redux - Docker - PostGres',
        img: 'https://storage.googleapis.com/portfolio_bk/images/boardkut.png',
        gitLink: 'https://github.com/barbarakogus/boardkut_frontend',
        projectLink: 'https://boardkut.herokuapp.com/'
    },
    {
        title: 'Boardkut',
        description: 'Hackaday Salt project - App to manipulate data about boardgames.',
        technologies: 'React - Redux - Docker - PostGres',
        img: 'https://storage.googleapis.com/portfolio_bk/images/boardkut.png',
        gitLink: 'https://github.com/barbarakogus/boardkut_frontend',
        projectLink: 'https://boardkut.herokuapp.com/'
    },
    {
        title: 'Boardkut',
        description: 'Hackaday Salt project - App to manipulate data about boardgames.',
        technologies: 'React - Redux - Docker - PostGres',
        img: 'https://storage.googleapis.com/portfolio_bk/images/boardkut.png',
        gitLink: 'https://github.com/barbarakogus/boardkut_frontend',
        projectLink: 'https://boardkut.herokuapp.com/'
    },
]

function Portfolio() {

    const ref = useRef() as React.MutableRefObject<HTMLDivElement>
    const isVisible = useOnScreen(ref);

     useEffect(() => {
        if (isVisible) {
            window.location.hash = '#portfoliopage'
        }
    }, [isVisible]);

    return (
        <div id='portfoliopage' className="container__portfolio">
            <h2 ref={ref} className="container__portfolio--title">My projects</h2>
            <hr className='container__portfolio--line'></hr>
            <div className="container__portfolio__cards">
                {projects.map((project, key) =>
                    <CardPortfolio key={key} project={project} />
                )}
            </div>
        </div>
    );
}

export default Portfolio;
