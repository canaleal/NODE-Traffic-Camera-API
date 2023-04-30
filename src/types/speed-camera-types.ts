import { ICamera } from "./camera-types";

export interface ISpeedCamera extends ICamera {
    location_code?: string;
    ward?: string;	
    status?: string;	
    location?: string;
}
