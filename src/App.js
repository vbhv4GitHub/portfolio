// import logo from './logo.svg';
import './App.css';
import Hero from './features/Hero/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './features/Navbar/Navbar';

function App() {
   return (
      <Router>
         <header>
            <Navbar />
         </header>
         <Switch>
            {/* <Route path='/projects' exact component={Projects} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/about' exact component={About} /> */}
            <Route path='/' exact component={Hero} />
         </Switch>
         {/* <Footer /> */}
      </Router>
   );
}

export default App;
