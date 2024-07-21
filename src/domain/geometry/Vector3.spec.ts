import { Vector3 } from "./Vector3";

it("constructor", () => {
  const vector = new Vector3(1, 2, 3);
  expect(vector.x).toEqual(1);
  expect(vector.y).toEqual(2);
  expect(vector.z).toEqual(3);
});

it("constructor: default Z value", () => {
  const vector = new Vector3(1, 2);
  expect(vector.x).toEqual(1);
  expect(vector.y).toEqual(2);
  expect(vector.z).toEqual(0);
});

it("add", () => {
  expect(Vector3.add(new Vector3(1, 1, 1), new Vector3(1, 2, 3))).toEqual(
    new Vector3(2, 3, 4)
  );
});

it("subtract", () => {
  expect(Vector3.sub(new Vector3(1, 1, 1), new Vector3(1, 2, 3))).toEqual(
    new Vector3(0, -1, -2)
  );
});

it("multiply", () => {
  expect(Vector3.mult(new Vector3(1, 2, 3), 3)).toEqual(new Vector3(3, 6, 9));
});

it("size", () => {
  expect(Vector3.size(new Vector3(1, 2, 3))).toEqual(Math.sqrt(14));
});

it("normalize", () => {
  expect(Vector3.normalize(new Vector3(1, 2, 3))).toEqual(
    new Vector3(1 / Math.sqrt(14), 2 / Math.sqrt(14), 3 / Math.sqrt(14))
  );
});

it("dot project", () => {
  expect(Vector3.dot(new Vector3(1, 1, 1), new Vector3(1, 2, 3))).toEqual(6);
});

it("cross project", () => {
  expect(Vector3.cross(new Vector3(1, 1, 1), new Vector3(1, 2, 3))).toEqual(
    new Vector3(1, -2, 1)
  );
});

it("projection", () => {
  expect(Vector3.project(new Vector3(1, 1, 1), new Vector3(1, 0, 0))).toEqual(
    new Vector3(0, 1, 1)
  );
});
