'use client';

import { NextReactP5Wrapper } from '@p5-wrapper/next';
import { P5CanvasInstance, SketchProps } from '@p5-wrapper/react';
import React from 'react';

import Particle from './Particle';

const sketch = (
  sketch: P5CanvasInstance<SketchProps>,
  width: number,
  height: number,
) => {
  let particleA: Particle;
  let particleB: Particle;

  sketch.setup = () => {
    sketch.createCanvas(width, height);
    particleA = new Particle(200, 200, sketch);
    particleB = new Particle(400, 200, sketch);
  };

  sketch.draw = () => {
    sketch.background(250);
    particleA.update();
    particleA.edges();
    particleA.display();

    particleB.update();
    particleB.edges();
    particleB.display();
  };
};

interface CollisionsProps {
  width: number;
  height: number;
}

const Collisions: React.FC<CollisionsProps> = ({ width, height }) => {
  return <NextReactP5Wrapper sketch={(p5) => sketch(p5, width, height)} />;
};

export default Collisions;
