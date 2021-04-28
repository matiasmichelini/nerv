import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tickets from './components/Tickets';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Tickets}></Route>
    </Router>
  );
}

export default App;
