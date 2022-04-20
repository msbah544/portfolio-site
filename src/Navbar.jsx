const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        {/*<a href="/">
          <img src="./icons/bx-home.svg" alt="home-page" />
  </a>*/}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/msbah544"
        >
          <img
            className="icon"
            src="./icons/bxl-github.svg"
            alt="github-profile"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/msbah544"
        >
          <img
            className="icon"
            src="./icons/bxl-instagram.svg"
            alt="instagram-profile"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.twitter.com/msbah544/"
        >
          <img
            className="icon"
            src="./icons/bxl-twitter.svg"
            alt="twitter-profile"
          />
        </a>
      </div>
      <div className="logo">
        <img src="./images/logo.jpg" alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
