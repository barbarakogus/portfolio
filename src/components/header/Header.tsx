import { useEffect, useState } from 'react';
import './Header.css';
import { useLocation } from '../../hooks/useLocation';
import BurguerMenu from '../burguerMenu/BurguerMenu';

function Header() {

    const location = useLocation();

    useEffect(() => {
        console.log(location.hash);
    }, [location])

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
                        <a href='#homepage' className={`header__anchor ${location.hash === '#homepage' ? 'active' : ''}`}>Home</a>
                        <a href='#aboutpage' className={`header__anchor ${location.hash === '#aboutpage' ? 'active' : ''}`}>About</a>
                        <a href='#resumepage' className={`header__anchor ${location.hash === '#resumepage' ? 'active' : ''}`}>Resume</a>
                        <a href='#portfoliopage' className={`header__anchor ${location.hash === '#portfoliopage' ? 'active' : ''}`}>Portfolio</a>
                        <a href='#contactpage' className={`header__anchor ${location.hash === '#contactpage' ? 'active' : ''}`}>Contact</a>
                    </nav>
                }
            </div>
        </>
    );
}

export default Header;