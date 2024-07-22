import { PostData, StitchData } from "../stitch/type";

export class CrochetManager {
  private stitches = Map<string, StitchData>;
  private posts = Map<string, PostData>;
  private constraints = Map<string, ConstraintData>;
  private geometries = Map<string, GeometryData>;

  constructor() {}
}
