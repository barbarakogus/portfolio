import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className='container--copyright'>
                <img className='footer--icon' src="https://img.icons8.com/fluency-systems-regular/48/ffffff/creative-commons-all-rights-reserved.png" alt='copyright' />
                <p className='footer--text'>Bárbara 2022</p>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/barbarakogus/'>
                    <img className='footer--icon' src="https://img.icons8.com/material-outlined/24/ffffff/linkedin--v1.png" alt='Go to Linkedin page' />
                </a>
                <a href='https://github.com/barbarakogus'>
                    <img className='footer--icon' src="https://img.icons8.com/material-outlined/24/ffffff/github.png" alt='Go to gitHub page' />
                </a>
            </div>
        </div>
    );
}

export default Footer;
