import React from "react";

function Header() {
  return (
    <div class="header-container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img
            class="icon"
            id="website-icon"
            src="/images/task_square_icon.svg"
          />
          <span class="fs-4 text-white HeaderName">TaskTrackr</span>
        </a>

        <ul class="menu nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              Link
            </a>
          </li>
          
        </ul>
      </header>
    </div>
  );
}

export default Header;
