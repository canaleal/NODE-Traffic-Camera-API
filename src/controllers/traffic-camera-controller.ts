import { Request, Response } from 'express';
import { supabase } from '../config/supabase-config';

export const getTrafficCamera = async (req: Request, res: Response) => {
    try{
        return res.status(200).send({ status: "success", message: "getTrafficCamera" });
    }
    catch(err){
        return res.status(500).send({ status: "server-error" });
    }
}

export const getTrafficCameras = async (req: Request, res: Response) => {
    try{
        return res.status(200).send({ status: "success", message: "getTrafficCameras" });
    }
    catch(err){
        return res.status(500).send({ status: "server-error" });
    }
}

export const createTrafficCamera = async (req: Request, res: Response) => {
    try{
        return res.status(200).send({ status: "success", message: "createTrafficCamera" });
    }
    catch(err){
        return res.status(500).send({ status: "server-error" });
    }
}

export const updateTrafficCamera = async (req: Request, res: Response) => {
    try{
        return res.status(200).send({ status: "success", message: "updateTrafficCamera" });
    }
    catch(err){
        return res.status(500).send({ status: "server-error" });
    }
}

export const deleteTrafficCamera = async (req: Request, res: Response) => {
    try{
        return res.status(200).send({ status: "success", message: "deleteTrafficCamera" });
    }
    catch(err){
        return res.status(500).send({ status: "server-error" });
    }
}

export const deleteTrafficCameras = async (req: Request, res: Response) => {
    try{
        return res.status(200).send({ status: "success", message: "deleteTrafficCameras" });
    }
    catch(err){
        return res.status(500).send({ status: "server-error" });
    }
}
