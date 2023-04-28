import type { Geometry } from "./geometry-types";

export interface TrafficCamera {
  id: number;
  recId: number;
  imageUrl: string;

  refUrl1?: string;
  direction1?: string;

  refUrl2?: string;
  direction2?: string;

  mainRoad?: string;
  crossRoad?: string;

  objectId: number;

  refUrl3?: string;
  direction3?: string;

  refUrl4?: string;
  direction4?: string;

  geometry?: Geometry;
}
