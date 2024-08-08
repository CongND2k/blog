import { P5CanvasInstance, SketchProps } from '@p5-wrapper/react';
import { Vector } from 'p5';

export default class Particle {
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

  applyForce(force: Vector) {
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

  collide(other: Particle) {
    const impactVector = Vector.sub(other.position, this.position);
    let d = impactVector.mag();
    if (d < this.r + other.r) {
      // Push the particles out so that they are not overlapping
      const overlap = d - (this.r + other.r);
      const dir = impactVector.copy();
      dir.setMag(overlap * 0.5);
      this.position.add(dir);
      other.position.sub(dir);

      // Correct the distance!
      d = this.r + other.r;
      impactVector.setMag(d);

      const mSum = this.mass + other.mass;
      const vDiff = Vector.sub(other.velocity, this.velocity);
      // Particle A (this)
      const num = vDiff.dot(impactVector);
      const den = mSum * d * d;
      const deltaVA = impactVector.copy();
      deltaVA.mult((2 * other.mass * num) / den);
      this.velocity.add(deltaVA);
      // Particle B (other)
      const deltaVB = impactVector.copy();
      deltaVB.mult((-2 * this.mass * num) / den);
      other.velocity.add(deltaVB);
    }
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
