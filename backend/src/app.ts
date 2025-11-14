import express from 'express';
import cors from 'cors';
import { RequestContext } from '@mikro-orm/core';
import { MikroORM } from '@mikro-orm/mariadb';
import mconfig from './mikro-orm.config.js';
import cookieParser from 'cookie-parser';

const app = express()
const orm = await MikroORM.init(mconfig);

const corsConfig = {
    origin: 'http://localhost:3000'
}

const corsConfigProtected = {
    origin: 'http://localhost:3000',
    credentials: true

}


app.use(express.json());

// 
app.use(cors(corsConfigProtected))


app.use((req, res, next) => {
    RequestContext.create(orm.em, next);
})

export default app;