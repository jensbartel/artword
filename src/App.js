import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Landing from './components/pages/Landing'
import Contact from './components/pages/Contact'
import Thoughts from './components/pages/Thoughts'
import About from './components/pages/About'


const App = () => {
    return (
        <div className='container'>
            <Router>              
              <Navbar />
              <Route exact path='/' component={Landing} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/thoughts' component={Thoughts} />
              <Route exact path='/about' component={About} />
            </Router>
        </div>
    );
};

export default App;
