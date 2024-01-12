import React from "react";

function Header() {
  return (
    <div className="header-container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img
            className="icon"
            id="website-icon"
            src="/images/task_square_icon.svg"
          />
          <span className="fs-4 text-white HeaderName">TaskTrackr</span>
        </a>

        <ul className="menu nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Link
            </a>
          </li>
          
        </ul>
      </header>
    </div>
  );
}

export default Header;
