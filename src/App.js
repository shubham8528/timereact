import React from "react";



function App() {
  let time = new Date();
  time = time.getHours();
  let messages = "";
 


  setInterval(()=>{
    let times = new Date();
        times = times.toLocaleTimeString();
   var x = document.getElementsByClassName('timing');
   x[0].innerHTML=times;
  console.log(times)
  },1000)


  if (time >= 1 && time < 12) {
    messages = "good mrng shubham";
  } else if (time >= 12 && time < 16) {
    messages = "good Afternoon";
  } else {
    messages = "good Nyt";
  }

  // CSS////
 

  return (
    <>
      <div className='box'>
        <h1 className='mrngMsg'>heyy Shubham :{messages}</h1>
        <div className='timing'></div>
      </div>
    </>
  );
}

export default App;



