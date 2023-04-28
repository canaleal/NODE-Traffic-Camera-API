
const POINT = "Point";
const LINESTRING = "LineString";
const POLYGON = "Polygon";

export type GeometryType = typeof POINT | typeof LINESTRING | typeof POLYGON;
  
export interface Geometry {
    type: GeometryType;
    coordinates: number[];
  }
  