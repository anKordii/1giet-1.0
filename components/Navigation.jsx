import React from "react";
import Link from 'next/link';

const Navigation = () => {

  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-2 pe-2 pb-3 pt-4" id="seven7-navbar" style={{zIndex: 5}}>
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_01" aria-controls="navbar_01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link href="/">
                <a className="navbar-brand fw-bolder">
                    <span style={{alignItems: "baseline"}}>
                        1giet<small style={{fontSize: '.75rem'}}>.CF</small>
                    </span>
                </a>
            </Link>
            <div className="collapse navbar-collapse" id="navbar_01">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">
                                Home
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </>
  )
}
export default Navigation;
