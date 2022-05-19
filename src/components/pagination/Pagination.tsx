import './Pagination.css';
import { useEffect } from 'react';
import { useLocation } from '../../hooks/useLocation';

function Pagination() {

    const location = useLocation();

    useEffect(() => {
        console.log('2', location.hash);
    }, [location])

    return (
        <nav className="container__pagination">
            <ul>
                <a href='#homepage'><li className={`pagination__list--item ${location.hash === '#homepage' ? 'active' : ''}`}></li></a>
                <a href='#aboutpage'><li className={`pagination__list--item ${location.hash === '#aboutpage' ? 'active' : ''}`}></li></a>
                <a href='#resumepage'><li className={`pagination__list--item ${location.hash === '#resumepage' ? 'active' : ''}`}></li></a>
                <a href='#portfoliopage'><li className={`pagination__list--item ${location.hash === '#portfoliopage' ? 'active' : ''}`}></li></a>
                <a href='#contactpage'><li className={`pagination__list--item ${location.hash === '#contactpage' ? 'active' : ''}`}></li></a>
            </ul>
        </nav>
    );
}

export default Pagination;