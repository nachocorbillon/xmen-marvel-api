import React, { useState } from 'react';
import EraDetail from '../EraDetail';
import minimalReadingOrder from '../../assets/minimal.json';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';


function Minimal() {
  const [selectedEraIndex, setSelectedEraIndex] = useState(null);
  const selectedEra = selectedEraIndex !== null ? minimalReadingOrder[selectedEraIndex] : null;

  const handleEraSelect = (index, e) => {
    e.preventDefault();
    setSelectedEraIndex(index);
  };

  const contentRefmin = useRef(null);
  useEffect(() => {
    const contentHeight = contentRefmin.current.offsetHeight;
    document.documentElement.style.setProperty('--content-height', contentHeight + 'px');
  }, []);

  return (
    <div ref={contentRefmin}>
      <section className="readingorderGrid">
        <h1>X-Men 1975-1991: Minimal Reading Order</h1>
        <article id="tarjeta">
        <p style={{ lineHeight: "2em", fontWeight: "100", textAlign: "left" }}>The following is a reduced version of the  <Link to="/readingorder">Complete Reading Order</Link> </p>
          <p>You can also check: <Link to="/omnibus">List of Omnibus</Link> </p>


          <div id="tarjetamenu">
            <ul>
              {minimalReadingOrder.map((era, index) => (
                <li key={era.titulo} era={era} style={{ textAlign: "left", listStyleType: "none" }}>
                  <button type="button" onClick={(e) => handleEraSelect(index, e)}>
                    {era.titulo}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      {selectedEra ? (
        <React.Suspense fallback={<div>Loading era information...</div>}>
          <EraDetail era={selectedEra} />
        </React.Suspense>
      ) : (
        <div className="spacebottom">Please select an era to view its information.</div>
      )}
    </div>
  );
}

export default Minimal;