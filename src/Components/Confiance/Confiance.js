import './Confiance.css';
import Confiance_img from '../assets/img/Application programming interface-cuate.svg';

const Confiance = () => {
  return (
    <>
        <div className="confiance_container reveal">
          <div className="container">
              <div className="img">
                <img src={Confiance_img} alt="Confiance Sections"/>
              </div>
              <div className="content">
                <div><strong className="title">Faites nous Confiance !</strong></div>
                <br />
                <p>
                  Nous sommes une agence de <b>communication</b> et <b>marketing digital</b> casablancalaise. 

                  Nous accompagnons les entreprises dans le conseil, la création, la conception et la réalisation 
                  
                  de tous supports de communication et marketing.
                  </p>
              <p>
                  <b>Web Digital</b> est une <b>agence digitale</b>, basée à Casablanca au Maroc. Spécialisée dans le <b>développement web</b>,

                  le <b>développement web</b>, la conception des sites internet, et le design et infographie. Nous sommes une équipe

                  jeune, créative et déterminée ! Notre mission est claire, faciliter la digitalisation de votre business 
                    
                  ! Et pour en réussir, nous tenons notre engagement jusqu’au bout.
              </p>
              </div>
          </div>
        </div>
    </>
  )
}

export default Confiance