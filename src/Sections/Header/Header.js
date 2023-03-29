import './Header.css';
import NavItem , {Navdropdown} from '../../Components/NavItem/NavItem'


const Header = (props) => {
  return (
    <>
          <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid">
                <a className="navbar-brand" href="www">
                  <div><i className="fa-brands fa-react"></i><strong>Web Digital</strong></div>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav float-right">
                    <NavItem>
                      <a className="nav-link active" aria-current="page" href="www">Home</a>
                    </NavItem>
                    <NavItem>
                      <a className="nav-link" href="www">Features</a>
                    </NavItem>
                    <NavItem>
                      <a className="nav-link" href="www">Pricing</a>
                    </NavItem>
                    <Navdropdown>
                      <a className="nav-link dropdown-toggle" href="www" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Nos Services
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className=" service_list dropdown-item" href="www">Web design</a></li>
                        <li><a className=" service_list dropdown-item" href="www">Application mobile</a></li>
                        <li><a className=" service_list dropdown-item" href="www">Développement web avancé</a></li>
                      </ul>
                    </Navdropdown>
                  </ul>
                </div>
              </div>
          </nav>
    </>
  )
}

export default Header;