import React from 'react';
import ReactDOM from 'react-dom';



var time= new Date();
time = time.getHours();
var messages='';
var times=new Date();
times=times.toLocaleTimeString();

// let interval = setInterval(() => {
//   times=new Date();
//   times=times.toLocaleTimeString();
//   console.log(times);
// },1000)

if(time>=1 && time<12){
   messages='good mrng shubham'
}
else if(time>=12 && time<16){
  messages='good Afternoon'
}
else{
  messages='good Nyt'
}

// CSS////
var mrngMsg={
  fontFamily: "'Caveat', cursive",
  margin:'0px',
  padding:'10px'
}
var box={
  textAlign:'center',
  margin:'200px auto',
  background:'white',
  width:'500px',
  border:'5px solid rgb(3, 160, 255)',
  boxShadow:'0px 0px 50px rgb(0, 229, 247)'
}
var timing={
  margin:'10px auto',
  width:'100px',
  border:'2px solid rgb(0, 255, 153)',
  background:'black',
fontSize:'20px',
 padding:'10px',
 color:'rgb(0, 255, 153)'
 
}

ReactDOM.render(
  <>
  <div style={box}><h1 style={mrngMsg}>heyy Shubham :{messages}</h1>
  <p style={timing}>{times}</p></div></>,document.getElementById('root')

)