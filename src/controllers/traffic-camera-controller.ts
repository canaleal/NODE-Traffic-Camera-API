import { Request, Response } from 'express';
import { supabase } from '../config/supabase-config';
import { trafficCamerasToGeojson } from '../utils/geojson-helpers';
import { ITrafficCamera } from '../types/traffic-camera-types';

export const getTrafficCamera = async (req: Request, res: Response) => {
    try {
        const { format } = req.query;
        const { data, error } = await supabase
            .from('toronto_traffic_cameras')
            .select('*')
            .eq('id', req.params.id)
            .single();
        if (error) {
            return res.status(500).send({ status: "server-error" });
        }
        if (data === null) {
            return res.status(404).send({ status: "not-found" });
        }

        const trafficCameras = data as ITrafficCamera[];
        if (format === "geojson") {
            return res.status(200).send({ status: "success", data: trafficCamerasToGeojson(trafficCameras) });
        }
        return res.status(200).send({ status: "success", data: trafficCameras });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}

export const getTrafficCameras = async (req: Request, res: Response) => {
    try {
        const { format } = req.query;
        const { data, error } = await supabase.from('toronto_traffic_cameras').select('*');

        if (error) {
            return res.status(500).send({ status: "server-error" });
        }
        if (data === null) {
            return res.status(404).send({ status: "not-found" });
        }

        const trafficCameras = data as ITrafficCamera[];
        if (format === "geojson") {
            return res.status(200).send({ status: "success", data: trafficCamerasToGeojson(trafficCameras) });
        }
        return res.status(200).send({ status: "success", data: trafficCameras });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}

export const createTrafficCamera = async (req: Request, res: Response) => {
    try {
        return res.status(200).send({ status: "success", message: "createTrafficCamera" });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}

export const updateTrafficCamera = async (req: Request, res: Response) => {
    try {
        return res.status(200).send({ status: "success", message: "updateTrafficCamera" });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}

export const deleteTrafficCamera = async (req: Request, res: Response) => {
    try {
        return res.status(200).send({ status: "success", message: "deleteTrafficCamera" });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}

export const deleteTrafficCameras = async (req: Request, res: Response) => {
    try {
        return res.status(200).send({ status: "success", message: "deleteTrafficCameras" });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}
