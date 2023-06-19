import React from 'react';
import './omnibus.css';
import { Link } from 'react-router-dom';
import omnibus from "../../assets/omnibus.json";

export default function Reading() {
  return (
    <section className="omnibusGrid" id="top">
      <h2>Claremont's Run Omnibus Collection</h2>
      {omnibus.map((tomo) => (
        <article key={tomo.code}>
          <section>
            <h3 style={{ color: "dodgerblue", fontWeight: "bold", marginBottom: "2em" }}>{tomo.title}</h3>
            <p>{tomo.contents}</p>
          </section>
            <img src={`./img/omnibus/${tomo.code}.jpg`} alt={tomo.title} />
        </article>
      ))}
      <div>
        <a
          className="boton"
          id="tarjeta"
          style={{ display: "block", width: "100%", textAlign: "center" }}
          href="#top"
          onClick={() => window.scrollTo(0, 0)}
          rel="noopener noreferrer"
        >
          Back to Top
        </a>
      </div>
      <section style={{ display: "flex", justifyContent: "center", gap: "5vw" }}>
        <div>
          <Link className="boton" id="tarjeta" to='/readingorder' style={{ display: "block", width: "100%" }}>Complete Reading Order</Link>
        </div>
        <div>
          <Link className="boton" id="tarjeta" to='/minimal' style={{ display: "block", width: "100%" }}>Minimal Reading Order</Link>
        </div>
      </section>
    </section>
  );
}

