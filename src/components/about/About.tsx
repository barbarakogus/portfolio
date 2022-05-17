import './About.css';

function About() {
  return (
    <div id='aboutPage' className="container__about">
      <section className='description__about'>
        <hr className='description__about--line-left'></hr>
        <p>Lorem ipsum dolor sit amet. A repudiandae quos est nobis ipsum et saepe nobis. Qui exercitationem facere est internos voluptates aut quam consequatur quo nulla repellat qui vero velit qui dolorem omnis. Et quos voluptatibus sit dolor distinctio et laboriosam autem ut corporis assumenda qui consequuntur facere 33 dolorem cumque?</p>
        <hr className='description__about--line-right'></hr>
      </section>
      <section className='content__about'>
        <p className='content__about--title'>Technologies</p>
        <img className='content__about--icon' src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
        <img className='content__about--icon' src="https://img.icons8.com/color/48/000000/typescript.png" />
        <img className='content__about--icon' src="https://img.icons8.com/color/48/000000/react-native.png" />
        <img className='content__about--icon' src="https://img.icons8.com/color/48/000000/redux.png" />
        <img className='content__about--icon' src="https://img.icons8.com/color/48/000000/kotlin.png" />
        <img className='content__about--icon' src="https://img.icons8.com/color/48/000000/android-os.png" />
      </section>
    </div>
  );
}

export default About;