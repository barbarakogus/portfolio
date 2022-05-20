import './About.css';
import { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

function About() {

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      window.location.hash = '#aboutpage'
    }
  }, [isVisible]);

  return (
    <div id='aboutpage' className="container__about" >
      <h2 className="container__about--title">About</h2>
      <hr className='container__about--line'></hr>
      <div className="container__about--content">
        <section ref={ref} className='description__about'>
          <p>Lorem ipsum dolor sit amet. A repudiandae quos est nobis ipsum et saepe nobis. Qui exercitationem facere est internos voluptates aut quam consequatur quo nulla repellat qui vero velit qui dolorem omnis. Et quos voluptatibus sit dolor distinctio et laboriosam autem ut corporis assumenda qui consequuntur facere 33 dolorem cumque?</p>
        </section>
        <section className='content__about'>
          <p className='content__about--title'>Technologies</p>
          <img className='content__about--icon' src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
          <img className='content__about--icon' src="https://img.icons8.com/color/48/000000/typescript.png" />
          <img className='content__about--icon' src="https://img.icons8.com/color/48/000000/nodejs.png" />
          <img className='content__about--icon' src="https://img.icons8.com/color/48/000000/react-native.png" />
          <img className='content__about--icon' src="https://img.icons8.com/color/48/000000/redux.png" />
          <img className='content__about--icon' src="https://img.icons8.com/color/48/000000/kotlin.png" />
          <img className='content__about--icon' src="https://img.icons8.com/color/48/000000/android-os.png" />
          <img className='content__about--icon' src="https://img.icons8.com/color/48/000000/mongodb.png" />
          <img className='content__about--icon' src="https://img.icons8.com/color/48/000000/postgreesql.png" />
        </section>
      </div>
    </div>
  );
}

export default About;