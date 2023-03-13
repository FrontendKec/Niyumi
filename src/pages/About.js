import Navbar from "../components/navbar";
import Copyright from "../components/copyright";

function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="content-container">
        <div className="content-title">
            <h1>⋆｡ﾟ Niyumi ﾟ｡⋆</h1>
        </div>
        <div className="content-subtitle">
            <p>Everything related to anime 🌸</p>
        </div>
        <div className="content-intro">
            <p>Welcome to Niyumi home of anime!</p>
            <p>Here you will find different info about anime</p>
            <p>(popular, upcoming, high rated anime)..etc</p>
            <p>Have fun!</p>
        </div>
      </div>
      <Copyright />
    </div>
  );
}

export default About;
