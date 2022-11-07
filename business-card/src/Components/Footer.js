import twitter from "../Assets/Twitter Icon.png";
import facebook from "../Assets/Facebook Icon.png";
import instagram from "../Assets/Instagram Icon.png";
import github from "../Assets/GitHub Icon.png";

function Footer() {
    return (
      <footer>
        <img src={twitter} alt="twitter" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={github} alt="github" />
      </footer>
    );
  }
  
  export default Footer;
  