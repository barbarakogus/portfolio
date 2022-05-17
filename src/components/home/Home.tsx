import './Home.css';
import profileImg from '../../assets/img/profile.png';

function Home() {
    return (
        <div id='homePage' className="container__home">
            <section className='container__home--content'>
                <h1 className='content--text'>Welcome to my website, <br />
                I'm <span  className='content--text--title'>Bárbara Kógus</span> <br />
                Full-stack JS developer
                </h1>
            </section>
            <section className='container__home--img'>
                <img className='container__home--img' src={profileImg} />
            </section>
        </div>
    );
}

export default Home;