import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Switch>  

      </Switch>
    </Router>
    </>
  );
}

export default App;
