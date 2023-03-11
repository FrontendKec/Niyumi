import "../components/style/style.css";

function About() {
  return (
    <div className="about">
      <div className="navigation">
        <div className="brand">
          <a href="./">Niyumi</a>
        </div>
        <div className="links">
          <a href="./">Home</a>
          <a href="./schedule">Schedule</a>
          <a href="./about">About</a>
        </div>
      </div>
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
      <div className="copyright">
        <p>Copyright @2023. <a href="./">Niyumi</a>. All rights reserved</p>
      </div>
    </div>
  );
}

export default About;
