
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
                <a target="_blank" rel="noopener noreferrer" href="https://es-la.facebook.com/"><img src={fb} alt="Facebook"></img></a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/?lang=es"><img src={tw} alt="Twitter"></img></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><img src={ig} alt="Instagramr"></img></a>
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5492215137609"><img src={wa} alt="WhatsApp"></img></a>
            </div>
        </div>
    );
}

export default Footer;