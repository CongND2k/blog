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
  const particles: Particle[] = [];

  sketch.setup = () => {
    sketch.createCanvas(width, height);
    particles.push(new Particle(200, 200, sketch));
    particles.push(new Particle(400, 200, sketch));
    particles.push(new Particle(400, 200, sketch));
    particles.push(new Particle(400, 200, sketch));
    particles.push(new Particle(400, 200, sketch));
    particles.push(new Particle(400, 200, sketch));
    particles.push(new Particle(400, 200, sketch));
    particles.push(new Particle(400, 200, sketch));
  };

  sketch.draw = () => {
    sketch.clear();
    // sketch.background(250);
    for (let i = 0; i < particles.length; i++) {
      for (let j = 0; j < particles.length; j++) {
        const element = particles[j];
        if (element !== particles[i]) {
          particles[i].collide(element);
        }
      }
      particles[i].update();
      particles[i].edges();
      particles[i].display();
    }
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
