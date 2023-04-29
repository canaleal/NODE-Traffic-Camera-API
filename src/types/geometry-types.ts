
const POINT = "Point";
const LINESTRING = "LineString";
const POLYGON = "Polygon";

export type IGeometryType = typeof POINT | typeof LINESTRING | typeof POLYGON;
  