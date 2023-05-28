export const swaggerDefinition = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "LogRocket Express API with Swagger",
            version: "1.0.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "LogRocket",
                url: "https://logrocket.com",
                email: "info@email.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
        components: {
            schemas: {
              TrafficCamera: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer',
                    format: 'int64',
                    description: 'The camera ID.',
                  },
                  created_at: {
                    type: 'string',
                    format: 'date-time',
                    description: 'The creation timestamp.',
                  },
                  updated_at: {
                    type: 'string',
                    format: 'date-time',
                    description: 'The update timestamp.',
                  },
                  gps_type: {
                    type: 'string',
                    enum: ['Point', 'LineString', 'Polygon', 'MultiPoint', 'MultiLineString', 'MultiPolygon', 'GeometryCollection'],
                    description: 'The type of the GPS geometry.',
                  },
                  gps_coordinates: {
                    type: 'array',
                    items: {
                      type: 'number'
                    },
                    description: 'The GPS coordinates.',
                  },
                  image_url: {
                    type: 'string',
                    description: 'The URL of the camera image.',
                  },
                  image_url_north: {
                    type: 'string',
                    description: 'The URL of the north-facing camera image.',
                  },
                  image_url_east: {
                    type: 'string',
                    description: 'The URL of the east-facing camera image.',
                  },
                  image_url_south: {
                    type: 'string',
                    description: 'The URL of the south-facing camera image.',
                  },
                  image_url_west: {
                    type: 'string',
                    description: 'The URL of the west-facing camera image.',
                  },
                  main_road: {
                    type: 'string',
                    description: 'The main road where the camera is located.',
                  },
                  cross_road: {
                    type: 'string',
                    description: 'The cross road near the camera.',
                  },
                },
              },
            },
        },
    },
    apis: ['./src/routes/*.ts'],
};
