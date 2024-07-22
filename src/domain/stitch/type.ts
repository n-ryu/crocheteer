import { createId } from "../../utils/createId";

export type PostType = "slip" | "single" | "half-double" | "double" | "treble";
export type BoundType =
  | "default"
  | "front-loop"
  | "back-loop"
  | "front-post"
  | "back-post";

interface IPostData {
  id: `post:${string}`;
  type: PostType;
  boundType: BoundType;
  boundTo: IStitchData["id"] | IPostData["id"];
  boundBy: IPostData["id"][];
}

interface IStitchData {
  id: `stitch:${string}`;
  prev?: IStitchData["id"];
  next?: IStitchData["id"];
  posts: IPostData["id"][];
  boundBy: IPostData["id"][];
}

export class PostData implements IPostData {
  id: `post:${string}`;
  boundBy: IPostData["id"][];

  constructor(
    public type: PostType,
    public boundType: BoundType,
    public boundTo: IStitchData["id"] | IPostData["id"]
  ) {
    this.id = createId("post");
    this.boundBy = [];
  }
}

export class StitchData implements IStitchData {
  id: `stitch:${string}`;
  prev?: IStitchData["id"];
  next?: IStitchData["id"];
  posts: IPostData["id"][];
  boundBy: IPostData["id"][];

  constructor() {
    this.id = createId("stitch");
    this.posts = [];
    this.boundBy = [];
  }
}
