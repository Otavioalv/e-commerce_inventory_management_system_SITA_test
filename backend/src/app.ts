import 'dotenv/config';

import express from 'express';
import router from './routes/product.router.js';


import type { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get("/status", (req: Request, res:Response) => {
    res.status(200).json({
        status: true
    });
});

app.use('/api', router);

export default app;
