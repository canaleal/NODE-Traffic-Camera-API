import { Request, Response } from 'express';
import { supabase } from '../config/supabase-config';
import { ISpeedCamera } from '../types/speed-camera-types';
import { camerasToGeojson } from '../utils/geojson-helpers';

export const getSpeedCameraController = async (req: Request, res: Response) => {
    try {
        const { format } = req.query;
        const { data, error } = await supabase
            .from('toronto_speed_cameras')
            .select('*')
            .eq('id', req.params.id)
            .single();
        if (error) {
            return res.status(500).send({ status: "server-error" });
        }
        if (data === null) {
            return res.status(404).send({ status: "not-found" });
        }
        const speedCameras = data as ISpeedCamera[];
        if (format === "geojson") {
            return res.status(200).send({ status: "success", data: camerasToGeojson(speedCameras) });
        }
        return res.status(200).send({ status: "success", data: speedCameras });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}

export const getSpeedCamerasController = async (req: Request, res: Response) => {
    try {
        const { format } = req.query;
        const { data, error } = await supabase.from('toronto_speed_cameras').select('*');

        if (error) {
            return res.status(500).send({ status: "server-error" });
        }
        if (data === null) {
            return res.status(404).send({ status: "not-found" });
        }

        const speedCameras = data as ISpeedCamera[];
        if (format === "geojson") {
            return res.status(200).send({ status: "success", data: camerasToGeojson(speedCameras) });
        }
        return res.status(200).send({ status: "success", data: speedCameras });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}