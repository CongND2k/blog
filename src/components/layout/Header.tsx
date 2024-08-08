import Link from 'next/link';
import { FC } from 'react';

import SwitchButton from '@/components/elements/SwitchButton';

type Props = {
  handleOpen: () => void;
  handleRemove: () => void;
  openClass: string;
};

const Header: FC<Props> = ({ handleOpen, handleRemove, openClass }) => {
  // State to represent whether something is toggled or not
  // const [isToggled, setToggled] = useState(false);

  // Function to toggle the value of 'isToggled'
  // const toggleTrueFalse = () => setToggled(!isToggled);

  return (
    <header className={'header sticky-bar bg-gray-900'}>
      <div className="container">
        <div className="main-header">
          <div className="header-logo">
            <Link className="d-flex" href="/">
              <img 
                className="logo-night"
                alt="GenZ"
                src="/assets/imgs/Logo/Logo_night.png"
                style={{maxWidth:"65%"}}
              />
              <img 
                className="d-none logo-day"
                alt="GenZ"
                src="/assets/imgs/Logo/Logo_light.png"
                style={{maxWidth:"65%"}}
              />
            </Link>
          </div>
          <div className="header-nav">
            <nav className="nav-main-menu d-none d-xl-block">
              <ul className="main-menu">
                <li>
                  <Link className="color-gray-500" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="color-gray-500" href="/about-me">
                    About Me
                  </Link>
                </li>
                <li className="has-children">
                  <Link className="color-gray-500" href="#">
                    Categories
                  </Link>
                  <ul className="sub-menu two-col">
                    <li>
                      <Link className="color-gray-500" href="/blog-archive">
                        Blog Category 1
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="color-gray-500" href="/blog-archive-2">
                        Blog Category 2
                      </Link>
                    </li>
                    <li>
                      <Link className="color-gray-500" href="/blog-archive-3">
                        Blog Category 3
                      </Link>
                    </li>
                    <li>
                      <Link className="color-gray-500" href="/blog-archive-4">
                        Blog Category 4
                      </Link>
                    </li>
                    <li>
                      <Link className="color-gray-500" href="/blog-archive-5">
                        Blog Category 5
                      </Link>
                    </li> */}
                  </ul>
                </li>
                <li>
                  <Link className="color-gray-500" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div
              className={`burger-icon burger-icon-white ${
                openClass && 'burger-close'
              }`}
              onClick={() => {
                handleOpen();
                handleRemove();
              }}>
              <span className="burger-icon-top" />
              <span className="burger-icon-mid" />
              <span className="burger-icon-bottom" />
            </div>
          </div>
          <div className="header-right text-end">
            {/* <Link
              className="btn btn-search"
              href="#"
              onClick={toggleTrueFalse}
            /> */}
            <SwitchButton />
            {/* <div
              className={
                isToggled
                  ? 'form-search p-20 d-block'
                  : ' form-search p-20 d-none'
              }>
              <form action="#">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                />
                <input className="btn-search-2" />
              </form>
              <div className="popular-keywords text-start mt-20">
                <p className="mb-10 color-white">Popular tags:</p>
                <Link className="color-gray-600 mr-10 font-xs" href="#">
                  # Travel,
                </Link>
                <Link className="color-gray-600 mr-10 font-xs" href="#">
                  # Tech,
                </Link>
                <Link className="color-gray-600 mr-10 font-xs" href="#">
                  # Movie
                </Link>
                <Link className="color-gray-600 mr-10 font-xs" href="#">
                  # Lifestyle
                </Link>
                <Link className="color-gray-600 mr-10 font-xs" href="#">
                  # Sport
                </Link>
              </div>
            </div> */}
            {/* <Link
              className="btn btn-linear d-none d-sm-inline-block hover-up hover-shadow"
              href="/">
              Login
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
