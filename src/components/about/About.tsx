import "./About.css";

const icons = [
  {
    src: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    alt: "javaScript",
  },
  {
    src: "https://img.icons8.com/color/48/000000/typescript.png",
    alt: "typeScript",
  },
  {
    src: "https://img.icons8.com/color/48/000000/nodejs.png",
    alt: "Node.js",
    with: 50,
  },
  {
    src: "https://img.icons8.com/color/48/000000/react-native.png",
    alt: "React",
  },
  {
    src: "https://img.icons8.com/color/48/vite.png",
    alt: "Vite",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/fluency/48/nextjs.png",
    alt: "Next.js",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/undefined/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-color-tal-revivo.png",
    alt: "Redux",
  },
  {
    src: "https://img.icons8.com/color/48/000000/kotlin.png",
    alt: "Kotlin",
  },
  {
    src: "https://img.icons8.com/color/48/000000/android-os.png",
    alt: "Android",
  },
  {
    src: "https://img.icons8.com/color/48/000000/mongodb.png",
    alt: "MondoDb",
  },
  {
    src: "https://img.icons8.com/color/48/000000/postgreesql.png",
    alt: "postgreesql",
  },
  {
    src: "https://img.icons8.com/color/48/chakra-ui.png",
    alt: "Chakra-Ui",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/color/48/tailwindcss.png",
    alt: "Tailwind",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/fluency/48/supabase.png",
    alt: "Supabase",
    width: "48",
    height: "48",
  },
];

function About() {
  return (
    <div className="container__about">
      <h2 className="container__about--title">About</h2>
      <hr className="container__about--line"></hr>
      <div className="container__about--content">
        <section className="description__about">
          <p>
            I am a Forest Engineer turned Front-End Developer, driven by
            technology's power to bridge gaps, connect people, and inspire
            positive change.
          </p>
          <p>
            My programming journey began as a self-learner exploring{" "}
            <span className="contrast">Front-end</span> development. A year
            later, I was allowed to expand my skills in Android application
            development, where I embraced a new language,{" "}
            <span className="contrast">Kotlin</span>.
          </p>
          <p>
            In January 2022, I joined &lt;/salt&gt;, an intensive training
            program that deepened my expertise in software development. With the
            guidance of experienced instructors, I mastered core concepts like
            Test-Driven Development (TDD), TypeScript, Node.js, React, and MOB
            programming. This transformative experience shaped me into a{" "}
            <span className="contrast">Full-Stack developer</span> with a solid
            foundation in modern development practices.
          </p>
          <p>
            As a software developer, I have honed my skills in crafting
            responsive interfaces from design concepts, writing clean,
            statically typed code, and integrating frameworks effectively. I am
            committed to following best practices and thrive on continuous
            learning, embracing challenges as opportunities to grow and
            innovate.
          </p>
        </section>
        <section className="scroll">
          <div className="scroll__container">
            {icons.map((icon, index) => (
              <img
                key={index}
                width={35}
                height={35}
                src={icon.src}
                alt={icon.alt}
              />
            ))}
            {icons.map((icon, index) => (
              <img
                key={index}
                width={35}
                height={35}
                src={icon.src}
                alt={icon.alt}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
