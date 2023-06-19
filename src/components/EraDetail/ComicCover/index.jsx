import React from 'react';
import { Link } from 'react-router-dom';
import handleHover from './handlehover.js';

function ComicCover({ comic, imageUrl, onError }) {
  return (
    <div className="comic">
      <figure>
        <Link
          to={{
            pathname: "/comicinfo",
            state: {
              title: comic.leyenda,
              year: comic.startyear,
              issue: comic.num,
            },
          }}
  
        >
          <img
            loading="lazy"
            src={imageUrl}
            onError={onError}
            alt={`${comic.leyenda} #${comic.num}`}
            title={`${comic.leyenda} ${comic.startyear} #${comic.num}`}
            onMouseOver={e => handleHover(comic, e)}
          />
        </Link>
      </figure>
      <figcaption>
        {comic.leyenda} #{comic.num}
      </figcaption>
    </div>
  );
}

export default ComicCover;