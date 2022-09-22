import './Footer.css';
import fb from './facebook.png';
import tw from './twitter.png';
import ig from './instagram.png';
import wa from './whatsapp.png';

function Footer() {
    return (
        <div className="footer">
            <h4>Ponte en contacto:</h4>
            <div className="logoRedes">
                <img src={fb} alt="Facebook"></img>
                <img src={tw} alt="Twitter"></img>
                <img src={ig} alt="Instagramr"></img>
                <img src={wa} alt="WhatsApp"></img>
            </div>
        </div>
    );
}

export default Footer;