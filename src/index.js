
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);

const  reveal = () => {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


window.addEventListener("scroll", reveal);

//ReactDOM.render("Hello Mnasfa",document.getElementById('root'));