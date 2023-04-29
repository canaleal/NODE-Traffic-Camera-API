import { ICamera } from "./camera-types";

export interface ITrafficCamera extends ICamera {
  image_url: string;
  image_url_north?: string;
  image_url_east?: string;
  image_url_south?: string;
  image_url_west?: string;
  main_road: string;
  cross_road: string;
}

