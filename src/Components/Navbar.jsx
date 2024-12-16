import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="navbar">
          <a class="navbar-brand" href="#">
            <h3 className="Logo">ANUJ VERMA</h3>
          </a>
          <div class="navbar" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link Home" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link About" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link Contact" href="/contact">
                  Contact Me
                </a>
              </li>
              <li class="nav-item-btn">
                <a href="https://www.linkedin.com/in/anuj-verma-440957242/">
                  {" "}
                  <button type="button" class="btn btn-outline-secondary">
                    Let's Talk
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
