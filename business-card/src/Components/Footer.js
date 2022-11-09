import twitter from "../Assets/Twitter Icon.png";
import facebook from "../Assets/Facebook Icon.png";
import instagram from "../Assets/Instagram Icon.png";
import github from "../Assets/GitHub Icon.png";

function Footer() {
    return (
        <footer>
            <a href="https://www.twitter.com/wineshuga" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" /></a>
            <a href="https://www.facebook.com/uzochukwwinnie" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a>
            <a href="https://www.instagram.com/wineshuga" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" /></a>
            <a href="https://github.com/wineshuga" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
        </footer>
    );
}

export default Footer;
