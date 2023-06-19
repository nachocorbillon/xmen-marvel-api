import React from 'react';

function Error404 (){

  const today = new Date();

  const minImpar = today.getMinutes()%2;
  const minNotCinco = today.getMinutes()%5;

  return (   
  <div className="Error404" style={{color:"goldenrod",fontSize:"1.2em",backgroundColor:"rgba(18, 54, 236,0.05)",padding:"2% 0",marginBottom:"3em", borderRadius:"2%"}}>
    <h1>Page Not Found</h1>
    <br />

   


      {minImpar?    minNotCinco? <figure> <img src="./img/comic.jpg" alt=""/>
    <p>Keep reading comics.</p>   </figure>
    

    : <figure> <img src="./img/x.jpg" alt=""/>
    <p>The x marks the spot. Don't disturb the librarian.</p> </figure>
    

       
       : minNotCinco? <figure> <img src="./img/comic2.jpg" alt=""/>
       <p>Keep Reading X-Men.</p> </figure> 

:      <figure> <img src="./img/comic2.jpg" alt=""/>
    <p>Keep Reading X-Men.</p> </figure>
        
          }




  </div>

);
}

export default Error404;
