import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index.ts';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

const allowedOrigins = ['http://localhost:3000'];

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

app.use(router);

app.listen(PORT, () => {
  // eslint-disable-next-line no-undef, no-console
  console.log(`Server started on http://localhost:${PORT}`);
});
