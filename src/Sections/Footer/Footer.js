import './Footer.css'
import footLogo from '../../Components/assets/img/wEB_dIGITAL-removebg-preview.png';

const Footer = () => {
  return (
    <>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="footer_container reveal ">
    <footer className="newFooterStyle text-center text-lg-start ">
      {/* Grid container */}
      <div className="container p-4">
        {/*Grid row*/}
        <div className="row my-4">
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div
              className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
              style={{ width: 150, height: 150 }}
            >
              <img
                src={footLogo}
                height={300}
                alt=""
                loading="lazy"
              />
            </div>
            <p className="text-center">
            Web Digital est une agence digitale, basée à Casablanca au Maroc. Spécialisée dans le 
            développement web, le développement web
            </p>
            <ul className="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <a className=" px-2" href="#!">
                  <i className="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a className=" px-2" href="#!">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a className=" ps-2" href="#!">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Blog</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#!" className="bloglinks">
                  <i className="fa-brands fa-digital-ocean"></i>
                  Comment réussir votre marketing digital ?
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="bloglinks">
                  <i className="fa-brands fa-digital-ocean"></i>
                  La digitalisation des entreprises : pourquoi et comment ?
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="bloglinks">
                  <i className="fa-brands fa-digital-ocean"></i>
                  Spotify x Shopify
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="bloglinks">
                  <i className="fa-brands fa-digital-ocean"></i>
                  Quels sont les meilleurs outils pour assurer le télétravail ?
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#!" className="">
                  <i className="fa-brands fa-digital-ocean"></i>
                  Web Developpement
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="">
                  <i className="fa-brands fa-digital-ocean"></i>
                  Graphic Design
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="">
                  <i className="fa-brands fa-digital-ocean"></i>
                  Photographie
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="">
                  <i className="fa-brands fa-digital-ocean"></i>
                    Mobile Developpement
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="">
                  <i className="fa-brands fa-digital-ocean"></i>
                  Video Editing
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="">
                  <i className="fa-brands fa-digital-ocean"></i>
                  Marketing Digital
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <p>
                  <i className="fas fa-map-marker-alt pe-2" />
                  Casablanca, 57 Rue Rahma, Maroc
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-phone pe-2" />+212 665 52 85 25
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-envelope pe-2 mb-0" />
                  media@webdigital.com
                </p>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", margin:"20px",fontWeight:"bold" }}
      >
        © 2023 Copyright
      </div>
      {/* Copyright */}
    </footer>
  </div>
  {/* End of .container */}
</>

  )
}

export default Footer