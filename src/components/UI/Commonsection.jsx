import React from 'react';
import '../../style/Common-section.css';
const Commonsection = ({title}) => {
  return <section className="common__section">
    <div className="container text-center">
        <h1>{title}</h1>
    </div>
  </section>
}

export default Commonsection