import { Vector3 } from "./Vector3";

export interface Line {
  start: Vector3;
  end: Vector3;
}

export interface SplinePoint {
  position: Vector3;
  inwardHandle: Vector3;
  outwardHandle: Vector3;
}

export interface Spline {
  points: SplinePoint[];
}
