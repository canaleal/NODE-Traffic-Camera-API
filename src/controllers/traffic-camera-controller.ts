import { Request, Response } from 'express';
import { supabase } from '../config/supabase-config';

export const getTrafficCamera = async (req: Request, res: Response) => {
    try {
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
        return res.status(200).send({ status: "success", data: data });

    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}

export const getTrafficCameras = async (req: Request, res: Response) => {
    try {
        const { data, error } = await supabase
            .from('toronto_traffic_cameras')
            .select('*')
            .order('id', { ascending: true });

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
