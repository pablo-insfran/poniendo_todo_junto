
import './App.css';

import PersonCard from './components/PersonCard';



function App() {
  return (
    <div className="App">

      <PersonCard fristName = "Doe" lastName = "Jane" age = {45} hairColor = "Black"/>
      <PersonCard fristName = "John" lastName = "Smith" age = {88} hairColor = "Brown"/>

    </div>
  );
}

export default App;
