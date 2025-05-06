import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://www.monche.com" className="logo">
        <span>www.monche</span>
        <span>.com</span>
      </a>
      <div>
        <p>
          Made with 
          <span>❤️</span>
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/moisescercas"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/moiches/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          
          href="https://wa.me/+525618616455?text=Hola!%20%F0%9F%98%8E"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://www.instagram.com/mo1sescercas/"
          target="_blank"
          rel="noreferrer"
        >

          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
