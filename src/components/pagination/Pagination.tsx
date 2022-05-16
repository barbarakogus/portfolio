import './Pagination.css';

function Pagination() {
  return (
    <div className="container__pagination">
        <ul>
            <li className='pagination__list'>
                <a href='/home'><span className='pagination__list--item'></span></a>
            </li>
        </ul>
        <ul>
            <li className='pagination__list'>
                <a href='/about'><span className='pagination__list--item'></span></a>
            </li>
        </ul>
        <ul>
            <li className='pagination__list'>
                <a href='/resume'><span className='pagination__list--item'></span></a>
            </li>
        </ul>
        <ul>
            <li className='pagination__list'> 
                <a href='/portfolio'><span className='pagination__list--item'></span></a>
            </li>
        </ul>
        <ul>
            <li className='pagination__list'>
                <a href='/contact'><span className='pagination__list--item'></span></a>
            </li>
        </ul>
    </div>
  );
}

export default Pagination;