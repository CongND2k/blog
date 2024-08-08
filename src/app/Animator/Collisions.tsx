'use client';

import { NextReactP5Wrapper } from '@p5-wrapper/next';
import { P5CanvasInstance, SketchProps } from '@p5-wrapper/react';
import { Vector } from 'p5';
import React from 'react';

class Particle {
  position: Vector;
  velocity: Vector;
  acceleration: Vector;
  mass: number;
  r: number;
  p5: P5CanvasInstance<SketchProps>;

  constructor(x: number, y: number, p5: P5CanvasInstance<SketchProps>) {
    this.p5 = p5;
    this.position = p5.createVector(x, y);
    this.velocity = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
    this.acceleration = p5.createVector(0, 0);
    this.mass = p5.random(2, 6);
    this.r = p5.sqrt(this.mass) * 10;
  }

  applyForce(force: { copy: () => any }) {
    const f = force.copy();
    f.div(this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    this.p5.stroke(0);
    this.p5.strokeWeight(2);
    this.p5.fill(127);
    this.p5.ellipse(this.position.x, this.position.y, this.r * 2);
  }

  edges() {
    if (this.position.x > this.p5.width - this.r) {
      this.position.x = this.p5.width - this.r;
      this.velocity.x *= -1;
    } else if (this.position.x < this.r) {
      this.position.x = this.r;
      this.velocity.x *= -1;
    }

    if (this.position.y > this.p5.height - this.r) {
      this.position.y = this.p5.height - this.r;
      this.velocity.y *= -1;
    } else if (this.position.y < this.r) {
      this.position.y = this.r;
      this.velocity.y *= -1;
    }
  }
}

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
