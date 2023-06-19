import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about">
      <h1>Chris Claremont and the X-Men</h1>
      <div className="about__text">

        <p>
          Chris Claremont is a British-born American comic book writer and novelist. He is best known for his work on Marvel Comics' X-Men franchise, particularly the series <b>The Uncanny X-Men</b>, where he wrote for over 16 years.</p> 
          <img className="about__image" src="./img/chris_claremont2.jpg" alt="" />
          <p>He is credited with reviving the X-Men franchise in the 1970s and 1980s, and his work on the series is considered one of the most influential in comic book history. He has also written for other Marvel Comics characters, such as <b>Iron Fist</b>, <b>Ms. Marvel</b>, and <b>The Fantastic Four</b>. Claremont has won numerous awards for his work in comics, including the Shazam Award for Best Writer in 1981 and the Inkpot Award in 1984.
        </p>
        
        <p>
          During his run, Chris Claremont introduced iconic characters like <b>Kitty Pryde</b>, <b>Magik</b> and <b>Rogue</b>, as well as redefining characters like <b>Wolverine</b>, <b>Cyclops</b> and <b>Jean Grey</b>. He also explored complex themes of identity, prejudice, and personal struggle that made the X-Men a comic book series unlike any other.
        </p>
        <img className="about__image" src="./img/chris_claremont.jpg" alt="" />
        <p>
          His stories were epic in scale, spanning multiple issues and weaving together countless plot threads. He developed a deep mythology for the X-Men, introducing new villains like the <b>Brood</b> and the <b>Morlocks</b>, and developing long-running storylines like the <b>Dark Phoenix Saga</b> and the <b>Mutant Massacre</b>.
        </p>

        <p>
          Chris Claremont's influence on the X-Men and the entire comic book industry is immeasurable. His run on the series is a testament to the power of storytelling and the lasting impact that a talented writer can have on a beloved set of characters.
        </p>
      </div>
    </div>
  );
};

export default About;