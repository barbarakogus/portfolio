import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="header">
                <h1 className='hearder--title'>Bárbara Kógus</h1>
                <nav className='header__navigation'>
                    <Link className='header__anchor' to="/">Home</Link>
                    <Link className='header__anchor' to="about">About</Link>
                    <Link className='header__anchor' to="resume">Resume</Link>
                    {/* <a href='#homePage' className='header__anchor'>Home</a>
                    <a href='#aboutPage' className='header__anchor'>About</a>
                    <a href='#resumePage' className='header__anchor'>Resume</a>
                    <a href='#portfolioPage' className='header__anchor'>Portfolio</a>
                    <a href='#contactPage' className='header__anchor'>Contact</a> */}
                </nav>
            </div>
        </>
    );
}

export default Header;