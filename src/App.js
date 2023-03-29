import './App.css';
import {Container} from './Components/index'
import {Header , Footer ,Mainslider,Apropos,Services, Blog} from './Sections/index'
// import {createBrowserRouter,RouterProvider} from "react-router-dom";

const App = () => {
  return (
    <>
      <Header/>
        <Container> 
            <Mainslider/>
              <Apropos/>
              <Services/>
              <Blog/>
        </Container>
      <Footer />
    </>
  );
}

export default App;
