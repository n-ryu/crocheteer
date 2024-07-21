export type PostType = "slip" | "single" | "half-double" | "double" | "treble";
export type BoundType =
  | "default"
  | "front-loop"
  | "back-loop"
  | "front-post"
  | "back-post";

export interface IYarn {
  guage?: number;
  color?: string;
}

export interface PostMeta {
  id: string;
  type: PostType;
  boundType: BoundType;
  boundTo: StitchMeta["id"] | PostMeta["id"];
}

export interface StitchMeta {
  id: string;
  prev?: StitchMeta["id"];
  posts: PostMeta[];
}

export interface FabricMeta {
  id: string;
  stitches: StitchMeta[];
}

export interface CrochetProjectMeta {
  id: string;
  fabrics: FabricMeta[];
  weaves: [StitchMeta["id"], StitchMeta["id"]][];
}
