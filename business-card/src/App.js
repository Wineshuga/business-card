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
      <section className="card">
        <img className="card--img_profile" src={me} alt="Winnie" />
        <h1 className="card--title">Uzochukwu Winnie</h1>
        <h4 className="card--title_sub">Frontend Developer</h4>
        <small className="card--title_link"><a href='https://wineshuga.netlify.app'>Portfolio ❤</a></small>
        <button className="card--button_email"><img src={email} alt="" />Email</button>
        <button className="card--button_linkedin"><img src={linkedin} alt="" />LinkedIn</button>
      </section>
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
