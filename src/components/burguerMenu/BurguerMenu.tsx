import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';

const style = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '36px',
        left: '1.5rem',
        top: '1.5rem',
    },
    bmBurgerBars: {
        background: 'var(--contrast-area)',
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: 'var(--backgroung--secondary)'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100vh',
        width: '250px',
    },
    bmMenu: {
        background: 'var(--backgroung--primary)',
        padding: '1.5em 0em 1em 0em',
        fontSize: '1.5em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: 'var(--text-color)',
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    bmItem: {
        display: 'inline-block',
        color: 'var(--text-color)',
        textDecoration: 'none',
        padding: '0.3em'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

function BurguerMenu() {

    const [isMenuOpen, setMenuIsOpen] = useState(false);

    const hadleCloseMenu = () => {
        setMenuIsOpen(false);
    };

    const handleStateChange = (state: any) => {
        setMenuIsOpen(state.isOpen);
      };

    return (
        <div >
            <Menu styles={style} isOpen={isMenuOpen} onStateChange={handleStateChange} >
                <a href='#homepage' className='header__anchor' onClick={() => hadleCloseMenu()}>Home</a>
                <a href='#aboutpage' className='header__anchor' onClick={() => hadleCloseMenu()}>About</a>
                <a href='#resumepage' className='header__anchor' onClick={() => hadleCloseMenu()}>Resume</a>
                <a href='#portfoliopage' className='header__anchor' onClick={() => hadleCloseMenu()}>Portfolio</a>
                <a href='#contactpage' className='header__anchor' onClick={() => hadleCloseMenu()}>Contact</a>
            </Menu>
        </div>
    );
};

export default BurguerMenu;