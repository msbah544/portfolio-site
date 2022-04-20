const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/msbah544"
        >
          <img
            className="icon"
            src="./icons/bxl-github.svg"
            alt="github-icon"
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
            alt="instagram-icon"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.twitter.com/msbah544"
        >
          <img
            className="icon"
            src="./icons/bxl-twitter.svg"
            alt="twitter-icon"
          />
        </a>
      </div>

      <div className="contact">
        <div className="phone">
          <img
            className="contact-icon"
            src="./icons/bx-phone-call.svg"
            alt="phone-icon"
          />
          <p>+220 3981289</p>
        </div>
        <div className="email">
          <img
            className="contact-icon"
            src="./icons/bx-envelope.svg"
            alt="email-icon"
          />
          <p>momodoubah544@gmail.com</p>
        </div>
      </div>

      <p className="copyright">Momodou S. Bah © 2022</p>
    </div>
  );
};

export default Footer;
