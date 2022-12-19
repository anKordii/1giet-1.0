import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container p-3 mobile_footer">
      <span className="text-muted">
      1giet.CF © <strong className='fw-bolder' style={{color: "white"}}>2022</strong>
      </span>
      <span className="text-muted float-end fw-normal" style={{color: 'var(--fight-bialy)'}}>
        This website is part of a joke, don't take it seriously.
      </span>
    </div>
  </footer>
);

export default Footer;
