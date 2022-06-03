import { useEffect, useState } from 'react';
import './Header.css';
import BurguerMenu from '../burguerMenu/BurguerMenu';
import { useAppSelector } from '../../features/store';

function Header() {

    const { currentPage } = useAppSelector(state => state.portfolioReducer);

    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    };

    useEffect(() => {
        window.addEventListener('resize', setDimension);
        return (() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize]);

    return (
        <>
            <div className="header">
                <h1 className='hearder--title'>Bárbara Kógus</h1>
                {screenSize.dynamicWidth < 768 ? <BurguerMenu /> :
                    <nav className='header__navigation'>
                        <a href='#home' className={`header__anchor ${currentPage === 'home' ? 'active' : ''}`}>Home</a>
                        <a href='#about' className={`header__anchor ${currentPage === 'about' ? 'active' : ''}`}>About</a>
                        <a href='#resume' className={`header__anchor ${currentPage === 'resume' ? 'active' : ''}`}>Resume</a>
                        <a href='#portfolio' className={`header__anchor ${currentPage === 'portfolio' ? 'active' : ''}`}>Portfolio</a>
                        <a href='#contact' className={`header__anchor ${currentPage === 'contact' ? 'active' : ''}`}>Contact</a>
                    </nav>
                }
            </div>
        </>
    );
}

export default Header;