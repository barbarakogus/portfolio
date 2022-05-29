import './Home.css';
import profileImg from '../../assets/img/profile.png';
import { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

function Home() {

    const ref = useRef() as React.MutableRefObject<HTMLDivElement>
    const isVisible = useOnScreen(ref);

    // useEffect(() => {
    //     if (isVisible) {
    //         window.location.hash = '#homepage'
    //     }
    // }, [isVisible]);

    return (
        <div id='homepage' className="container__home">
            <section ref={ref} className='container__home--content'>
                <h1 className='content--text'>Welcome to my website, <br />
                    I'm <span className='content--text--title'>Bárbara Kógus</span> <br />
                    Full-stack JS developer
                </h1>
            </section>
            <section className='container__home--img'>
                <img className='home--img' src={profileImg} />
            </section>
        </div>
    );
}

export default Home;