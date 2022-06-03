import './Pagination.css';
import { useAppSelector } from '../../features/store';

function Pagination() {

    //decomposicao
    const { currentPage } = useAppSelector(state => state.portfolioReducer);

    return (
        <nav className="container__pagination">
            <ul>
                <a href='#homepage'><li className={`pagination__list--item ${currentPage === 'home' ? 'active' : ''}`}></li></a>
                <a href='#aboutpage'><li className={`pagination__list--item ${currentPage === 'about' ? 'active' : ''}`}></li></a>
                <a href='#resumepage'><li className={`pagination__list--item ${currentPage === 'resume' ? 'active' : ''}`}></li></a>
                <a href='#portfoliopage'><li className={`pagination__list--item ${currentPage === 'portfolio' ? 'active' : ''}`}></li></a>
                <a href='#contactpage'><li className={`pagination__list--item ${currentPage === 'contact' ? 'active' : ''}`}></li></a>
            </ul>
        </nav>
    );
}

export default Pagination;