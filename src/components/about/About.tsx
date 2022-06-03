import './About.css';
import { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../features/portfolioSlice';

function About() {

  const dispatch = useDispatch();

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      dispatch(setCurrentPage('about'));
    }
  }, [isVisible]);

  return (
    <div id='about' className="container__about" >
      <h2 className="container__about--title">About</h2>
      <hr className='container__about--line'></hr>
      <div className="container__about--content">
        <section ref={ref} className='description__about'>
          <p>I'm a Brazilian living in Stockholm. I recently discovered myself as a developer, but I used to be a forestry engineer before. I remain passionate about the environment, but now I redirect my curiosity to find a new way to build a better world with technology. </p>
          <p>I started my journey with programming by studying <span className='contrast'>Front-end</span> as a self-learner. Then, one year after, I received a proposal to learn the development of Android applications. A new window had opened at this time, my skills were improved, and I learned a new language, <span className='contrast'>Kotlin</span>. So, in January 2022, I joined Salt, and with the instructors, I deepened my knowledge in development, learning new topics like TDD, Typescript, Node, and MOB, which led me to become a <span className='contrast'>Full-Stack developer</span>.</p>
        </section>
        <section className='content__about'>
          <p className='content__about--title'>Technologies</p>
          <div className='content__about--icon'>
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/typescript.png" />
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/nodejs.png" />
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/react-native.png" />
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/redux.png" />
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/kotlin.png" />
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/android-os.png" />
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/mongodb.png" />
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/postgreesql.png" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;