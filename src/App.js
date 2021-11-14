import MainComponent from "./components/MainComponent";
import HeaderComponent from "./components/HeaderComponent";
import FavoritesComponent from "./components/FavoritesComponent";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router> 
      <div>  
        <HeaderComponent />
        <Routes>
          <Route path="/"  element={<MainComponent />}></Route>
          <Route path="/main"  element={<MainComponent />}></Route>
          <Route path="/favorites" element={<FavoritesComponent />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
