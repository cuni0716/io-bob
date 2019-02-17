import React from 'react';
import { primary } from 'constants/styles';

export default function Footer() {
  return (
    <footer className={`page-footer ${primary}`}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">bob.io</h5>
            <p className="grey-text text-lighten-4">Fullstack Challenge</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2019 Copyright RamonCuni
        </div>
      </div>
    </footer>
  );
}
