import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import Listing from './components/listing';

function App() {
  return (
    <div className="App w-full px-4 py-16">
      <div className='font-bold text-3xl '>
        Data Listing
      </div>
      <Listing/>
    </div>
  );
}

export default App;
