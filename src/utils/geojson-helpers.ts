import { IGeojson, IFeature } from "../types/geojson-types";
import { ICamera } from "../types/camera-types";


export const camerasToGeojson = (cameras: ICamera[]):IGeojson => {

    const features: IFeature[] = [];

    for(let i=0, len=cameras.length; i<len; i++) {

        const camera = cameras[i];
        const feature: IFeature = {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: camera.gps_coordinates
            },
            properties: {...camera}
        };
        features.push(feature);   
    }

    const geojson: IGeojson = {
        type: "FeatureCollection",
        features
    };

    return geojson;
}