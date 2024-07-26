import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
// import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Reach me out</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:moisescercas2024@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:moisescercas2024@gmail.com">moisescercas2024@gmail.com</a>
        </div>
        <div>
        <a href="tel:+525618616455"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+525618616455">(+52) 5618616455</a>
        </div>  
      </div>
      {/* <Form></Form> */}
    </Container>
  )
}