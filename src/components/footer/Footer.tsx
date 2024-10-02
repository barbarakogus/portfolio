import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className='container--copyright'>
                <img className='footer--icon' src="https://img.icons8.com/fluency-systems-regular/48/ffffff/creative-commons-all-rights-reserved.png" alt='copyright' />
                <p className='footer--text'>Bárbara 2024</p>
                <a className='icon8' target="_blank" href="https://icons8.com" rel="noreferrer">icon by Icons8</a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/barbarakogus/' target='_blank'>
                    <img className='footer--icon' id='linkedin' src="https://img.icons8.com/material-outlined/24/ffffff/linkedin--v1.png" alt='Go to Linkedin page' />
                </a>
                <a href='https://github.com/barbarakogus' target='_blank'>
                    <img className='footer--icon' src="https://img.icons8.com/material-outlined/24/ffffff/github.png" alt='Go to gitHub page' />
                </a>
            </div>
        </div>
    );
}

export default Footer;
