import { IGeojsonGeometryType } from "./geojson-types";

export interface ICamera {
    id: number;
    created_at: string;
    updated_at: string;
    gps_type: IGeojsonGeometryType;
    gps_coordinates: number[];
}