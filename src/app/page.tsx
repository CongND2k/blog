// 'use client';
// import React, { useEffect, useRef, useState } from 'react';

import ParentComponent from './Animator/ParentComponent';

export default function Home() {
  // const containerRef = useRef<HTMLDivElement>(null);
  // const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // useEffect(() => {
  //   if (containerRef.current) {
  //     const handleResize = () => {
  //       setDimensions({
  //         width: containerRef.current?.offsetWidth || 0,
  //         height: containerRef.current?.offsetHeight || 0,
  //       });
  //     };

  //     handleResize(); // Đặt kích thước ban đầu
  //     window.addEventListener('resize', handleResize); // Cập nhật khi kích thước cửa sổ thay đổi

  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }
  // }, []);

  return (
    <div className="cover-home1">
      <div className="container">
        <ParentComponent />
        <div className="row">
          <div className="col-xl-1" />
          <div className="col-xl-10 col-lg-12">
            {/* Can choose other option */}
            {/* <Collisions
              width={dimensions.width}
              height={dimensions.height}></Collisions> */}
            {/* <Collisions width={800} height={400}></Collisions> */}
            {/* <Hero1 />
            <HotTopic />
            <EditorPicked />
            <PopularCategories />
            <div className="row mt-70">
              <div className="col-lg-8">
                <RecentPosts />
              </div>
              <div className="col-lg-4">
                <Sidebar2 />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
