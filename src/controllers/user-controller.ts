import { Request, Response } from "express";
import { supabase } from '../config/supabase-config';

export const signUpController = (async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) return res.status(401).json({ error: error.message });
    return res.status(200).json({ user: data });
});

export const loginController = (async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) return res.status(401).json({ error: error.message });
    return res.status(200).json({ user: data });
}
);

export const getSessionController = (async (req: Request, res: Response) => {
    try {
        const { data, error } = await supabase.auth.getSession()
        if (error) return res.status(401).json({ error: error.message });
        return res.status(200).json({ user: data });
    }
    catch (err) {
        return res.status(500).send({ status: "server-error" });
    }
}
);