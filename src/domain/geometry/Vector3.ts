export class Vector3 {
  public z: number;

  constructor(public x: number, public y: number, z?: number) {
    this.z = z ?? 0;
  }

  static add(a: Vector3, b: Vector3): Vector3 {
    return new Vector3(a.x + b.x, a.y + b.y, a.z + b.z);
  }

  static mult(a: Vector3, k: number): Vector3 {
    return new Vector3(a.x * k, a.y * k, a.z * k);
  }

  static sub(a: Vector3, b: Vector3): Vector3 {
    return Vector3.add(a, Vector3.mult(b, -1));
  }

  static size(a: Vector3): number {
    return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
  }

  static normalize(a: Vector3): Vector3 {
    return Vector3.mult(a, 1 / Vector3.size(a));
  }

  static dot(a: Vector3, b: Vector3): number {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  }

  static cross(a: Vector3, b: Vector3): Vector3 {
    return new Vector3(
      a.y * b.z - a.z * b.y,
      a.z * b.x - a.x * b.z,
      a.x * b.y - a.y * b.x
    );
  }

  static project(a: Vector3, n: Vector3): Vector3 {
    const norm = Vector3.normalize(n);
    return Vector3.sub(a, Vector3.mult(norm, Vector3.dot(a, norm)));
  }

  add(b: Vector3): Vector3 {
    return Vector3.add(this, b);
  }

  mult(k: number): Vector3 {
    return Vector3.mult(this, k);
  }

  sub(b: Vector3): Vector3 {
    return Vector3.sub(this, b);
  }

  size(): number {
    return Vector3.size(this);
  }

  normalize(): Vector3 {
    return Vector3.normalize(this);
  }

  dot(b: Vector3): number {
    return Vector3.dot(this, b);
  }

  cross(b: Vector3): Vector3 {
    return Vector3.cross(this, b);
  }

  project(n: Vector3): Vector3 {
    return Vector3.project(this, n);
  }
}
