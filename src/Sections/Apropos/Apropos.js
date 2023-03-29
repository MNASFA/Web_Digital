import './Apropos.css';
import Image_apropos from '../../Components/assets/img/mailchimp-04X1Yp9hNH8-unsplash.jpg';

const Apropos = () => {
  return (
    <>
        <div className="container reveal">
          <div className="left">
              <h2>Qui Sommes Nous?</h2>
              <p>
              
                  <b>Web Digital</b> est une auto entreprise spécialisée dans le creation des sites internet,
                  
                  le développement des applications mobiles , réferencement naturel SEO et Marketing digital
                  
                  sur Casablanca et partout au Maroc.Web Digital est basée sur Casablanca vous accompagne 
                  
                  avec un grand nombre d’outils marketing. Aujourd’hui, c’est l’ère de la transformation digitale,
                  
                  l’auto entreprise Web digital a un but primordial, c’est de répondre aux besoins des entreprises 
                  
                  d’avoir une meilleure visibilité sur le web, améliorant la notoriété de votre projet ainsi que diversifier
                  
                  vos supports de communication. notre entreprise développe une stratégie marketing performante dans le but
                  
                  d’améliorer e-réputation de votre projet en assurant de plus une solution efficace à vos problèmes, ainsi de
                  
                  conquérir constamment des nouveaux clients.

              </p>

              <a href="www">Demande De Devis</a>
          </div>
          <div className="right">
                <div>
                  <img src={Image_apropos} alt="Apropos" />
                </div>
          </div>
        </div>
    </>
  )
}

export default Apropos