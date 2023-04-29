import { Request, Response } from 'express';
import { supabase } from '../config/supabase-config';

export const getRedLightCameraController = async (req: Request, res: Response) => {
    try {
        const { data, error } = await supabase
            .from('toronto_red_light_cameras')
            .select('*')
            .eq('id', req.params.id)
            .single();
        if (error) {
            return res.status(500).send({ status: "server-error" });
        }
        if (data === null) {
            return res.status(404).send({ status: "not-found" });
        }
        return res.status(200).send({ status: "success", data: data });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}

export const getRedLightCamerasController = async (req: Request, res: Response) => {
    try {
        const { data, error } = await supabase.from('toronto_red_light_cameras').select('*');

        if (error) {
            return res.status(500).send({ status: "server-error" });
        }
        if (data === null) {
            return res.status(404).send({ status: "not-found" });
        }

        return res.status(200).send({ status: "success", data: data });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}

export const createRedLightCameraController = async (req: Request, res: Response) => {
    try {
        return res.status(200).send({ status: "success", message: "createRedLightCamera" });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}

export const updateRedLightCameraController = async (req: Request, res: Response) => {
    try {
        return res.status(200).send({ status: "success", message: "updateRedLightCamera" });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}

export const deleteRedLightCameraController = async (req: Request, res: Response) => {
    try {
        return res.status(200).send({ status: "success", message: "deleteRedLightCamera" });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}

export const deleteRedLightCamerasController = async (req: Request, res: Response) => {
    try {
        return res.status(200).send({ status: "success", message: "deleteRedLightCameras" });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}
