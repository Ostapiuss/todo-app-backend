/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable quotes */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index.ts';
import { dbConfig } from './config/db.ts';
import { createApp } from './application.ts';

dotenv.config();

const start = async () => {
  console.log(`-- Initializing database`);
  await dbConfig.initialize();

  console.log(`-- Creating application`);
  const app = createApp();

  const PORT = process.env.PORT || 3001;
  const allowedOrigins = ['http://localhost:3000'];

  if (!PORT) {
    throw new Error('Port is not defined.');
  }

  app.use(
    cors({
      origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
          const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      },
    }),
  );

  app.use(express.json());
  app.use(router);

  app.listen(PORT, () => {
    // eslint-disable-next-line no-undef, no-console
    console.log(`Server started on http://localhost:${PORT}`);
  });
};

start();
