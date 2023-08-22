import { IGeojsonCollection, IGeojsonFeature } from "../types/geojson-types";
import { ICamera } from "../types/camera-types";


export const camerasToGeojson = (cameras: ICamera[]):IGeojsonCollection => {

    const features: IGeojsonFeature[] = [];

    for(let i=0, len=cameras.length; i<len; i++) {

        const camera = cameras[i];
        const feature: IGeojsonFeature = {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: camera.gps_coordinates
            },
            properties: {...camera}
        };
        features.push(feature);   
    }

    const geojson: IGeojsonCollection = {
        type: "FeatureCollection",
        features
    };

    return geojson;
}