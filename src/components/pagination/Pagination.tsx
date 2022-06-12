import './Pagination.css';
import { useAppSelector } from '../../features/store';

function Pagination() {

    //decomposicao
    const { currentPage } = useAppSelector(state => state.portfolioReducer);

    return (
        <nav className="container__pagination">
            <ul>
                <a href='#home'><li className={`pagination__list--item ${currentPage === 'home' ? 'active' : ''}`}></li></a>
                <a href='#about'><li className={`pagination__list--item ${currentPage === 'about' ? 'active' : ''}`}></li></a>
                <a href='#resume'><li className={`pagination__list--item ${currentPage === 'resume' ? 'active' : ''}`}></li></a>
                <a href='#portfolio'><li className={`pagination__list--item ${currentPage === 'portfolio' ? 'active' : ''}`}></li></a>
                <a href='#contact'><li className={`pagination__list--item ${currentPage === 'contact' ? 'active' : ''}`}></li></a>
            </ul>
        </nav>
    );
}

export default Pagination;