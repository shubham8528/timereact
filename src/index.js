import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./Time.css"


// let times = new Date();
// times = times.toLocaleTimeString();

 setInterval(()=>{
  let times = new Date();
      times = times.toLocaleTimeString();
 var x = document.getElementsByClassName('timeshow');
 x[0].innerHTML=times


},1000)

  ReactDOM.render(
  <>
 <App />
 <div className='timeshow'></div>
 </>

  ,document.getElementById('root')
) 