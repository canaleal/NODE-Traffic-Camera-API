import type { IGeojsonGeometryType } from "./geojson-types";


export interface ITrafficCamera {
  id: number;
  created_at: string;
  updated_at: string;
  image_url: string;
  image_url_north?: string;
  image_url_east?: string;
  image_url_south?: string;
  image_url_west?: string;
  main_road: string;
  cross_road: string;
  gps_type: IGeojsonGeometryType;
  gps_coordinates: number[];
}

