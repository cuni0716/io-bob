import React from 'react';
import { primary } from 'constants/styles';

export default function Header() {
  return (
    <nav>
      <div className={`nav-wrapper ${primary}`}>
        <a className="brand-logo center">Ramon LLompart</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Create</a></li>
        </ul>
      </div>
    </nav>
  );
}
