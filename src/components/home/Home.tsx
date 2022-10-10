import './Home.css';
import profileImg from '../../assets/img/barbara_portfolio.jpg';
import { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../features/portfolioSlice';

function Home() {

    const dispatch = useDispatch();

    const ref = useRef() as React.MutableRefObject<HTMLDivElement>
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            dispatch(setCurrentPage('home'));
        }
    }, [isVisible]);

    return (
        <div id='home' className="container__home">
            <section ref={ref} className='container__home--content'>
                <h1 className='content--text'>Welcome to my website, <br />
                    I am <span className='content--text--title'>Bárbara Kógus</span> <br />
                    Full-stack JavaScript developer
                </h1>
            </section>
            <section className='container__home--img'>
                <img className='home--img' src={profileImg} />
            </section>
        </div>
    );
}

export default Home;