import React from 'react';
import Vitrina from '../Vitrina';
// import Footer from '../../shared/components/layout/Footer';
import './home.css';
import { Link } from 'react-router-dom';

const Xmen = () => {

  return(
    
  <div id="home">

<div id="welco">
<h1 style={{ marginBottom: '20px' }}>Claremont's X-Men Run</h1>
  <p style={{color:'#e3e3e3' }}>
    Welcome! This website is dedicated to the legendary comic book writer Chris Claremont and his monumental run on the X-Men series. You'll find a complete reading order, a condensed minimal reading order, and a selection of omnibus editions that comprehensively collect Claremont's groundbreaking run.
  </p>
  <Vitrina/>
  <p style={{color:'goldenrod' }}>By clicking on an image, you will be directed to a page where you can find information, sourced from the <b>Marvel API</b>, about the corresponding comic.</p>
</div>

<ul id="homelinks">
  <li>
    <Link to="/about">About Chris Claremont</Link>
  </li>
  <li>
    <Link to="/readingorder">Complete Reading Order</Link>
  </li>
  <li>
    <Link to="/minimal">Minimal Reading Order</Link>
  </li>
  <li>
    <Link to="/omnibus">Omnibus List</Link>
  </li>
  <li>
    <a href="https://github.com/nachocorbillon" target="_blank" rel="noopener noreferrer">Credits</a>
  </li>
</ul>



  
  </div>
)};

export default Xmen;
