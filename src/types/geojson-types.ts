
const POINT = "Point";
const LINESTRING = "LineString";
const POLYGON = "Polygon";
const FEATURE_COLLECTION = "FeatureCollection";
const FEATURE = "Feature";

export type IGeojsonType = typeof FEATURE_COLLECTION | typeof FEATURE;
export type IGeojsonGeometryType = typeof POINT | typeof LINESTRING | typeof POLYGON;

export interface IGeojsonFeature {
    type: IGeojsonType;
    geometry: {
        type: IGeojsonGeometryType;
        coordinates: number[] | number[][];
    };
    properties: {
        [key: string]: unknown;
    };
}

export interface IGeojsonCollection {
    type: IGeojsonType;
    features: IGeojsonFeature[]
}