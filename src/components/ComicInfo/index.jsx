import React from 'react';
import ComicDetail from './ComicDetail';
import { Link } from 'react-router-dom';

const ComicInfo = ({ location }) => {
  const { title, year, issue } = location.state || {};
  var  titulo=title;
 
  if (titulo==='Wolverine miniseries') titulo="Wolverine";

  if (title === undefined || year === undefined || issue === undefined) {
    return <div className="Error">
    <Link to='./readingorder'>
    <img src="./img/comic2.jpg" alt="Go back to the Reading Order" title='Back to the reading order' /></Link>
    <h1>Something went wrong. Try again later.</h1></div>;
  }

  return (
    <article>
    <ComicDetail titleStartsWith={titulo} startYear={year} issueNumber={issue} />
    <p style={{textAlign:'right',marginRight:'5%',color:'white'}}>Data provided by Marvel. © 2014 Marvel.</p></article>
  );
};

export default ComicInfo;