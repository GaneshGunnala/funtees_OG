import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import logo from './logo.svg';
import routes from "./routes";
import {Helmet} from "react-helmet";
import './App.scss';
import Navbar from "./components/helpers/Navbar";
import Footer from "./components/helpers/Footer";
// import ''
function App() {
  return (
    <html>
      <head>
      <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Funtees</title>
                {/* <link rel="canonical" href="" /> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                {/* <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script> */}
            </Helmet>
      </head>
      
    <Navbar />
    <BrowserRouter >
						<Routes>
							{routes.map((route, index) => {
                return (
                  <Route key={index} exact path={route.path} element={route.component} />
                  )
                }
                )}
						</Routes>
					</BrowserRouter>
    <Footer />
      </html>
  );
}

export default App;
