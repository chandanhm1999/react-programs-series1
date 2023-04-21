import './App.css';
import Series from "./Series"
import Palindrome from "./Palindrome"
import { Navbar } from './components/main/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Series />
      <Palindrome />
    </div>
  );
}

export default App;
