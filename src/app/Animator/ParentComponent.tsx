'use client';

import React, { useRef, useState, useEffect } from 'react';

import Collisions from './Collisions';

const ParentComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(800); // Default width

  const updateWidth = () => {
    if (containerRef.current) {
      const maxWidth = containerRef.current.clientWidth;
      setWidth(maxWidth);
    }
  };

  useEffect(() => {
    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div className=" col-lg-12" ref={containerRef}>
      <Collisions width={width} height={400} />
    </div>
  );
};

export default ParentComponent;
