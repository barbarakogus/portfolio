import './Portfolio.css';
import { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import CardPortfolio from '../cardPortfolio/CardPortfolio';
import { setCurrentPage } from '../../features/portfolioSlice';
import { useDispatch } from 'react-redux';

const projects: Project[] = [
    {
        title: 'Boardkut',
        description: 'Hackaday Salt project - App to manipulate data about boardgames.',
        technologies: 'React - Redux - Docker - PostGres',
        img: 'https://storage.googleapis.com/portfolio_bk/img_portfolio/boardkut.png',
        gitLink: 'https://github.com/barbarakogus/boardkut_frontend',
        projectLink: 'https://boardkut.herokuapp.com/'
    },
    {
        title: 'Todo List',
        description: 'An app to add and delete items from a todo list.',
        technologies: 'React - Redux/Toolkit - TypeScript',
        img: 'https://storage.googleapis.com/portfolio_bk/img_portfolio/react_todoList.png',
        gitLink: '',
        projectLink: 'https://boardkut.herokuapp.com/'
    },
    {
        title: 'ByteBank',
        description: 'App to start working with object-oriented.',
        technologies: 'Android - Kotlin - RecyclerView',
        img: 'https://storage.googleapis.com/portfolio_bk/img_portfolio/byteBank_mobile_original.png',
        gitLink: 'https://github.com/barbarakogus/mobile_byteBank',
        projectLink: ''
    },
    {
        title: 'Album finder',
        description: 'An app to find all albums and lyrics from your favorite singer.',
        technologies: 'Android - Kotlin - Retrofit - RecyclerView',
        img: 'https://storage.googleapis.com/portfolio_bk/img_portfolio/searchAlbums_mobile_original.png',
        gitLink: 'https://github.com/barbarakogus/albums-search',
        projectLink: ''
    },
    {
        title: 'My Private Chef',
        description: 'Salt final project - App to book a chef to prepare meals for you and your family.',
        technologies: 'React - Redux - TypeScript - MongoDB',
        img: 'https://storage.googleapis.com/portfolio_bk/img_portfolio/myPrivateChef_home.png',
        gitLink: 'https://github.com/theAliensAlliance',
        projectLink: 'https://myprivatechef.herokuapp.com/'
    },
    {
        title: 'Dog Sitter',
        description: 'My first website. I built it to share my work as a dog sitter and also to practice what I had learned about front end.',
        technologies: 'HTML - CSS - JavaScript',
        img: 'https://storage.googleapis.com/portfolio_bk/img_portfolio/dogssiter_home.png',
        gitLink: 'https://github.com/barbarakogus/dogsitter',
        projectLink: ''
    }
]

function Portfolio() {

    const dispatch = useDispatch();

    const ref = useRef() as React.MutableRefObject<HTMLDivElement>
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            dispatch(setCurrentPage('portfolio'));
        }
    }, [isVisible]);

    return (
        <div id='portfolio' className="container__portfolio">
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
