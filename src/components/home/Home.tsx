import "./Home.css";
import me_group from "../../assets/img/me_group.png";

function Home() {
  return (
    <div className="container">
      <div className="container__home">
        <section className="container__home--content">
          <h1 className="content--text">
            Welcome to my website, <br />I am{" "}
            <span className="content--text--title">Bárbara Kógus</span> <br />
            Full-stack JavaScript developer
          </h1>
        </section>
        <section className="container__home--image">
          <img alt="Barbara" className="home--img" src={me_group} />
        </section>
      </div>
    </div>
  );
}

export default Home;
