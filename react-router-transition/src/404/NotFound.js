import React from 'react';
import Header from '../Header';
import BackButton from '../BackButton';
import './NotFound.css';

const NotFound = () => (
  <div>
    <Header align="left">The page you're looking for does not exist.</Header>
    <BackButton location="/">Go Home</BackButton>
    <div className="centered-box">
      <div className="ludek">
        <div className="facet">
          <figure className="glowa">
            <span className="wlosy">
              <span className="grzywka" />
              <span className="kogut" />
              <span className="kogut dwa" />
              <span className="kogut trzy" />
            </span>
            <span className="uszy">
              <span className="ucho ucho-lewe" />
              <span className="ucho ucho-prawe" />
            </span>
            <span className="oczy">
              <span className="oko oko-lewe" />
              <span className="oko oko-prawe" />
            </span>
            <span className="nos" />
            <span className="buzia" />
          </figure>
          <figure className="rece">
            <span className="reka-lewa" />
            <span className="reka-prawa" />
          </figure>
          <figure className="tlow">
            <span className="szyja" />
            <span className="brzuch" />
          </figure>
          <figure className="nogi">
            <span className="noga-lewa" />
            <span className="noga-prawa" />
          </figure>
        </div>
        <figure className="facet-cien">
          <span className="cien-lewy" />
          <span className="cien-prawy" />
        </figure>
      </div>
    </div>
    <p className="tekst">
      Design by{' '}
      <a
        href="https://dribbble.com/shots/2485177-Dancing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Eran Mendel
      </a>
    </p>
  </div>
);

export default NotFound;
