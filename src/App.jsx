
import './App.css';
import Discountcalc from './components/Discountcalc';
import Header from './components/Header';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Discountcalc/>
    </div>
  );
}

export default App;
