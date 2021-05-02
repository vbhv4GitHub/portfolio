// import logo from './logo.svg';
import './App.css';
import Hero from './features/Hero/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './features/Navbar/Navbar';
import About from './features/About/About';
import Projects from './features/Portfolio/Projects/Projects';
import Contact from './features/Contact/Contact';

function App() {
   return (
      <Router>
         <div className='App'>
            <Navbar />
            <Switch>
               <Route path='/projects' exact component={Projects} />
               <Route path='/contact' exact component={Contact} />
               <Route path='/about' exact component={About} />
               <Route path='/' exact component={Hero} />
            </Switch>
            {/* <Footer /> */}
         </div>
      </Router>
   );
}

export default App;
