import React, { useState, useEffect } from 'react';
import { getImageUrl } from './imageUtils.js';
import ComicCover from './ComicCover/index.jsx';
import placeholderImage from '../../assets/placeholder.png';

function EraDetail({ era }) {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const getUrls = async () => {
      const urls = await Promise.all(era.comics.map(comic => getImageUrl(comic)));
      setImageUrls(urls);
    };
    getUrls();
  }, [era]);

  if (!era) {
    return <div>Please select an era</div>;
  }

  return (
    <section>
      <h3 id={era.index}>{era.title}</h3>
      <div className="GridEra">
        {era.comics.map((comic, index) => (
          <ComicCover
            key={`${era.title}-${index}`}
            comic={comic}
            imageUrl={imageUrls[index] || placeholderImage}
          />
        ))}
      </div>
    </section>
  );
}

export default EraDetail;