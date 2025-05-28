import express from 'express';
import cors from 'cors';

import router from './routes/index.ts';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(router);

app.listen(PORT, () => {
  // eslint-disable-next-line no-undef, no-console
  console.log(`Server started on http://localhost:${PORT}`);
});
