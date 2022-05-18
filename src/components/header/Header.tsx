import './Header.css';

function Header() {
    return (
        <>
            <div className="header">
                <h1 className='hearder--title'>Bárbara Kógus</h1>
                <nav className='header__navigation'>
                    <a href='#homepage' className='header__anchor'>Home</a>
                    <a href='#aboutpage' className='header__anchor'>About</a>
                    <a href='#resumepage' className='header__anchor'>Resume</a>
                    <a href='#portfoliopage' className='header__anchor'>Portfolio</a>
                    <a href='#contactpage' className='header__anchor'>Contact</a>
                </nav>
            </div>
        </>
    );
}

export default Header;