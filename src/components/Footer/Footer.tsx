import './Footer.css';
import threadsLogo from '../../assets/threadsLogo.svg';
import instaLogo from '../../assets/instaLogo.svg';
import gpjLogo from '../../assets/gpjLogo.png';

export default function Footer() {
  return (
    <footer
      className="footer items-center p-4"
      data-testid="footer"
    >
      <div
        className="items-center grid-flow-col"
        data-testid="center-footer-items"
      >
        <img
          src={gpjLogo}
          alt="main gpj logo"
          className="main-logo"
        />
        <p>godfreypj - est 1989</p>
      </div>
      <div className="footer grid-flow-col justify-end">
        <div
          className="grid-flow-col"
          data-testid="threads-logo"
        >
          <a
            href="https://www.threads.net/@phil.captures"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={threadsLogo}
              alt="threads logo"
              className="logo"
            />
            <p className="text-center">Threads</p>
          </a>
        </div>
        <div
          className="grid-flow-col"
          data-testid="insta-logo"
        >
          <a
            href="https://www.instagram.com/phil.captures"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instaLogo}
              alt="instagram logo"
              className="logo"
            />
            <p className="text-center">Instagram</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
