import './App.css';
import me from "./Assets/me2.jpg";
import email from "./Assets/Mail.png";
import linkedin from "./Assets/linkedin.png";
import About from './Components/About';
import Interests from './Components/Interests';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className="main">
        <section className="card">
          <img className="card--img_profile" src={me} alt="Winnie" />
          <h1 className="card--title">Uzochukwu Winnie</h1>
          <h4 className="card--title_sub">Frontend Developer</h4>
          <small className="card--title_link"><a href='https://wineshuga.netlify.app' target="_blank" rel="noreferrer">Portfolio ❤</a></small>
          <a href='mailto:uzochukwuwinnie@gmail.com' rel="noreferrer"><button className="card--button_email"><img src={email} alt="" />Email</button></a>
          <a href='https://www.linkedin.com/in/uziwinnie' target="_blank" rel="noreferrer"><button className="card--button_linkedin"><img src={linkedin} alt="" />LinkedIn</button></a>
          <About />
          <Interests />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
