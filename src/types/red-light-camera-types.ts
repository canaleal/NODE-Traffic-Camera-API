import { ICamera } from "./camera-types";

export interface IRedLightCamera extends ICamera {
    main_road?: string;
    cross_road?: string;
    district?: string;
    police_division_1?: number;
    police_division_2?: string;
    police_division_3?: string;
  }
  