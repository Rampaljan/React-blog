import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const API_URL = "http://localhost:3500/students"
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
   
  useEffect(() =>{
    const getData = async()=>{
      const response = await fetch(API_URL)
      
      const student_list = await response.json()
      
      setStudents(student_list)
      console.log(students)
    }
    getData()

  }, [])




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
