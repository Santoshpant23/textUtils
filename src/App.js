import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [color, setcolor] = useState("light");
  const [message, setmessage] = useState('enable');
  const [textStyle, settextStyle] = useState({
    color: 'black',
  })
  const handlemessage = () => {
    if (color === 'light') {
      setcolor('dark');
      setmessage('Disable')
      document.body.style.backgroundColor = '#47476b';
      settextStyle({
        color: 'white',
      })
      document.title = "Dark Mode";
    }
    else {
      setcolor('light');
      setmessage('Enable');
      document.body.style.backgroundColor = 'white';
      document.title = "Light Mode";
      settextStyle({
        color: 'black',
      })

    }
  }



  return (
    <>
      <Router>
        <Navbar title="TextUtils" nameOne="Home" color={color} message={message} handlemessage={handlemessage} />
        <div className="container">
          <Switch>
            <Route path="/about">
              <About color={color} />

            </Route>
            <Route path="/">
              <TextForm message="Enter the text to analyze below:" textStyle={
                textStyle} />

            </Route>
          </Switch>
        </div>

      </Router>
    </>
  );
}

export default App;
