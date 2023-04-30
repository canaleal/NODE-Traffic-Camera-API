import { Request, Response } from 'express';
import { supabase } from '../config/supabase-config';

export const getSpeedCameraController = async (req: Request, res: Response) => {
    try {
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
        return res.status(200).send({ status: "success", data: data });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}

export const getSpeedCamerasController = async (req: Request, res: Response) => {
    try {
        const { data, error } = await supabase.from('toronto_speed_cameras').select('*');

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