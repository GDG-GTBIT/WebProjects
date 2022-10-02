import React, { Component, useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import Container from './components/container/container';
import Footer from './components/footer/footer';


const App = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    
    const difference = +new Date(`${year+1}-01-01`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        months: Math.floor(difference / (1000 * 60 * 60 * 24)/30),
        days: Math.floor(difference / (1000 * 60 * 60 * 24)%12),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  

  return (
      
    <div className='App'>
      
      
    
      <Header/>
      
      <div className='time'>
        
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
    
      
      
      
    
    
    

    </div>
    
  );
};

export default App;



