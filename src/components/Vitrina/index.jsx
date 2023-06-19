import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Vitrina = () => {
  const [Vitrina, setVitrina] = useState([]);

  useEffect(() => {
    const images = [];
    let amount= window.innerWidth/200;
    if (amount>5) amount=5;
    if (amount<3) amount=3;

    while (images.length < amount) {
      const randomNumber = Math.floor(Math.random() * 184) + 95;
      const imageName = `uncanny${randomNumber}.jpg`;

      //Que no se repita
      if (!images.includes(imageName)) {
        images.push(imageName);
      }
    }

    //ordena y envía
    // images.sort((a, b) => parseInt((a.slice(7, -4)),10) - (parseInt(b.slice(7, -4)),10) );
    setVitrina(images);
  }, []);



  return (
    <div id="vitrina">
      {Vitrina.map((imageName) => {
        const issueNumber = (imageName.slice(7, -4));

        return (
          <Link
            key={imageName}
            to={{
              pathname: '/comicinfo',
              state: {
                title: 'Uncanny X-Men',
                year: '1963',
                issue: issueNumber,
              },
            }}
          >
            <img
              src={`./img/uncanny/${imageName}`}
              alt={`Uncanny X-Men #${issueNumber}`}
              className="vitrina-comic"
            />
          </Link>
        );
      })}
    </div>
  );
};


export default Vitrina;