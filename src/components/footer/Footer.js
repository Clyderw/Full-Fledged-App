import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a target="__blank" href="https://github.com/Clyderw">
                <img src={gitHub} alt="https://github.com/Clyderw" />
              </a>
            </li>
            <li className="social__item">
              <a
                target="__blank"
                href="https://linkedin.com/in/andrei-simonov-56308b2a7"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
