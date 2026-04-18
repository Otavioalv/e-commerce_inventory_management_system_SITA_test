import 'dotenv/config';

import express, { type Request, type Response } from 'express';
import router from './routes/product.router.js';

const app = express();

app.use(express.json());

app.get("/status", (req: Request, res:Response) => {
    res.status(200).json({
        status: true
    });
});

app.use('/api', router);

export default app;
