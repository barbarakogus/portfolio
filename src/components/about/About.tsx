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
  }, [dispatch, isVisible]);

  return (
    <div id='about' className="container__about" >
      <h2 className="container__about--title">About</h2>
      <hr className='container__about--line'></hr>
      <div className="container__about--content">
        <section ref={ref} className='description__about'>
          <p>I'm a Brazilian living in Stockholm. I recently discovered myself as a developer, but I used to be a forestry engineer before. I remain passionate about the environment, but now I redirect my curiosity to find a new way to build a better world with technology. </p>
          <p>I started my journey with programming by studying <span className='contrast'>Front-end</span> as a self-learner. Then, one year later, I received a proposal to learn how to develop Android applications. A new window had opened, my skills were improved, and I learned a new language, <span className='contrast'>Kotlin</span>. So, in January 2022, I joined Salt, and with the instructors, I deepened my knowledge in development, learning new topics like TDD, Typescript, Node, and MOB, which led me to become a <span className='contrast'>Full-Stack developer</span>.</p>
        </section>
        <section className='content__about'>
          <p className='content__about--title'>Technologies</p>
          <div className='content__about--icon'>
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="javaScript" />
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/typescript.png" alt="Typescript" />
            <img className='about--icon' width={50} src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" />
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/react-native.png" alt="React Native" />
            <img className='about--icon' src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/undefined/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-color-tal-revivo.png" alt="redux" />
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/kotlin.png" alt="Kotlin" />
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/android-os.png" alt="Android" />
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDb" />
            <img className='about--icon' src="https://img.icons8.com/color/48/000000/postgreesql.png" alt="PostgreesSql" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;