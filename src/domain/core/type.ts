import { Line } from "../geometry.ts/type";
import { BoundType, PostType, StitchMeta } from "../meta/type";

interface IPost {
  id: string;
  type: PostType;
  bindType: BoundType;
  boundTo: IPost | IStitch;
  boundBy: IPost[];
}

interface IStitch {
  id: string;
  dimension: Line;
  prev?: IStitch;
  next?: IStitch;
  posts: IPost[];
  boundBy: IPost[];
}
// export class Stitch implements IStitch {
//   readonly id: string;
//   public prev?: IStitch;
//   public next?: IStitch;
//   public posts: IPost[];
//   public boundBy: IPost[];
//   public dimension?: Line;
//   constructor(meta: StitchMeta) {
//     this.id = meta.id;
//     this.posts = [];
//     this.boundBy = [];
//   }
// }
