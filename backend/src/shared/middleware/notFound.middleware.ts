import type { Request, Response } from "express";

export const notFoundMiddleware = (
    req: Request,
    res: Response,
) => {
    res.status(404).json({
        error: "Not Found",
        message: "The requested route does not exist."
    });
};
