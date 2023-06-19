import React from 'react';
import completeReadingOrder from '../../assets/completeReadingOrder.json';
import { Link } from 'react-router-dom';

function ReadingMenu({ handleEraSelect }) {
  return (
    <section className="readingorderGrid">
      <h1>X-Men 1975-1991: Complete Reading Order</h1>
      <article id="tarjeta">
        <p style={{ lineHeight: "2em", fontWeight: "100", textAlign: "left" }}>The following is a reading guide for the Claremont run, heavily inspired by the one made by <b>Comic Book Herald</b>. You can find the original guide here:</p>
        <a href="https://www.comicbookherald.com/chris-claremont-era-x-men-reading-order-guide/">https://www.comicbookherald.com/chris-claremont-era-x-men-reading-order-guide/</a>
        <p>You can also check: <Link to="/omnibus">List of Omnibus</Link> and the
        <Link to="/minimal"> Minimal Reading Order</Link> </p>

        <div id="tarjetamenu">
          <ul>
            {completeReadingOrder.map((era, index) => (
              <li key={`${era.titulo}-${index}`} era={era} style={{ textAlign: "left", listStyleType: "none" }}>
                <button type="button" onClick={(e) => handleEraSelect(index, e)} data-content= {era.titulo}>
                  {era.titulo}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}

export default ReadingMenu;