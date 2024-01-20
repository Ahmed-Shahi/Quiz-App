// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  let [Quiz,setQuiz] = useState('')
  useEffect(function(){
    getData()
  },[])
  

  function getData(){
    
    fetch('https://the-trivia-api.com/v2/questions')
    .then(res=> res.json())
    .then(res => setQuiz(Quiz =  res[0].question.text)
      
    )
    .catch(res => console.log(res))   

  }
  
  return (
    <div className="App">
      <h1>{Quiz}</h1>
    </div>
  );
}

export default App;

  {/* <header className="App-header">
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
  </header> */}