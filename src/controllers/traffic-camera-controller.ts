import { Request, Response } from 'express';
import { supabase } from '../config/supabase-config';
import { camerasToGeojson } from '../utils/geojson-helpers';
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
        if (!data) {
            return res.status(404).send({ status: "not-found" });
        }

        const responseData = format === "geojson" ? camerasToGeojson(data  as ITrafficCamera[]) : data;
        return res.status(200).send({ status: "success", data: responseData });
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

        const responseData = format === "geojson" ? camerasToGeojson(data  as ITrafficCamera[]) : data;
        return res.status(200).send({ status: "success", data: responseData });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}

export const createTrafficCamera = async (req: Request, res: Response) => {
    try {
        const cameraData: ITrafficCamera = req.body;

        // Validate the provided data before inserting
        if (!cameraData.image_url || !cameraData.main_road || !cameraData.cross_road || !cameraData.id || 
            !cameraData.created_at || !cameraData.updated_at || !cameraData.gps_type || !cameraData.gps_coordinates) {
            return res.status(400).send({ status: "error", message: "Missing required fields" });
        }

        const { data, error } = await supabase
            .from('toronto_traffic_cameras')
            .insert(cameraData);

        if (error) {
            console.error('Error creating traffic camera:', error); // Log the error for debugging
            return res.status(500).send({ status: "server-error", message: error.message });
        }

        return res.status(201).send({ status: "success", message: "Camera created successfully", data });
    }
    catch (err) {
        console.error('Unexpected server error:', err); // Log the unexpected error
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
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({ status: "error", message: "Camera ID is required" });
        }

        const { error } = await supabase
            .from('toronto_traffic_cameras')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting traffic camera:', error); // Log the error for debugging
            return res.status(500).send({ status: "server-error", message: error.message });
        }

        return res.status(200).send({ status: "success", message: "Camera deleted successfully" });
    }
    catch (err) {
        console.error('Unexpected server error:', err); // Log the unexpected error
        return res.status(500).send({ status: "server-error" });
    }
}

export const deleteTrafficCameras = async (req: Request, res: Response) => {
    try {
        const { error } = await supabase
            .from('toronto_traffic_cameras')
            .delete();

        if (error) {
            console.error('Error deleting all traffic cameras:', error); // Log the error for debugging
            return res.status(500).send({ status: "server-error", message: error.message });
        }

        return res.status(200).send({ status: "success", message: "All cameras deleted successfully" });
    }
    catch (err) {
        console.error('Unexpected server error:', err); // Log the unexpected error
        return res.status(500).send({ status: "server-error" });
    }
}