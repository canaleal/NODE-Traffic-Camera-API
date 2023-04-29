import { camerasToGeojson } from "../../utils/geojson-helpers";
import { trafficCameraMock } from "../mocks/traffic-camera-mock";

describe('camerasToGeojson', () => {
    const trafficCamera = trafficCameraMock;

    beforeAll(() => {
        jest.clearAllMocks();
    });

    it('should return a geojson object', () => {
        const geojson = camerasToGeojson([trafficCamera]);
        expect(geojson).toHaveProperty("type", "FeatureCollection");
        expect(geojson).toHaveProperty("features");
        expect(geojson.features.length).toBe(1);
    });
});
