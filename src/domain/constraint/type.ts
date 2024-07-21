import { Spline } from "../geometry.ts/type";
import { StitchMeta } from "../meta/type";

export interface GeometryConstraint {
  geometry: Spline;
  stitches: StitchMeta[];
}
