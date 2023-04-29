import { IGeojson, IFeature } from "../types/geojson-types";
import { ITrafficCamera } from "../types/traffic-camera-types";


export const trafficCamerasToGeojson = (trafficCameras: ITrafficCamera[]):IGeojson => {

    const features: IFeature[] = [];

    for(let i=0, len=trafficCameras.length; i<len; i++) {

        const trafficCamera = trafficCameras[i];
        const feature: IFeature = {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: trafficCamera.gps_coordinates
            },
            properties: {...trafficCamera}
        };
        features.push(feature);   
    }

    const geojson: IGeojson = {
        type: "FeatureCollection",
        features
    };

    return geojson;
}