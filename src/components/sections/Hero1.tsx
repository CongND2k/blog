'use client';
import Typewriter from 'typewriter-effect';

import info from '@/data/cong-info-data';

const Hero1 = () => {
  return (
    <>
      <div className="banner">
        <div className="row ">
          <div className="col-lg-6 pt-100">
            <span className="text-sm-bold color-gray-600 wow animate__animated animate__fadeInUp">
              Hello Everyone!
            </span>
            <h1 className="color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp">
              I’m
              <Typewriter
                options={{
                  wrapperClassName: 'typewrite color-linear',
                  strings: ['Phineas Tran', 'Developer', 'Front-End'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="row">
              <div className="col-lg-9">
              {info.map((item, index) => (
                <p className="text-base color-gray-600 wow animate__animated animate__fadeInUp">
            {item.information}
          </p>
      ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="banner-img position-relative wow animate__animated animate__fadeIn">
              <img src="assets/imgs/phianh.png" alt="Phineas" />
              <div className="pattern-1">
                <img src="assets/imgs/template/pattern-1.svg" alt="Phineas" />
              </div>
              <div className="pattern-2">
                <img src="assets/imgs/template/pattern-2.svg" alt="Phineas" />
              </div>
              <div className="pattern-3">
                <img src="assets/imgs/template/pattern-3.svg" alt="Phineas" />
              </div>
              <div className="pattern-4">
                <img src="assets/imgs/template/pattern-4.svg" alt="Phineas" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero1;
