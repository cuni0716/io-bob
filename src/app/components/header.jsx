import React from 'react';
import { primary } from 'constants/styles';

export default function Header() {
  return (
    <nav>
      <div className={`nav-wrapper ${primary}`}>
        <span className="brand-logo center">Ramon LLompart</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="new">Create</a></li>
        </ul>
      </div>
    </nav>
  );
}
